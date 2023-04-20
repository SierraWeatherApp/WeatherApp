import { getWeather } from "./CodeToWeather";
import { getData } from "./Fetcher";

export function logData() {
  data = getData();
  data ? console.log(data) : "";
}

export function getPosition() {
  data = getData();
  const poString = data ? data.latitude : "";
  return poString;
}

export function getWeatherString() {
  data = getData();
  const stringWeather = data.current_weather
    ? getWeather(data.current_weather.weathercode)
    : "";
  return stringWeather;
}

export function getTempString() {
  data = getData();
  const stringTemp = data.current_weather
    ? data.current_weather.temperature
    : "";
  return stringTemp;
}

export function getWindString() {
  data = getData();
  const stringWind = data.current_weather ? data.current_weather.windspeed : "";
  return stringWind;
}

export function getHumidityString() {
  data = getData();
  const stringHumidity = data.hourly_units
    ? data.hourly.relativehumidity_2m[0]
    : "";
  return stringHumidity;
}
