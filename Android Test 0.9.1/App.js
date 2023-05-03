const Stack = createNativeStackNavigator();
import { LogBox } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import DayHomePage from "./screens/DayHomePage";
import FAQ from "./screens/FAQ";
import About from "./screens/About";
import ContactUs from "./screens/ContactUs";
import HelpSupport from "./screens/HelpSupport";
import Privacy from "./screens/Privacy";
import RecommendationsFeedback from "./screens/RecommendationsFeedback";
import AvatarChangeClothing from "./screens/AvatarChangeClothing";
import WeatherReport from "./screens/WeatherReport";
import ResetWindow from "./screens/ResetWindow";
import SwitchCity from "./screens/SwitchCity";
import Settings from "./screens/Settings";
import ClothingRecommendation from "./screens/ClothingRecommendation";
import LocationScreen from "./screens/LocationScreen";
import AddCity from "./screens/AddCity";
import ClothingScreen from "./screens/ClothingScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SideScreen from "./screens/SideScreen";
import HomeTabs from "./screens/Hometabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getIP } from "./assets/fetchIP" 
import { getWeather } from "./screens/CodeToWeather";

LogBox.ignoreAllLogs(true)

const App = () => {
  const [dID, setdID] = useState('123');
  const [parentState, setParentState] = useState(false);
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
  const updateParent = () => {
    // Update the parent state to trigger a re-render
    setParentState(!parentState);
  };
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
          windspeed: weather['windspeed'],
          head: 'empty',
          shirt: 'long-sleeved',
          jacket: 'winter-jacket',
          pants: 'shorts',
          shoes: 'rain',
          umbrella: 'false',
        })
      }
      setData(cityArray)
      setIsLoading(false)
    };
    if(isLoading && dID != '123'){
      fetchCities();
    }
    else{
      console.log('hi' + dID)
      console.log(isLoading)
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
  if ((!fontsLoaded && !error )|| isLoading) {
    return null;
  }
  // Create a memoized callback function that updates the state
  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => <HomeTabs cities={data} />}
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
              name="WeatherReport"
              component={WeatherReport}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetWindow"
              component={ResetWindow}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SwitchCity"
              component={SwitchCity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false, animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="ClothingRecommendation"
              component={ClothingRecommendation}
              options={{ headerShown: false }}
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
export default App;
