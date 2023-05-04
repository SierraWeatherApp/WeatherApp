import React, { Suspense, memo } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SideScreen from "./SideScreen";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

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
        component={React.memo(() => (
            <CityScreen city={city}/>
          ),
          [city]
        )}
      />
      )
  }
}
const getAllC = (cities) => {
  const [tabList, setTabList] = useState(cities);
  useEffect(() => {
    setTabList(cities);
  }, [cities]);
  return <Tab.Navigator tabBar={() => null}>
  {tabList.map((city, index) => getC(city,index))}
</Tab.Navigator>
}
const HomeTabs = ({ cities }) => {
  const data = useSelector(state => state.cities)
  return (
    getAllC(data.cities)
  );
};

export default HomeTabs;
