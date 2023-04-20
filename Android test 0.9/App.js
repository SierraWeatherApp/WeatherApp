const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import DayHomePage from "./screens/DayHomePage";
import FrameScreen from "./screens/FrameScreen";
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

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
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

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="DayHomePage"
              component={DayHomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame97"
              component={FrameScreen}
              options={{ headerShown: false }}
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
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClothingRecommendation"
              component={ClothingRecommendation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LocationScreen"
              component={LocationScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;