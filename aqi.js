const aqiApiKey = 'fc0dfb27-7fa4-49d5-a653-019e8eeba2ee';

async function fetchAQI(city) {
  const country = "Thailand";
  const url = `https://api.airvisual.com/v2/city?city=${encodeURIComponent(city)}&state=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&key=${aqiApiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('ไม่พบข้อมูล AQI');
  const json = await res.json();
  if (json.status !== "success") throw new Error('เกิดข้อผิดพลาดข้อมูล AQI');
  return json.data.current.pollution;
}

function renderAQI(data) {
  const aqiDiv = document.getElementById('aqiData');
  const aqi = data.aqius;
  let status = "";
  let color = "";

  if (aqi <= 50) {
    status = "ดีมาก"; color = "#0f9d58";
  } else if (aqi <= 100) {
    status = "ปานกลาง"; color = "#f4b400";
  } else if (aqi <= 150) {
    status = "ไม่ดีต่อกลุ่มเสี่ยง"; color = "#f4b400";
  } else if (aqi <= 200) {
    status = "ไม่ดี"; color = "#db4437";
  } else if (aqi <= 300) {
    status = "ไม่ดีมาก"; color = "#c51162";
  } else {
    status = "อันตราย"; color = "#6a1b9a";
  }

  aqiDiv.innerHTML = `
    <p><strong style="color:${color}; font-size: 1.5rem;">AQI: ${aqi}</strong></p>
    <p>สถานะ: ${status}</p>
    <p>สารมลพิษหลัก: ${data.mainus}</p>
  `;
}

export { fetchAQI, renderAQI };