import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getIP } from "../screens/fetchIP" 
import { setFahrenheit, setCelcius } from '../actions/unit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getWeather } from "../screens/CodeToWeather";
import { setCities, deleteCity as delC } from '../actions/cities';
import { setWeather } from '../actions/weather';

async function setUnit(unit, dID) {
  const url = `${getIP()}/api/v1/user`;
  const device_id = dID
  const headers = {
    'Content-Type': 'application/json',
    'x-device-id': device_id,
  };
  
  fetch(url, {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({temp_unit: unit}),
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

const FrameComponent = ({ onClose, temperatureUnit, onToggleTemperatureUnit }) => {
  const dispatch = useDispatch()
  const deviceID = useSelector(state => state.deviceID)
  const [isFahrenheitPressed, setIsFahrenheitPressed] = React.useState(
    temperatureUnit === "fahrenheit"
  );
  const navigation = useNavigation();
  const weatherForecast = async (cities, dID) => {
    const getFC = async (lat, long, mode) => {
      if(mode === 'tf'){
        const response = await fetch(
          `${getIP()}/api/v1/weather?latitude=${lat}&longitude=${long}&temperature=true&weathercode=true&temperature_2m_max=true&temperature_2m_min=true&mode=tf&day=7`, {
              method: 'GET',
              headers: {'x-device-id': dID}
            }
        );
        const jsonData = await response.json();
        return jsonData;
      }
      else{
        const response = await fetch(
          `${getIP()}/api/v1/weather?latitude=${lat}&longitude=${long}&weathercode=true&mode=fc&temperature_2m=true`, {
              method: 'GET',
              headers: {'x-device-id': dID}
            }
        );
        const jsonData = await response.json();
        return jsonData;
      }
    }
  let cityArray = []
  for(let i = 0; i < cities.length; i++){
    let cityForecast = {}
    let tf = await getFC(cities[i].lat, cities[i].long, 'tf')
    let fc = await getFC(cities[i].lat, cities[i].long, 'fc')
    cityForecast['city_name'] = cities[i].city_name
    cityForecast['id'] = cities[i].id
    cityForecast['24h'] = fc
    cityForecast['7d'] = tf
    cityArray.push(cityForecast)
  }
  dispatch(setWeather(cityArray))
  }
  const fetchCities = async (dID) => {
    const response = await fetch(
      `${getIP()}/api/v1/user?temperature=true&weathercode=true&windspeed=true&relativehumidity_2m=true`, {
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
        humidity: weather['relativehumidity_2m'],
        windspeed: weather['windspeed'],
        lat: jsonData['cities'][i]['latitude'], 
        long: jsonData['cities'][i]['longitude'], 
        hat: jsonData['cities'][i]['recommendation'][0],
        shirt: jsonData['cities'][i]['recommendation'][1],
        jacket: jsonData['cities'][i]['recommendation'][2],
        pants: jsonData['cities'][i]['recommendation'][3],
        shoes: jsonData['cities'][i]['recommendation'][4],
        umbrella: jsonData['cities'][i]['recommendation'][5],
      })
    }
    weatherForecast(cityArray, dID)
    dispatch(setCities(cityArray))
  };
  const handleFahrenheitPress = () => {
    console.log('f')
    setIsFahrenheitPressed(true);
    dispatch(setFahrenheit())
    navigation.navigate('Settings', { temperatureUnit: 'Fahrenheit' });
    fetchCities(deviceID)
    setUnit('fahrenheit', deviceID)
  };

  const handleCelciusPress = () => {
    console.log('c')
    setIsFahrenheitPressed(false);
    dispatch(setCelcius())
    navigation.navigate('Settings', { temperatureUnit: 'Celsius' });
    fetchCities(deviceID)
    setUnit('celsius', deviceID)
  };

  return (
    <View style={styles.frameParent}>
      <TouchableOpacity
        style={[
          styles.fahrenheitFWrapper,
          styles.wrapperLayout,
          isFahrenheitPressed && styles.buttonPressed,
        ]}
        onPress={handleFahrenheitPress}
      >
        <Text
          style={[
            styles.fahrenheitF,
            styles.celciusCTypo,
            isFahrenheitPressed && styles.textPressed,
          ]}
        >
          Fahrenheit F
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.celciusCWrapper,
          styles.wrapperLayout,
          !isFahrenheitPressed && styles.buttonPressed,
        ]}
        onPress={handleCelciusPress}
      >
        <Text
          style={[
            styles.celciusC,
            styles.celciusCTypo,
            !isFahrenheitPressed && styles.textPressed,
          ]}
        >
          {`Celcius C° `}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    overflow: "hidden",
    height: 50,
    left: 0,
    position: "absolute",
    width: 198,
  },
  celciusCTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.heading1Medium,
    fontSize: FontSize.heading1Medium_size,
    left: 10,
    position: "absolute",
  },
  fahrenheitF: {
    top: 6,
  },
  fahrenheitFWrapper: {
    top: 50,
    zIndex: 0,
  },
  celciusC: {
    top: 10,
  },
  celciusCWrapper: {
    top: 0,
    zIndex: 1,
    marginTop: 10,
  },
  frameParent: {
    borderRadius: 20,
    backgroundColor: Color.white,
    height: 100,
    padding: 10,
    maxWidth: "100%",
    maxHeight: "100%",
    width: 198,
  },
});

export default FrameComponent;
