import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily, Padding } from "../GlobalStyles";
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  LayoutAnimation,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';

const findForecast = (id, forecast) =>{
  for(let i = 0; i < forecast.length; i++){
    if(forecast[i].id === id)
      return forecast[i]
  }
}

export default function App( {route}) {
  const id = route.params.id
  const unit = useSelector(state => state.unit)
  const forecasts = useSelector(state => state.weather)
  const forecast = (findForecast(id, forecasts))
  console.log(forecast)
  const getUnit = () =>{
    if(unit === 'fahrenheit'){
      return ('F')
    }
    else{
      return ('C')
    }
  }
  const getWeatherIcon = (weathercode) => {
    if(weathercode <= 1){
      return (require("../assets/weatherIcons/sunny.png"))
    }
    else if(weathercode <= 2){
      return (require("../assets/weatherIcons/cloudy.png"))
    }
    else if(weathercode <= 5){
      return (require("../assets/weatherIcons/overcast.png"))
    }
    else if(weathercode <= 7 || (weathercode >= 30 && weathercode <= 35)){
      return (require("../assets/weatherIcons/sandstorm.png"))
    }
    else if((weathercode >= 70 && weathercode <= 79)||
      (weathercode >= 75 && weathercode <= 76)){
      return (require("../assets/weatherIcons/snow.png"))
    }
    else if((weathercode >= 95 && weathercode <= 99)||
      weathercode == 17 || weathercode == 29 || weathercode == 13){
      return (require("../assets/weatherIcons/thunder.png"))
    }
    else if(weathercode <= 16 || (weathercode >= 40 && weathercode <= 49)){
      return (require("../assets/weatherIcons/overcast.png"))
    }
    else{
      return (require("../assets/weatherIcons/rain.png"))
    }
  };
  const indexToDay = (index) => {
    if(index === 0)
      return "Monday"
    if(index === 1)
      return "Tuesday"
    if(index === 2)
      return "Wednesday"
    if(index === 3)
      return "Thursday"
    if(index === 4)
      return "Friday"
    if(index === 5)
      return "Saturday"
    if(index === 6)
      return "Sunday"
  }
  const indexToHour = (index) => {
    if(index === 0)
      return '12 pm'
    else if(index < 12)
      return `${index} am`
    else if(index === 12)
      return '12 am'
    else 
      return `${index -12} pm`
  }
  const tempInCorrectUnit = (temp) =>{
    if(unit === 'celcius'){
      return temp
    }
    else{
      return temp * 1.8 + 32
    }
  }
  const d7 = (forecast) => {
    let list = []
    for(let i = 0; i < forecast.temperature_2m_max.length; i++){
      let tempmax = forecast.temperature_2m_max[i]
      let tempmin = forecast.temperature_2m_min[i]
      let weatherIcon = getWeatherIcon(forecast.weathercode[i])
      list.push(<View style={[styles.box2]}>
        <View style={{flexDirection:'column'}}>
        <Text style={[styles.hour]}>
          {indexToDay(((i + 4) % 7))}
        </Text>
        <Text style={styles.text}>
          {Math.round(tempInCorrectUnit(tempmin))} - {Math.round(tempInCorrectUnit(tempmax))}°{getUnit()} 
        </Text>
        </View>
        <Image
          style={[styles.box1Icon]}
          resizeMode="cover"
          source={weatherIcon}
        />
        </View>)
    }
    return list
  }
  const h24 = (forecast) => {
    let list = []
    console.log(forecast)
    for(let i = 0; i < forecast.temperature_2m.length; i++){
      let temp = forecast.temperature_2m[i]
      let weatherIcon = getWeatherIcon(forecast.weathercode[i])
      list.push(<View style={[styles.box]}>
        <View style={{flexDirection:'column'}}>
        <Text style={[styles.hour]}>
          {indexToHour(i)}
        </Text>
        <Text style={styles.text}>
          {Math.round(temp)}°{getUnit()} 
        </Text>
        </View>
        <Image
          style={[styles.box1Icon]}
          resizeMode="cover"
          source={weatherIcon}
        />
        </View>)
    }
    return list
  }
  return (
    <SafeAreaView style={{flex : 1}}>
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', padding: 12 }}>
        <Text style={styles.titleText}>Forecast</Text>
      </View>
      <View style={styles.separator} />
      <View style={{ flexDirection: 'row', padding: 12 }}>
        <Text style={styles.titleText}>24 hours</Text>
      </View>
      <ScrollView horizontal={true}>
        {h24(forecast['24h'])}
      </ScrollView>
      <View style={styles.separator} />
      <View style={{ flexDirection: 'row', padding: 12 }}>
        <Text style={styles.titleText}>7 days</Text>
      </View>
      <ScrollView>
        {d7(forecast['7d'])}
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'gray',
    margin: 5,
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box1Icon:{
    aspectRatio: 1,
    width: 40,
    marginLeft: 5
  },
  box2: {
    backgroundColor: 'gray',
    margin: 5,
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hour:{
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: FontFamily.heading1Medium,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '90%',
    alignSelf: 'center',
  },
});
