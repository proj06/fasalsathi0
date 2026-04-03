const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static('public'));

// Fail fast if JWT secret is missing
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    console.error("FATAL: JWT_SECRET is not set in .env");
    process.exit(1);
}

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => { console.error(err); process.exit(1); });

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    phone:    { type: String, required: true, unique: true },
    password: { type: String, required: true },
    district: { type: String, default: 'Mohali' }
});
const User = mongoose.model('User', userSchema);

const schemeSchema = new mongoose.Schema({
    name: String, description: String, lang: String
});
const Scheme = mongoose.model('Scheme', schemeSchema);

// ── Auth Middleware ────────────────────────────────────────────
function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (!token) {
        return res.status(401).json({ error: "Access denied. Please log in." });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // { id, iat, exp }
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ error: "Session expired. Please log in again.", expired: true });
        }
        return res.status(403).json({ error: "Invalid token." });
    }
}

// ── Signup ─────────────────────────────────────────────────────
app.post('/api/auth/signup', async (req, res) => {
    try {
        const { fullName, phone, password, district } = req.body;

        if (!fullName || !phone || !password) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Explicit duplicate check for a clear error message
        const existing = await User.findOne({ phone });
        if (existing) {
            return res.status(409).json({ error: "Phone number already registered." });
        }

        const hashedPassword = await bcrypt.hash(password, 12); // 12 rounds is safer
        const newUser = new User({ fullName, phone, password: hashedPassword, district });
        await newUser.save();

        res.status(201).json({ message: "Account created successfully!" });
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ error: "Server error during signup." });
    }
});

// ── Login ──────────────────────────────────────────────────────
app.post('/api/auth/login', async (req, res) => {
    try {
        const { phone, password } = req.body;

        if (!phone || !password) {
            return res.status(400).json({ error: "Phone and password are required." });
        }

        const user = await User.findOne({ phone });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid phone number or password." });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });

        // Refresh token for long sessions
        const refreshToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '30d' });

        res.json({
            token,
            refreshToken,
            user: { fullName: user.fullName, district: user.district }
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ error: "Server error during login." });
    }
});

// ── Token Refresh ──────────────────────────────────────────────
app.post('/api/auth/refresh', (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({ error: "No refresh token provided." });

    try {
        const decoded = jwt.verify(refreshToken, JWT_SECRET);
        const newToken = jwt.sign({ id: decoded.id }, JWT_SECRET, { expiresIn: '7d' });
        res.json({ token: newToken });
    } catch (err) {
        res.status(403).json({ error: "Invalid or expired refresh token. Please log in again." });
    }
});

// ── Protected: Get logged-in user profile ─────────────────────
app.get('/api/auth/me', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) return res.status(404).json({ error: "User not found." });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Server error." });
    }
});

// ── Schemes (public) ──────────────────────────────────────────
app.get('/api/schemes/:lang', async (req, res) => {
    try {
        const schemes = await Scheme.find({ lang: req.params.lang });
        res.json(schemes);
    } catch (err) {
        res.status(500).json({ error: "Could not fetch schemes." });
    }
});

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

app.post('/api/ai-chat', async (req, res) => {
    const { message, lang } = req.body;
    
    if (!process.env.GEMINI_KEY) {
        return res.status(500).json({ response: "Error: GEMINI_KEY is missing in .env" });
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const prompt = `You are Fasal Sathi, an expert in Indian agriculture. Only answer requests related to agriculture and derivatives. Do not indulge in personal talks if user prompts. If user asks about the website, tell them its related to agriculture and helping farmers according to your own words. Do not use any text styles. Answer in plain text with proper spacing. Answer the following question briefly in ${lang}: ${message}`;
        
        const result = await model.generateContent(prompt);
        const responseText = result.response.text(); 
        
        res.json({ response: responseText });
    } catch (err) {
        console.error("Gemini Error:", err);
        res.status(500).json({ response: "I'm having trouble connecting. Try again!" });
    }
});

// ── Mandi Rates (public) ──────────────────────────────────────
app.get('/api/mandi', async (req, res) => {
    const { district } = req.query;
    const API_KEY = process.env.DATA_GOV_API_KEY;
    const resourceId = '35985678-0d79-46b4-9ed6-6f13308a1d24';
    const url = `https://api.data.gov.in/resource/${resourceId}?api-key=${API_KEY}&format=json&filters[state]=Punjab&filters[district]=${district}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (e) {
        res.status(500).json({ error: 'Failed to fetch mandi rates' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`));