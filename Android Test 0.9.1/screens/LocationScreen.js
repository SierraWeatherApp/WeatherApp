import React, { useState, useEffect, useRef } from "react";
import { TouchableOpacity, StyleSheet, View, Text, Image, Pressable, PanResponder, Animated , ScrollView, Dimensions, Button} from "react-native";
import { useNavigation, useFocusEffect  } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { getIP, getDevice } from "../assets/fetchIP" 
import { getWeather } from "./CodeToWeather";
import DraggableFlatList from 'react-native-draggable-flatlist';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
const LocationScreen = () => {
  const [data, setData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [dragged, setDragged] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchWeather = async (lat, long) => {
      const url = `http://${getIP()}:8080//api/v1/weather?latitude=${lat}&longitude=${long}&temperature=true&weathercode=true`;
      const device_id = getDevice()
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
            headers: {'x-device-id': getDevice()}
          }
      );
      const jsonData = await response.json();
      var cityArray = []
      for(var i = 0; i < jsonData['cities'].length; i++){
        weather = await fetchWeather(jsonData['cities'][i]["latitude"],jsonData['cities'][i]["longitude"] )
        cityArray.push({city_name: jsonData['cities'][i]['city_name'], 
          key: i + 1, 
          country: jsonData['cities'][i]['country'],
          id: jsonData['cities'][i]['id'], 
          temp: weather['temperature'], 
          weather: getWeather(weather['weathercode']),
          weathercode: weather['weathercode']
        })
      }
      setData(cityArray)
      setIsLoading(false);
    };
    const changeOrder = async (cities) => {
      const url = `http://${getIP()}:8080/api/v1/user/cities/city_order`;
      const device_id = getDevice()
      const headers = {
        'Content-Type': 'application/json',
        'x-device-id': device_id,
      };
      var cityArray = []
      for(var i = 0; i < cities.length; i++){
        cityArray.push({id: cities[i].id, 
          order: i + 1})
      }
      const params = {cities: cityArray}
      fetch(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(params),
      });
    };
    if(isLoading)
      fetchCities();
    else if(dragged){
      changeOrder(data)
      setDragged(false)
    }
  }, [isLoading, dragged]);
  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(true);
    }, [])
  );
  
  const deleteCity = async (cityId) => {
    const device_id = getDevice()
    const response = await fetch(`http://${getIP()}:8080/api/v1/user/cities/${cityId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-device-id': device_id,
        // Add any additional headers as needed, such as authorization headers.
      },
    });
    if (!response.ok) {
      // Handle error cases here, such as showing an error message to the user.
      console.log(`Error deleting city with ID ${cityId}: ${response.status}`);
      return;
    }
  
    // Success! City was deleted.
    console.log(`City with ID ${cityId} was deleted.`);
  };

  const createCityList = ({ item, drag }) => {
    let prevOpenedRow;
    let row = [];
    const closeRow = (index) => {
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };
    const renderRightActions = (item) => {
      return (
        <View
          style={{
            margin: 0,
            alignContent: 'center',
            justifyContent: 'center',
            width: 70,
          }}>
          <Button color="red" onPress={() =>deleteItem(item)} title="DELETE"></Button>
        </View>
      );
    };
    const deleteItem = (item) => {
      const id = item['id']
      const oldData = data
      var newData = []
      oldData.forEach((element) => {
        if(element['id'] != id)
          newData.push(element)
      });
      setData(newData)
      deleteCity(item['id'])
    }
    const getWeatherIcon = (weathercode) => {
      if(weathercode <= 1){
        return (require("../assets/sunny.png"))
      }
      else if(weathercode <= 2){
        return (require("../assets/cloudy.png"))
      }
      else if(weathercode <= 5){
        return (require("../assets/overcast.png"))
      }
      else if(weathercode <= 7 || (weathercode >= 30 && weathercode <= 35)){
        return (require("../assets/sandstorm.png"))
      }
      else if((weathercode >= 70 && weathercode <= 79)||
        (weathercode >= 75 && weathercode <= 76)){
        return (require("../assets/snow.png"))
      }
      else if((weathercode >= 95 && weathercode <= 99)||
        weathercode == 17 || weathercode == 29 || weathercode == 13){
        return (require("../assets/thunder.png"))
      }
      else if(weathercode <= 16 || (weathercode >= 40 && weathercode <= 49)){
        return (require("../assets/overcast.png"))
      }
      else{
        return (require("../assets/rain.png"))
      }
    };
    const path = getWeatherIcon(item.weathercode)
    return (
      <TouchableOpacity onLongPress={drag}>
        <GestureHandlerRootView>
        <Swipeable renderRightActions={() =>renderRightActions(item)}
        rightOpenValue={-50}>
          <View style={[styles.cityListItem] } >
            <View style={[styles.cityListRight]}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.cityListCityName]}>{item.city_name} </Text>
                <Text style={[styles.cityListCountry]}>({item.country})</Text>
              </View>
              <Text style={[styles.cityListCond]}>{item.weather}</Text>
            </View>
            <View style={[styles.cityListLeft]}>
              <Text style={[styles.cityListTemp]}>{item.temp}°</Text>
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
    setData(data);
    setDragged(true)
  };
  return (
     <View style={[styles.locationScreen]}>
        <View style={[styles.topBar]}>
        <Pressable
            style={styles.arrow}
            onPress={() => navigation.navigate("DayHomePage")}
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
                data={data}
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
    fontSize: 40,
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
