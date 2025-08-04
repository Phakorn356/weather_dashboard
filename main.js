import { fetchWeather, fetchForecast, renderWeather, renderForecast } from './weather.js';
import { fetchAQI, renderAQI } from './aqi.js';

const btnSearch = document.getElementById('btnSearch');
const cityInput = document.getElementById('cityInput');

async function searchCity() {
  const city = cityInput.value.trim();
  if (!city) return;

  try {
    document.getElementById('weatherData').innerHTML = 'กำลังโหลดข้อมูลสภาพอากาศ...';
    document.getElementById('aqiData').innerHTML = 'กำลังโหลดข้อมูล AQI...';
    document.getElementById('forecastContainer').innerHTML = '';

    const weatherData = await fetchWeather(city);
    renderWeather(weatherData);

    const forecastData = await fetchForecast(city);
    renderForecast(forecastData);

    const aqiData = await fetchAQI(city);
    renderAQI(aqiData);

  } catch (err) {
    alert(err.message || 'ไม่สามารถดึงข้อมูลได้ กรุณาลองใหม่อีกครั้ง');
    document.getElementById('weatherData').innerHTML = '<p class="text-danger">ไม่พบข้อมูลสภาพอากาศ</p>';
    document.getElementById('aqiData').innerHTML = '<p class="text-danger">ไม่พบข้อมูล AQI</p>';
  }
}

btnSearch.addEventListener('click', searchCity);
cityInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') searchCity();
});