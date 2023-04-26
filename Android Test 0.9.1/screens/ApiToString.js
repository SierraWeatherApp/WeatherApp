import { getWeather } from "./CodeToWeather";
import { getData } from "./Fetcher";

export function logData({latitude, longitude}) {
  data = getData({latitude, longitude});
  data ? console.log(data) : "";
}

export function getPosition({latitude, longitude}) {
  data = getData({latitude, longitude});
  const poString = data ? data.latitude : "";
  return poString;
}

export function getWeatherString({latitude, longitude}) {
  data = getData({latitude, longitude});
  const stringWeather = data.current_weather
    ? getWeather(data.current_weather.weathercode)
    : "";
  return stringWeather;
}

export function getTempString({latitude, longitude}) {
  data = getData({latitude, longitude});
  const stringTemp = data.current_weather
    ? data.current_weather.temperature
    : "";
  return stringTemp;
}

export function getWindString({latitude, longitude}) {
  data = getData({latitude, longitude});
  const stringWind = data.current_weather ? data.current_weather.windspeed : "";
  return stringWind;
}

export function getHumidityString({latitude, longitude}) {
  data = getData({latitude, longitude});
  const stringHumidity = data.hourly_units
    ? data.hourly.relativehumidity_2m[0]
    : "";
  return stringHumidity;
}