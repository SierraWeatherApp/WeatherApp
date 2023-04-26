import React, { Suspense, memo } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DayHomePage from "./DayHomePage";
import SideScreen from "./SideScreen";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const CityScreen = React.memo(({ city }) => {
  return (
    <SideScreen
      latitude={Math.random() * 90}
      longitude={Math.random() * 90}
      name={city}
    />
  );
});

const HomeTabs = ({ cities }) => {
  return (
    <Tab.Navigator tabBar={() => null}>
      <Tab.Screen name="DayHomePage" component={DayHomePage} />
      {cities.map((city) => (
        <Tab.Screen
          key={city}
          name={city}
          component={React.useCallback(
            () => (
              <CityScreen city={city} />
            ),
            [city]
          )}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeTabs;
