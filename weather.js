const weatherApiKey = 'fa3b4ad8130efa5143d6174972482158';

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${weatherApiKey}&units=metric&lang=th`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('ไม่พบข้อมูลสภาพอากาศ');
  const data = await res.json();
  return data;
}

async function fetchForecast(city) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${weatherApiKey}&units=metric&lang=th`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('ไม่พบข้อมูลพยากรณ์อากาศ');
  const data = await res.json();
  return data;
}

function renderWeather(data) {
  const div = document.getElementById('weatherData');
  div.innerHTML = `
    <h2>${data.name}</h2>
    <p>อุณหภูมิ: ${data.main.temp}°C</p>
    <p>สภาพอากาศ: ${data.weather[0].description}</p>
  `;
}

function renderForecast(data) {
  const container = document.getElementById('forecastContainer');
  const daily = data.list.filter((item, idx) => idx % 8 === 0);
  container.innerHTML = daily.map(day => `
    <div>
      <p><strong>${day.dt_txt.split(' ')[0]}</strong></p>
      <p>${day.main.temp}°C - ${day.weather[0].description}</p>
    </div>
  `).join('');
}

export { fetchWeather, fetchForecast, renderWeather, renderForecast };