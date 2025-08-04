# 🌤️ Weather & AQI Dashboard

responsive weather data with API 
that shows **real-time weather**, **5-day forecasts**, and **air quality index (AQI)**. Built using HTML, CSS, and JavaScript with API integrations from OpenWeatherMap and IQAir. Designed to look great on desktop and mobile, with full Progressive Web App (PWA) support.

---

## 🖼️ Live Preview

**[View Project on GitHub Pages](https://phakorn356.github.io/weather_dashboard/)**

---

## 🚀 Features

- ✅ **Search by city** for weather and air quality (recommended to use English)
- 🌦️ Current weather: temperature, condition, humidity, wind
- 📅 5-day weather forecast
- 🌫️ Air Quality Index (AQI) with color-coded health levels
- 🖥️ Responsive, dashboard-style layout
- 📲 **PWA support** — install to home screen
- 📁 Deployed on GitHub Pages

---

## 🔧 Technologies

- HTML5 + CSS3 (Grid + Responsive)
- Vanilla JavaScript (ES Modules)
- [OpenWeatherMap API](https://openweathermap.org/)
- [IQAir AirVisual API](https://www.iqair.com/world-air-quality-api)
- Progressive Web App (PWA) `manifest.json`

---

## 📦 Installation

```bash
git clone https://github.com/Phakorn356/weather_dashboard.git
cd weather-dashboard
```

Then open `index.html` in your browser  
Or push to your GitHub and enable GitHub Pages.

---

## 📁 Project Structure

```
weather-dashboard/
├── index.html
├── style.css
├── main.js
├── weather.js
├── aqi.js
├── manifest.json
├── assets/
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
```

---

## ⚙️ Setup API Keys

Replace the API keys in `weather.js` and `aqi.js` with your own:
```js
const weatherApiKey = 'YOUR_OPENWEATHERMAP_KEY';
const aqiApiKey = 'YOUR_IQAIR_KEY';
```

---

## 📲 PWA (Add to Home Screen)

- Supports installation on mobile
- Uses `manifest.json` + app icons (192x192, 512x512)

<img width="593" height="575" alt="image" src="https://github.com/user-attachments/assets/714689b3-16ca-46ec-877d-838795a46b19" />

---
