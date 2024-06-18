import axios from 'axios';

const APIkey = import.meta.env.VITE_WEATHER_KEY;

export const fetchWeatherData = async (cityName) => {
  //   console.log(cityName);
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`;
  try {
    const response = await axios.get(weatherUrl);
    //   console.log(response.data.weather[0].main);
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};
