import React, { Suspense, memo } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SideScreen from "./SideScreen";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from '@react-navigation/native';
import { useState } from 'react';

const Tab = createMaterialTopTabNavigator();

const CityScreen = React.memo(({ city }) => {
  return (
    <SideScreen
      city={city}
    />
  );
});
const getC = (city, i) => {
  if(city != null){
    const name = i.toString()
    const id = city.id
    return (
      <Tab.Screen
        key={id}
        name={name}
        component={React.useCallback(
          () => (
            <CityScreen city={city}/>
          ),
          [city]
        )}
      />
      )
  }
}
const getAllC = (cities) => {
  var array = []
  for(var i = 0; i < cities.length; i++){
    array.push(getC(cities[i], i))
  }
  return array
}
const HomeTabs = ({ cities }) => {
  return (
    <Tab.Navigator tabBar={() => null}>
      {getAllC(cities)}
    </Tab.Navigator>
  );
};

export default HomeTabs;
