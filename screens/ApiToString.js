import { getWeather } from "./CodeToWeather";
import { getData } from "./Fetcher";

export function getAllData(){
  data = getData();
  const city1 = data? data : "";
  return city1
}
export function logData() {
  data = getData();
  data ? console.log(data) : "";
}

export function getPosition() {
  data = getData();
  const poString = data[0] ? data[0].city_name : "";
  //const poString = 'City'
  return poString;
}

export function getWeatherString() {
  data = getData();
  const stringWeather = data[0]
    ? getWeather(data[0].weathercode)
    : "";
  return stringWeather;
}

export function getTempString() {
  data = getData();
  const stringTemp = data[0]
    ? data[0].temperature
    : "";
  return stringTemp;
}

export function getWindString() {
  data = getData();
  const stringWind = data[0] ? data[0].windspeed : "";
  return stringWind;
}

export function getHumidityString() {
  data = getData();
  const stringHumidity = data[0]
    ? data[0].humidity
    : "";
  //const stringHumidity = "-1"
  return stringHumidity;
}