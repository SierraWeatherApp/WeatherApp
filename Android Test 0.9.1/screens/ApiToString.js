import { getWeather } from "./CodeToWeather";
import { getData } from "./Fetcher";

export function logData({latitude, longitude}) {
  data = getData({latitude, longitude});
  data ? console.log(data) : "";
}

export function getPosition({latitude, longitude}) {
  data = getData({latitude, longitude});
  const poString = data[0] ? data[0].city_name : "";
  //const poString = 'City'
  return poString;
}

export function getWeatherString({latitude, longitude}) {
  data = getData({latitude, longitude});
  const stringWeather = data[0]
    ? getWeather(data[0].weathercode)
    : "";
  return stringWeather;
}

export function getTempString({latitude, longitude}) {
  data = getData({latitude, longitude});
  const stringTemp = data[0]
    ? data[0].temperature
    : "";
  return stringTemp;
}

export function getWindString({latitude, longitude}) {
  data = getData({latitude, longitude});
  const stringWind = data[0] ? data[0].windspeed : "";
  return stringWind;
}

export function getHumidityString({latitude, longitude}) {
  data = getData({latitude, longitude});
  const stringHumidity = data[0]
    ? data[0].humidity
    : "";
  //const stringHumidity = "-1"
  return stringHumidity;
}