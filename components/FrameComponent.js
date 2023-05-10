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

async function setUnit(unit, dID) {
  const url = `http://${getIP()}:8080/api/v1/user`;
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
  const fetchCities = async (dID) => {
    const response = await fetch(
      `http://${getIP()}:8080/api/v1/user?temperature=true&weathercode=true&windspeed=true&relativehumidity_2m=true`, {
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
        hat: jsonData['cities'][i]['recommendation'][0],
        shirt: jsonData['cities'][i]['recommendation'][1],
        jacket: jsonData['cities'][i]['recommendation'][2],
        pants: jsonData['cities'][i]['recommendation'][3],
        shoes: jsonData['cities'][i]['recommendation'][4],
        umbrella: jsonData['cities'][i]['recommendation'][5],
      })
    }
    dispatch(setCities(cityArray))
  };
  const handleFahrenheitPress = () => {
    setIsFahrenheitPressed(true);
    dispatch(setFahrenheit())
    navigation.navigate('Settings', { temperatureUnit: 'Fahrenheit' });
    fetchCities(deviceID)
    setUnit('fahrenheit', deviceID)
  };

  const handleCelciusPress = () => {
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
