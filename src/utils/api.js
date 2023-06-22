const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const requestForecast = async (location) => {
  const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3&aqi=no&alerts=no`;
  // const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`;
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (response.ok) return data;
    else {
      console.clear();
      return response.status;
    }
  } catch {
    return null;
  }
};

export { requestForecast };
