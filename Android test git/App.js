const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import DayHomePage from "./screens/DayHomePage";
import ChangeClothing from "./screens/ChangeClothing";
import ManageCities from "./screens/ManageCities";
import Settings from "./screens/Settings";
import LocationScreen from "./screens/LocationScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Alata_regular: require("./assets/fonts/Alata_regular.ttf"),
    "Alegreya Sans_thin": require("./assets/fonts/Alegreya_Sans_thin.ttf"),
    "Alegreya Sans_regular": require("./assets/fonts/Alegreya_Sans_regular.ttf"),
    "Alegreya Sans_medium": require("./assets/fonts/Alegreya_Sans_medium.ttf"),
    "Alegreya Sans_bold": require("./assets/fonts/Alegreya_Sans_bold.ttf"),
    Montserrat_light: require("./assets/fonts/Montserrat_light.ttf"),
    Montserrat_regular: require("./assets/fonts/Montserrat_regular.ttf"),
    Montserrat_semibold: require("./assets/fonts/Montserrat_semibold.ttf"),
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
              name="ChangeClothing"
              component={ChangeClothing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageCities"
              component={ManageCities}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
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
