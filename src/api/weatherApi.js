import axios from 'axios';

const APIkey = import.meta.env.VITE_WEATHER_KEY;

// 날씨 데이터 받아오기
export const fetchWeatherData = async (cityName) => {
  //   console.log(cityName);
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`;
  try {
    const response = await axios.get(weatherUrl);
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};

// 게임 스케줄 데이터에 있는 도시 이름에 따라 날씨 데이터 가져오기
export const fetchWithWeatherData = async (gameScheduleData) => {
  const results = [];

  for (const game of gameScheduleData) {
    try {
      const location = game.location.includes('-')
        ? game.location.split('-', 1)
        : game.location;
      const weather = await fetchWeatherData(location);
      results.push({ ...game, weather: weather.weather[0].main });
    } catch (error) {
      console.error(`Error fetching weather data for ${game.location}:`, error);
    }
  }
  return results;
};
