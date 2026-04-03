const translations = {
    en: {
        head: "Fasal Sathi",
        navDash: "Dashboard",
        navMarket: "Market",
        navSchemes: "Schemes",
        langLabel: "Language",
        console: "Farmer's Console",
        locLabel: "Location:",
        weatherHead: "Weather Intelligence",
        profitHead: "Profitability Engine",
        yieldL: "Yield (kg)",
        priceL: "Market Price (₹)",
        costL: "Input Cost (₹)",
        calcBtn: "Analyze Profit",
        aiHead: "Fasal Sathi",
        aiWelcome: "Hello, I am Fasal Sathi. How can I help you?",
        aiPlaceholder: "Ask about soil, pests...",
        mandiHead: "Live Mandi Rates",
        liveCond: "Live Conditions",
        agriAdvice: "Smart Agri-Advice",
        soilTemp: "Soil Temp (10cm):",
        sowingSuit: "Sowing Suitability:",
        high: "High",
        moderate: "Moderate",  
        low: "Low", 
        fetching: "Fetching...",
    },
    hi: {
        head: "फ़सल साथी",
        navDash: "डैशबोर्ड",
        navMarket: "बाज़ार",
        navSchemes: "योजनाएं",
        langLabel: "भाषा",
        console: "किसान कंसोल",
        locLabel: "स्थान:",
        weatherHead: "मौसम की जानकारी",
        profitHead: "मुनाफ़ा इंजन",
        yieldL: "पैदावार (kg)",
        priceL: "बाज़ार भाव (₹)",
        costL: "लागत (₹)",
        calcBtn: "मुनाफ़ा जांचें",
        aiHead: "फ़सल साथी",
        aiWelcome: "नमस्ते, मैं फ़सल साथी हूँ। मैं आपकी क्या मदद कर सकता हूँ?",
        aiPlaceholder: "मिट्टी, कीटों के बारे में पूछें...",
        mandiHead: "मंडी भाव लाइव",
        liveCond: "लाइव स्थिति",
        agriAdvice: "स्मार्ट कृषि सलाह",
        soilTemp: "मिट्टी का तापमान (10cm):",
        sowingSuit: "बुवाई की उपयुक्तता:",
        high: "उच्च",
        moderate: "मध्यम",     
        low: "निम्न", 
        fetching: "प्राप्त कर रहा है...",
    },
    pa: {
        head: "ਫਸਲ ਸਾਥੀ",
        navDash: "ਡੈਸ਼ਬੋਰਡ",
        navMarket: "ਬਾਜ਼ਾਰ",
        navSchemes: "ਯੋਜਨਾਵਾਂ",
        langLabel: "ਭਾਸ਼ਾ",
        console: "ਕਿਸਾਨ ਕੰਸੋਲ",
        locLabel: "ਸਥਾਨ:",
        weatherHead: "ਮੌਸਮ ਦੀ ਜਾਣਕਾਰੀ",
        profitHead: "ਮੁਨਾਫਾ ਇੰਜਣ",
        yieldL: "ਝਾੜ (kg)",
        priceL: "ਬਾਜ਼ਾਰ ਭਾਅ (₹)",
        costL: "ਲਾਗਤ (₹)",
        calcBtn: "ਮੁਨਾਫਾ ਚੈੱਕ ਕਰੋ",
        aiHead: "ਫਸਲ ਸਾਥੀ",
        aiWelcome: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਮੈਂ ਫਸਲ ਸਾਥੀ ਹਾਂ। ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
        aiPlaceholder: "ਮਿੱਟੀ, ਕੀੜਿਆਂ ਬਾਰੇ ਪੁੱਛੋ...",
        mandiHead: "ਮੰਡੀ ਭਾਅ ਲਾਈਵ",
        liveCond: "ਲਾਈਵ ਸਥਿਤੀ",
        agriAdvice: "ਸਮਾਰਟ ਖੇਤੀ ਸਲਾਹ",
        soilTemp: "ਮਿੱਟੀ ਦਾ ਤਾਪਮਾਨ (10cm):",
        sowingSuit: "ਬਿਜਾਈ ਦੀ ਅਨੁਕੂਲਤਾ:",
        high: "ਉੱਚਾ",
        moderate: "ਦਰਮਿਆਨਾ",   
        low: "ਘੱਟ", 
        fetching: "ਪ੍ਰਾਪਤ ਕਰ ਰਿਹਾ ਹੈ...",
    },
},
cities = {
    mohali: { lat: 30.7046, lon: 76.7179, district: "Mohali" },
    amritsar: { lat: 31.634, lon: 74.8723, district: "Amritsar" },
    ludhiana: { lat: 30.901, lon: 75.8573, district: "Ludhiana" },
    jalandhar: { lat: 31.326, lon: 75.5762, district: "Jalandhar" },
    bathinda: { lat: 30.211, lon: 74.9455, district: "Bathinda" },
    ferozepur: { lat: 30.915, lon: 74.605, district: "Ferozpur" },
    abohar: { lat: 30.1204, lon: 74.1993, district: "Fazilka" },
    patiala: { lat: 30.3398, lon: 76.3869, district: "Patiala" },
    sangrur: { lat: 30.229, lon: 75.8412, district: "Sangrur" },
    nawanshahr: { lat: 31.1256, lon: 76.1208, district: "Nawanshahr" },
};
let currentLat = 31.326,
currentLon = 75.5762,
currentDistrict = "Jalandhar",
currentLang = "en";
async function updateCity(e) {
const t = cities[e];
(currentLat = t.lat), (currentLon = t.lon), (currentDistrict = t.district), fetchWeather(), fetchMarketRates();
}
async function changeLanguage(e) {
(currentLang = e), localStorage.setItem("selectedLang", e);
document.querySelectorAll("[data-key]").forEach((t) => {
    const n = t.getAttribute("data-key");
    translations[e] && translations[e][n] && (t.innerText = translations[e][n]);
});
document.querySelectorAll("[data-placeholder-key]").forEach((t) => {
    const n = t.getAttribute("data-placeholder-key");
    translations[e] && translations[e][n] && (t.placeholder = translations[e][n]);
}),
    fetchWeather();
}
function calculateProfit() {
const e = document.querySelector(".calc-actions .btn-primary"),
    t = document.getElementById("result"),
    n = ["yield", "price", "cost"];
if (e.classList.contains("clear-mode"))
    return (
        n.forEach((e) => (document.getElementById(e).value = "")),
        (t.innerText = "₹0"),
        t.classList.remove("calculated"),
        (e.innerText = translations[currentLang].calcBtn),
        void e.classList.remove("clear-mode")
    );
const a =
    (parseFloat(document.getElementById("yield").value) || 0) *
        (parseFloat(document.getElementById("price").value) || 0) -
    (parseFloat(document.getElementById("cost").value) || 0);
(t.innerText = `₹${a}`),
    t.classList.add("calculated"),
    (e.innerText = "pa" === currentLang ? "ਸਾਫ਼ ਕਰੋ" : "hi" === currentLang ? "साफ़ करें" : "Clear"),
    e.classList.add("clear-mode");
}
async function fetchWeather() {
    const e = document.getElementById("weather-data");
    try {
        const t = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${currentLat}&longitude=${currentLon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=soil_temperature_0_to_7cm_mean&timezone=auto`
        );
        if (!t.ok) throw new Error("API Down");
        const n = await t.json(),
            a = n.current.temperature_2m,
            i = n.current.weather_code,
            r = translations[currentLang];

        // Estimate soil temp from daily data or fallback to air temp estimate
        const soilTemp = n.daily?.soil_temperature_0_to_7cm_mean?.[0]
            ?? (a * 0.9 + 2).toFixed(1);

        // Derive sowing suitability
        const sowing = getSowingSuitability(soilTemp, n.current.relative_humidity_2m, i, r);

        let o = getWeatherDesc(i, currentLang),
            c = i >= 51 ? "#d00000" : "#2d6a4f";

        document.getElementById("weather-box").style.background = c;
        e.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
                <div>
                    <div style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8;">${r.liveCond}</div>
                    <div style="font-size: 3.5rem; font-weight: 800; margin: 10px 0;">${a}°C</div>
                    <p style="font-size: 1.2rem; font-weight: 600;">${o}</p>
                    <div style="margin-top: 20px; font-size: 0.9rem; display: flex; gap: 15px;">
                        <span>💧 ${n.current.relative_humidity_2m}%</span>
                        <span>💨 ${n.current.wind_speed_10m} km/h</span>
                    </div>
                </div>
                <div style="background: rgba(255,255,255,0.15); padding: 20px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.2);">
                    <h4 style="margin-bottom: 12px; font-size: 1rem;">${r.agriAdvice}</h4>
                    <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.85rem;">
                        <div style="display: flex; justify-content: space-between;">
                            <span>${r.soilTemp}</span>
                            <strong>${soilTemp}°C</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span>${r.sowingSuit}</span>
                            <strong style="color: ${sowing.color};">${sowing.label}</strong>
                        </div>
                        <hr style="opacity: 0.2;">
                        <p style="font-style: italic; opacity: 0.9;">"${getDynamicAdvice(currentLang, i, a, n.current.relative_humidity_2m, n.current.wind_speed_10m)}"</p>
                    </div>
                </div>
            </div>
        `;
    } catch (t) {
        e.innerHTML = "⚠️ Service unavailable.";
    }
}
function getSowingSuitability(soilTemp, humidity, weatherCode, r) {
    const temp = parseFloat(soilTemp);
    const isRaining = weatherCode >= 51;
    
    // Critical Thresholds for Punjab Crops (Wheat/Rice)
    const tooCold = temp < 10;
    const tooHot = temp > 35;
    const tooWet = humidity > 85 || isRaining;

    // Use a helper to safely get the label or fall back to English
    const getLabel = (key) => r[key] || translations.en[key];

    if (tooCold || tooHot || (tooWet && isRaining)) {
        return { label: getLabel('low'), color: "white" }; // Red
    } else if (temp >= 18 && temp <= 28 && !tooWet) {
        return { label: getLabel('high'), color: "#95d5b2" }; // Green
    } else {
        return { label: getLabel('moderate'), color: "#f4a261" }; // Orange
    }
}
function getWeatherDesc(e, t) {
const n = {
    en: { 0: "Clear Skies", 51: "Rain Predicted", default: "Stable Conditions" },
    hi: { 0: "साफ आसमान", 51: "बारिश की भविष्यवाणी", default: "स्थिर स्थिति" },
    pa: { 0: "ਸਾਫ਼ ਅਸਮਾਨ", 51: "ਮੀਂਹ ਦੀ ਭਵਿੱਖਬਾਣੀ", default: "ਸਥਿਰ ਹਾਲਾਤ" },
};
return n[t][e] ? n[t][e] : n[t].default;
}
function getDynamicAdvice(lang, weatherCode, temp, humidity, windSpeed) {
    const isRaining = weatherCode >= 51;
    const isStormy = weatherCode >= 71;
    const isClear = weatherCode <= 3;
    const isHot = temp > 35;
    const isCold = temp < 10;
    const isHumid = humidity > 80;
    const isWindy = windSpeed > 30;

    const advice = {
        en: () => {
            if (isStormy) return "Avoid fieldwork today. Secure equipment and wait for the storm to pass.";
            if (isRaining) return "Good time to check drainage channels. Avoid spraying pesticides in wet conditions.";
            if (isHot && isHumid) return "High heat and humidity risk fungal spread. Monitor crops closely and ensure ventilation.";
            if (isHot) return "Irrigate early morning or evening to reduce evaporation losses.";
            if (isCold) return "Frost risk is elevated. Cover sensitive seedlings and delay sowing if possible.";
            if (isWindy) return "Avoid spraying today — wind will carry chemicals off-target.";
            if (isHumid) return "Humidity is high. Watch for fungal disease on leaves and consider a preventive spray.";
            if (isClear) return "Clear skies are ideal for fertilizer application and field inspections.";
            return "Moderate conditions. A good day for routine crop monitoring and maintenance.";
        },
        pa: () => {
            if (isStormy) return "ਅੱਜ ਖੇਤ ਵਿੱਚ ਕੰਮ ਨਾ ਕਰੋ। ਮਸ਼ੀਨਰੀ ਸੁਰੱਖਿਅਤ ਕਰੋ।";
            if (isRaining) return "ਨਿਕਾਸੀ ਨਾਲੀਆਂ ਦੀ ਜਾਂਚ ਕਰੋ। ਗਿੱਲੇ ਮੌਸਮ ਵਿੱਚ ਕੀਟਨਾਸ਼ਕ ਨਾ ਛਿੜਕੋ।";
            if (isHot && isHumid) return "ਗਰਮੀ ਅਤੇ ਨਮੀ ਕਾਰਨ ਫੰਗਲ ਰੋਗ ਦਾ ਖ਼ਤਰਾ ਹੈ। ਫ਼ਸਲਾਂ ਦੀ ਨੇੜਿਓਂ ਨਿਗਰਾਨੀ ਕਰੋ।";
            if (isHot) return "ਸਵੇਰੇ ਜਾਂ ਸ਼ਾਮ ਨੂੰ ਸਿੰਚਾਈ ਕਰੋ ਤਾਂ ਜੋ ਪਾਣੀ ਦਾ ਨੁਕਸਾਨ ਘੱਟ ਹੋਵੇ।";
            if (isCold) return "ਠੰਡ ਦਾ ਖ਼ਤਰਾ ਹੈ। ਨਾਜ਼ੁਕ ਬੂਟਿਆਂ ਨੂੰ ਢੱਕੋ ਅਤੇ ਬਿਜਾਈ ਮੁਲਤਵੀ ਕਰੋ।";
            if (isWindy) return "ਅੱਜ ਛਿੜਕਾਅ ਨਾ ਕਰੋ — ਹਵਾ ਕਾਰਨ ਰਸਾਇਣ ਗਲਤ ਦਿਸ਼ਾ ਵਿੱਚ ਜਾ ਸਕਦੇ ਹਨ।";
            if (isHumid) return "ਨਮੀ ਵਧੇਰੇ ਹੈ। ਪੱਤਿਆਂ 'ਤੇ ਫੰਗਲ ਰੋਗ ਦੇਖੋ ਅਤੇ ਰੋਕਥਾਮ ਸਪਰੇਅ ਕਰੋ।";
            if (isClear) return "ਸਾਫ਼ ਅਸਮਾਨ ਖਾਦ ਪਾਉਣ ਅਤੇ ਖੇਤ ਦੀ ਜਾਂਚ ਲਈ ਆਦਰਸ਼ ਹੈ।";
            return "ਆਮ ਹਾਲਾਤ। ਫ਼ਸਲਾਂ ਦੀ ਰੁਟੀਨ ਦੇਖਭਾਲ ਲਈ ਚੰਗਾ ਦਿਨ ਹੈ।";
        },
        hi: () => {
            if (isStormy) return "आज खेत में काम न करें। उपकरण सुरक्षित करें और तूफ़ान के गुजरने का इंतज़ार करें।";
            if (isRaining) return "जल निकासी नालियों की जांच करें। गीले मौसम में कीटनाशक न छिड़कें।";
            if (isHot && isHumid) return "गर्मी और नमी से फंगल रोग का खतरा है। फसलों की करीब से निगरानी करें।";
            if (isHot) return "सुबह या शाम को सिंचाई करें ताकि पानी की बर्बादी कम हो।";
            if (isCold) return "पाले का खतरा है। नाजुक पौधों को ढकें और बुवाई स्थगित करें।";
            if (isWindy) return "आज छिड़काव न करें — हवा रसायन को गलत दिशा में ले जाएगी।";
            if (isHumid) return "नमी अधिक है। पत्तियों पर फफूंद रोग देखें और रोकथाम स्प्रे करें।";
            if (isClear) return "साफ आसमान खाद डालने और खेत निरीक्षण के लिए आदर्श है।";
            return "सामान्य स्थिति। फसलों की नियमित देखभाल के लिए अच्छा दिन है।";
        }
    };

    return (advice[lang] ?? advice.en)();
}
async function fetchMarketRates() {
    const e = document.getElementById("price-list");
    const t = `mandi_cache_${currentDistrict}`;
    const n = localStorage.getItem(t);

    if (n) {
        renderMandiList(JSON.parse(n));
    } else {
        e.innerHTML = `
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
        `;
    }

    try {
        const a = await fetch(`/api/mandi?district=${currentDistrict}`); 
        const i = (await a.json()).records;

        if (i && i.length > 0) {
            localStorage.setItem(t, JSON.stringify(i));
            renderMandiList(i);
        } else if (!n) {
            e.innerHTML = "<li>No data for this district today</li>";
        }
    } catch (t) {
        console.error("Mandi Fetch Error:", t);
        if (!n) {
            e.innerHTML = "<li>Error loading live rates. Check connection.</li>";
        }
    }
}
function renderMandiList(e) {
const t = document.getElementById("price-list");
t.innerHTML = "";
const n = new Map();
e.forEach((e) => {
    n.has(e.Commodity) || n.set(e.Commodity, e);
}),
    n.forEach((e) => {
        const n = document.createElement("li");
        (n.innerHTML = `\n            <div class="crop-info">\n                <span class="crop-name">${e.Commodity}</span>\n                <span class="market-name">${e.Market}</span>\n            </div>\n            <div class="price-info">₹${e.Modal_Price}/q</div>\n        `),
            t.appendChild(n);
    });
}
async function sendToAI() {
    const input = document.getElementById("chat-input"),
        t = input.value.trim(),
        n = document.getElementById("ai-chat");
    const token = localStorage.getItem('token');
    if (!t) return;

    n.innerHTML += `<p style="color: var(--primary); margin-bottom: 12px;"><b>You:</b> ${t}</p>`;
    input.value = "";
    const loadingId = "ai-loading-msg";
    n.innerHTML += `<p id="${loadingId}" style="color: var(--text-muted); font-style: italic; opacity: 0.8;">
        <i class="fas fa-spinner fa-spin"></i> ${{ en: "Fasal Sathi is thinking...", hi: "फ़सल साथी सोच रहा है...", pa: "ਫਸਲ ਸਾਥੀ ਸੋਚ ਰਿਹਾ ਹੈ..." }[currentLang]}
    </p>`;
    n.scrollTop = n.scrollHeight;

    try {
        const res = await fetch("/api/ai-chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ message: t, lang: currentLang, location: currentDistrict }),
        });

        // 401 handling in scope
        if (res.status === 401) {
            const tried = await tryRefreshToken();
            document.getElementById(loadingId)?.remove();
            if (!tried) { window.location.href = 'login.html'; return; }
            return sendToAI();
        }

        const data = await res.json();
        document.getElementById(loadingId)?.remove();
        n.innerHTML += `<p style="margin-bottom: 16px;"><b>AI:</b> ${data.response}</p>`;
        n.scrollTop = n.scrollHeight;
    } catch (err) {
        document.getElementById(loadingId)?.remove();
        n.innerHTML += '<p style="color: #dc2626;"><b>System:</b> Connection failed. Please try again.</p>';
    }
}


async function tryRefreshToken() {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) return false;

    const res = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken })
    });

    if (res.ok) {
        const data = await res.json();
        localStorage.setItem('token', data.token);
        return true;
    }
    return false;
}

function renderAuthButton() {
    const container = document.getElementById('auth-btn-container');
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');

    if (token) {
        container.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 0.85rem; font-weight: 600; color: var(--primary);">
                    👤 ${userName || 'Farmer'}
                </span>
                <button class="login-btn" onclick="handleLogout()">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </button>
            </div>
        `;
    } else {
        container.innerHTML = `
            <a href="login.html" class="login-btn">
                <i class="fas fa-user"></i> Login / Sign Up
            </a>
        `;
    }
}

function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userName');
    renderAuthButton();
}

window.onload = () => {
const e = localStorage.getItem("selectedLang") || "en";
(currentLang = e), (document.getElementById("lang-select").value = e), changeLanguage(e), fetchMarketRates(), renderAuthButton();
const t = document.getElementById("chat-input");
t &&
    t.addEventListener("keydown", (e) => {
        "Enter" === e.key && (e.preventDefault(), sendToAI());
    });
};
