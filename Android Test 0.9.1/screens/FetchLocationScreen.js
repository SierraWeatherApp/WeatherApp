import React, { useState, useEffect } from "react";
import { getWeather } from "./CodeToWeather";
import { getIP } from "../assets/fetchIP" 
export function getData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchWeather = async (lat, long) => {
        const url = `http://${getIP()}:8080//api/v1/weather?latitude=${lat}&longitude=${long}&temperature=true&weathercode=true`;
        const data = {
          city_id: 2673729,
          city_name: 'Stockholm',
          country: 'Sweden',
          latitude: 59.33459,
          longitude: 18.06324,
        };
        const device_id = '19238723y7dh3su2as21dfs231a213sd2af'
        const headers = {
          'Content-Type': 'application/json',
          'x-device-id': device_id,
        };
        return fetch(url, {
          method: 'GET',
          headers: headers,
          body: JSON.stringify(),
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          return data;
        })
        .catch(error => {
          console.error('Error:', error);
        });
      };
      const fetchCities = async () => {
          const response = await fetch(
            `http://${getIP()}:8080/api/v1/user/cities`, {
              method: 'GET',
              headers: {'x-device-id': '19238723y7dh3su2as21dfs231a213sd2af'}
              }
          );
          const jsonData = await response.json();
          //console.log(jsonData)
          var cityArray = []
          //console.log(jsonData['cities'][0]['latitude'])
          for(var i = 0; i < jsonData['cities'].length; i++){
            weather = await fetchWeather(jsonData['cities'][i]["latitude"],jsonData['cities'][i]["longitude"] )
            cityArray.push({city: jsonData['cities'][i]['city_name'], city_id: jsonData['cities'][i]['id'], temp: weather['temperature'], weather: getWeather(weather['weathercode'])})
          }
          setData(cityArray)
        };
    fetchCities();
  }, []);
  return data;
}
export function delCity(city_id) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const del = async (city_id) => {
        const url = `http://192.168.0.160:8080//api/v1/user/cities/${city.id}`;
        const device_id = '19238723y7dh3su2as21dfs231a213sd2af'
        const headers = {
          'Content-Type': 'application/json',
          'x-device-id': device_id,
        };
        return fetch(url, {
          method: 'DELTE',
          headers: headers,
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          return data;
        })
        .catch(error => {
          console.error('Error:', error);
        });
      };
    del(city_id);
  }, []);
  return data;
}