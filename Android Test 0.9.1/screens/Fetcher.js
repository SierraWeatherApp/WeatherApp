import React, { useState, useEffect, useMemo } from 'react';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getIP, getDevice } from "../assets/fetchIP" 
import { getWeather } from "./CodeToWeather";

export function getData({ latitude, longitude }) {
  const [dID, setdID] = useState('123');
  useEffect(() => {
      const getUsername = async () => {
        var id = await AsyncStorage.getItem('key');
        if(id){
          setdID(id)
        }
        else{
          const newID = uuid.v4();
          await AsyncStorage.setItem('key', newID);
          setdID(newID)
        }
      };
      getUsername();
  }, []);
  const [data, setData] = useState([]);

  const memoizedData = useMemo(() => {
    return data;
  }, [data]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(
        `http://${getIP()}:8080/api/v1/user?temperature=true&weathercode=true&windspeed=true&`, {
            method: 'GET',
            headers: {'x-device-id': dID}
          }
      );
      const jsonData = await response.json();
      var cityArray = []
      for(var i = 0; i < jsonData['cities'].length; i++){
        weather = jsonData['cities'][i]['weather']
        //weather = await fetchWeather(jsonData['cities'][i]["latitude"],jsonData['cities'][i]["longitude"] )
        cityArray.push({city_name: jsonData['cities'][i]['city_name'], 
          key: i + 1, 
          country: jsonData['cities'][i]['country'],
          id: jsonData['cities'][i]['id'], 
          temperature: weather['temperature'], 
          weather: getWeather(weather['weathercode']),
          weathercode: weather['weathercode'],
          unit: jsonData['user_temp_unit'],
          humidity: weather['humidity'],
          windspeed: weather['windspeed']
        })
      }
      setData(cityArray)
    };
    if(dID != '123')
      fetchCities()
  }, [dID]);

  return memoizedData;
}