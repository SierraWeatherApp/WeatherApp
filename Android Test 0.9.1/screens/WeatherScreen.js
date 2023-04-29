import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, Dimensions} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import {
  getAllData
} from "./ApiToString";
import { getWeather } from "./CodeToWeather";

//For scaling [default dimension: 360x800]
const { width, height } = Dimensions.get('window');

const WeatherScreen = (  ) => {
  const navigation = useNavigation();
  const positionString = '';
  const weatherString = '';
  const tempString = '';
  const windString = '';
  const humidityString = '';

  return (
    <LinearGradient
      style={[]}
      locations={[0, 1]}
      colors={["#95b2c2", "rgba(105, 184, 228, 0)"]}
    >
      <View style={[styles.mainPageLayout]}>
        <View style={[styles.upperBox]}>
          <View style={[styles.topbar]}>
            <View style={[styles.topbarLeft]}>
            <Pressable
              style={[]}
              onPress={() => navigation.navigate("LocationScreen")}
            >
              <Image
                style={[]}
                resizeMode="cover"
                source={require("../assets/plus.png")}
              />
            </Pressable>
            <Text style={[styles.cityName]}>{positionString}</Text>
          </View>
          <Text style={[styles.appName]}>Wea(the)r it</Text>
          </View>
          <View style={[styles.weatherInfo]}>
            <View style={[]}>
              <Image
                style={[]}
                resizeMode="cover"
                source={require("../assets/cloudy.png")}
              />
              <View style={[styles.weatherInfoTempBox]}>
                <Text style={[styles.weatherText, styles.temperature]}>{tempString}</Text>
                <Text style={[styles.weatherText, styles.tempUnit]}>°{'C'}</Text>
                <Text style={[styles.weatherText, styles.weatherCond]}>{weatherString}</Text>
              </View>
              <Text style={[styles.weatherText]}>Humidity: {humidityString}% {"\n"}
                Wind: {windString}m/s</Text>
            </View>
          </View>
          <View style={[styles.avatar]}>
            <Pressable
              style={[]}
              onPress={() => navigation.push("AvatarChangeClothing", {screenName: "AvatarChangeClothing"})}
            >
              <Image
                style={[]}
                resizeMode="cover"
                source={require("../assets/avatar1.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.botBar]}>
          <Pressable
            style={[]}
            onPress={() => navigation.navigate("ClothingRecommendation")}
          >
            <Image
              style={[styles.botBarIcon]}
              resizeMode="cover"
              source={require("../assets/clothing-icon.png")}
            />
            <Text style={[]}>Clothing</Text>
          </Pressable>
          <Image
            style={[]}
            resizeMode="cover"
            source={require("../assets/blue-shit.png")}
          />
          <Pressable
            style={[]}
            onPress={() => navigation.navigate("Settings")}
          >
            <Image
              style={[styles.botBarIcon]}
              resizeMode="cover"
              source={require("../assets/profile-icon.png")}
            />
            <Text style={[]}>Settings</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  upperBox:{
    marginHorizontal: 10,
  },
  botBarIcon:{
    alignSelf: 'center',
    marginTop: 5,
  },
  appName:{
    fontFamily: FontFamily.alataRegular,
    fontSize: 18,
  },
  cityName:{
    fontFamily: FontFamily.alataRegular,
    fontSize: 24,
    marginLeft: 10,
  },
  mainPageLayout:{
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: height,
  },
  topbar:{
    flexDirection: 'row',
    marginTop: 40,
    justifyContent:'space-between',
  },
  topbarLeft:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  weatherInfo:{
  },
  weatherText:{
    fontFamily: FontFamily.alataRegular,
  },
  temperature:{
    fontSize: 75,
    fontWeight: "700",
  },
  tempUnit:{
    fontSize: 20,
    marginTop:20,
    marginLeft: 5,
  },
  weatherInfoTempBox:{
    flexDirection:'row',
  },
  weatherCond:{
    marginTop:19,
    fontSize: 25,
    marginLeft: 10,
    fontWeight: "700",
  },
  avatar:{
    alignSelf: 'flex-end',
    marginTop: 30,
    marginRight: 20,
  },
  botBar:{
    flexDirection:'row',
    justifyContent: 'space-evenly',
    backgroundColor: Color.gainsboro_100,
  },
});

export default WeatherScreen;
