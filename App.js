const Stack = createNativeStackNavigator();
import { LogBox } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FAQ from "./screens/FAQ";
import About from "./screens/About";
import ContactUs from "./screens/ContactUs";
import HelpSupport from "./screens/HelpSupport";
import Privacy from "./screens/Privacy";
import RecommendationsFeedback from "./screens/RecommendationsFeedback";
import QuestionScreen from "./screens/QuestionScreen";
import AvatarChangeClothing from "./screens/AvatarChangeClothing";
import ResetWindow from "./screens/ResetWindow";
import Settings from "./screens/Settings";
import LocationScreen from "./screens/LocationScreen";
import AddCity from "./screens/AddCity";
import QrCodeGen from './screens/qrcodeGenerator';
import Scanner from './screens/qrCodeScanner';
import ClothingScreen from "./screens/ClothingScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SideScreen from "./screens/SideScreen";
import HomeTabs from "./screens/Hometabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getIP } from "./screens/fetchIP" 
import { getWeather } from "./screens/CodeToWeather";
import rootReducer from './reducers/root';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux'
import { setCities } from './actions/cities';
import { setDeviceID } from './actions/deviceID';
import { setCelcius, setFahrenheit } from './actions/unit';
import { setClothing } from './actions/clothing';
import { apiToFront } from './screens/ApiClothingStrings';
import * as Network from 'expo-network';
import { Color, FontSize, FontFamily } from "./GlobalStyles";

const store = configureStore({reducer: rootReducer});
LogBox.ignoreAllLogs(true)

const AppWrapper = () => {
  const dispatch = useDispatch()
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
  }, [dID]);
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const net = async () => {
      let network = (await Network.getNetworkStateAsync()).isConnected;
      setIsOnline(network)
    }
    net()
  }, []);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(
        `http://${getIP()}:8080/api/v1/user?temperature=true&weathercode=true&windspeed=true&relativehumidity_2m=true`, {
            method: 'GET',
            headers: {'x-device-id': dID}
          }
      );
      const jsonData = await response.json();
      console.log(jsonData['cities'][0]['recommendation'])
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
      const data = {unit: jsonData['user_temp_unit'],
                    cities: cityArray,
                    preferences: jsonData['preferences'],
                    gender: jsonData['gender'],
                    look: jsonData['look']
                    }
      setData(data)
      setIsLoading(false)
    };
    if(isLoading && dID !== '123'){
      dispatch(setDeviceID(dID))
      fetchCities();
    }
    else{
    }
  }, [dID, isLoading]);

  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Montserrat_light: require("./assets/fonts/Montserrat_light.ttf"),
    Montserrat_regular: require("./assets/fonts/Montserrat_regular.ttf"),
    Montserrat_semibold: require("./assets/fonts/Montserrat_semibold.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat_bold.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Alata_regular: require("./assets/fonts/Alata_regular.ttf"),
    "Alegreya Sans_thin": require("./assets/fonts/Alegreya_Sans_thin.ttf"),
    "Alegreya Sans_regular": require("./assets/fonts/Alegreya_Sans_regular.ttf"),
    "Alegreya Sans_medium": require("./assets/fonts/Alegreya_Sans_medium.ttf"),
    "Alegreya Sans_bold": require("./assets/fonts/Alegreya_Sans_bold.ttf"),
    "Montserrat Alternates_regular": require("./assets/fonts/Montserrat_Alternates_regular.ttf"),
  });
  if ((!fontsLoaded && !error )|| isLoading || !isOnline) {
    if(!isOnline){
      alert('no internet connection')
    }
    return (
      <View style={[styles.loadingContainer]}>
        <Text style={[styles.loading]}>
          loading...
        </Text>
      </View>);
  }
  if(data.unit === 'fahrenheit'){
    dispatch(setFahrenheit())
  }
  else{
    dispatch(setCelcius())
  }
  dispatch(setCities(data.cities))
  dispatch(setClothing(apiToFront(data.preferences, data.look, data.gender)))
  //const stateCities = useSelector(state => state.cities)
  // Create a memoized callback function that updates the state
  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" options={{ headerShown: false}}>
          {() => <HomeTabs cities={data.cities} />}
          </Stack.Screen>
            <Stack.Screen
              name="AddCity"
              component={AddCity}
              options={{
                headerShown: false,
                animationEnabled: false,
                animation: "none",
              }}
            />
            <Stack.Screen
              name="QrCode"
              component={QrCodeGen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QrCodeScanner"
              component={Scanner}
              options={{ headerShown: false }}
            />
             <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
            <Stack.Screen
              name="FAQ"
              component={FAQ}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="About"
              component={About}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClothingScreen"
              component={ClothingScreen}
              options={{
                headerShown: false,
                animationEnabled: false,
                animation: "none",
              }}
            />
            <Stack.Screen
              name="ContactUs"
              component={ContactUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HelpSupport"
              component={HelpSupport}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Privacy"
              component={Privacy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecommendationsFeedback"
              component={RecommendationsFeedback}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AvatarChangeClothing"
              component={AvatarChangeClothing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetWindow"
              component={ResetWindow}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false, animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="LocationScreen"
              component={LocationScreen}
              options={{ headerShown: false, animation: "slide_from_left" }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  loadingContainer:{
    height: screenHeight,
    justifyContent: 'center'
  },
  loading:{
    fontSize: 20,
    alignSelf: 'center',
  },
  
});
const App = () => {
  return(
    <Provider store={store}>
      <AppWrapper/>
    </Provider>
  )
}
export default App;
