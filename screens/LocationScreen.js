import React, { useState, useEffect, useRef } from "react";
import { TouchableOpacity, StyleSheet, View, Text, Image, Pressable, Dimensions, Button} from "react-native";
import { useNavigation, useFocusEffect  } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { getIP, getDevice } from "./fetchIP" 
import { getWeather } from "./CodeToWeather";
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux'
import { setCities, deleteCity as delC } from '../actions/cities';

const changeOrder = async (cities, deviceID) => {
  const url = `http://${getIP()}:8080/api/v1/user/cities/change_order`;
  const device_id = deviceID
  const headers = {
    'Content-Type': 'application/json',
    'x-device-id': device_id,
  };
  var cityArray = []
  for(var i = 0; i < cities.length; i++){
    cityArray.push(cities[i].id)
  }
  const params = {cities_ids: cityArray}
  fetch(url, {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify(params),
  });
};

const LocationScreen = () => {
  const dispatch = useDispatch()
  const unit = useSelector(state => state.unit)
  const data = useSelector(state => state.cities)
  const deviceID = useSelector(state => state.deviceID)
  const navigation = useNavigation();
  
  const deleteCity = async (cityId) => {
    const device_id = deviceID
    const response = await fetch(`http://${getIP()}:8080/api/v1/user/cities/destroy`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-device-id': device_id,
        // Add any additional headers as needed, such as authorization headers.
      },
      body: JSON.stringify({city_id: cityId})
    });
    if (!response.ok) {
      // Handle error cases here, such as showing an error message to the user.
      console.log(`Error deleting city with ID ${cityId}: ${response.status}`);
      return;
    }
    //setUpdated(true)
    // Success! City was deleted.
  };

  const createCityList = ({ item, drag }) => {
    const renderRightActions = (item) => {
      return (
        <View style={[styles.delete]}>
          <Pressable
            style={[styles.deleteButton]}
            onPress={() =>deleteItem(item)}
          >
            <Image
              style={[]}
              resizeMode="cover"
              source={require("../assets/trashcan.png")}
            />
          </Pressable>
        </View>
      );
    };
    const deleteItem = (item) => {
      const id = item['id']
      const oldData = data.cities
      var newData = []
      oldData.forEach((element) => {
        if(element['id'] != id)
          newData.push(element)
      });
      //setData(newData)
      dispatch(delC(id))
      deleteCity(item['id'])
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
    const getUnit = () =>{
      if(unit === 'fahrenheit'){
        return ('F')
      }
      else{
        return ('C')
      }
    }
    const path = getWeatherIcon(item.weathercode)
    return (
      <TouchableOpacity onLongPress={drag} key={item.key}>
        <GestureHandlerRootView>
        <Swipeable renderRightActions={() =>renderRightActions(item)}
        rightOpenValue={-50}>
          <View style={[styles.cityListItem] } >
            <View style={[styles.cityListRight]}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.cityListCityName]}>{item.city_name} </Text>
                <Text style={[styles.cityListCountry]}>{item.country}</Text>
              </View>
              <Text style={[styles.cityListCond]}>{item.weather}</Text>
            </View>
            <View style={[styles.cityListLeft]}>
              <Text style={[styles.cityListTemp]}>{item.temperature}°{getUnit()}</Text>
              <Image
                style={[styles.cityListIcon]}
                resizeMode="cover"
                source={path}
              />
            </View>
          </View>
        </Swipeable>
        </GestureHandlerRootView>
      </TouchableOpacity>
    );
  };
  const onDragEnd = ({ data }) => {
    dispatch(setCities(data))
    changeOrder(data, deviceID)
    //setData(data);
    //setDragged(true)
  };
  return (
     <View style={[styles.locationScreen]}>
        <View style={[styles.topBar]}>
        <Pressable
            style={styles.arrow}
            onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[]}
            resizeMode="cover"
            source={require("../assets/arrow1.png")}
          />
        </Pressable>
          <Pressable
            style={[styles.addLocation]}
            onPress={() => navigation.navigate("AddCity")}
          >
            <Text style={[styles.addLocationText]}>Add Location</Text>
            <Image
              style={[]}
              resizeMode="cover"
              source={require("../assets/location-on1.png")}
            />
          </Pressable>
        </View>
          <View style={[styles.cityList]}>
            <GestureHandlerRootView>
              <DraggableFlatList
                data={data.cities}
                renderItem={createCityList}
                keyExtractor={(item) => item.key}
                onDragEnd={onDragEnd}
              />
            </GestureHandlerRootView>
          </View>
      </View>
  );
};
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  deleteButton: {
    marginLeft: 10,
    backgroundColor: Color.gray_100,
    borderRadius: 100,
    padding: 10,
    marginTop: 26
  },
  locationScreen: {
    overflow: "hidden",
    height: screenHeight,
    backgroundColor: Color.white,
  },
  addLocation: {
    borderRadius: 11,
    width: screenWidth - 40,
    backgroundColor: Color.light_gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 2,
  },
  addLocationText:{
    fontFamily: FontFamily.heading1Medium,
    fontSize: 18,
    color: Color.black,
    marginLeft: 5,
    marginBottom: 5,
  },
  cityListItem: {
    height: 91,
    width: screenWidth - 40,
    backgroundColor: Color.lightskyblue,
    marginBottom: 20,
    borderRadius: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  scrollView: {
  },
  cityList: {
    position: "relative",
    flex: 1,
    alignItems: 'center',
  },
  cityListCityName: {
    fontFamily: FontFamily.heading1Medium,
    fontSize: 18,
    color: Color.black,
    alignSelf: 'flex-end',
  },
  cityListCountry: {
    fontFamily: FontFamily.montserratLight,
    fontSize: 10,
    color: Color.black,
    alignSelf: 'flex-end',
    paddingBottom: 2,
  },
  cityListCond: {
    fontSize: 12,
    fontWeight: "300",
    fontFamily: FontFamily.montserratLight,
  },
  cityListTemp: {
    fontSize: 35,
    color: Color.white,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  cityListLeft: {
    flexDirection: 'row',
  },
  cityListRight: {
    paddingBottom: 20,
  },
  cityListIcon: {
    margin: 5,
    width: 38,
    aspectRatio: 1, 
  },
  topBar: {
    position: "relative",
    marginTop: 40,
    marginBottom: 20,
  },
  arrow: {
    width: 28,
    height: 23,
    marginLeft: 20,
    marginBottom: 8,
  },
});

export default LocationScreen;
