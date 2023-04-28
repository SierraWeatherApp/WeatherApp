import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, Dimensions, PixelRatio} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import {
  getHumidityString,
  getWeatherString,
  getWindString,
  getTempString,
  logData,
  getPosition
} from "./ApiToString";

//For scaling [default dimension: 360x800]
const { width, height } = Dimensions.get('window');
const widthScaling = (widthCoordinate) => {
  const ratio = widthCoordinate / 360;
  return width * ratio;
}
const heightScaling = (heightCoordinate) => {
  const ratio = heightCoordinate / 800;
  return height * ratio;
}
const scaleFont = (fontSize) => {
  const scale = Math.min(width / 375, height / 812); // use 375 x 812 as a reference
  const adjustedFontSize = Math.round(fontSize * scale * PixelRatio.get());
  return adjustedFontSize;
};

const WeatherScreen = ( {latitude, longitude} ) => {
  const navigation = useNavigation({latitude, longitude});
  const positionString = getPosition({latitude, longitude});
  const weatherString = getWeatherString({latitude, longitude});
  const tempString = Math.round(getTempString({latitude, longitude}));
  const windString = getWindString({latitude, longitude});
  const humidityString = getHumidityString({latitude, longitude});

  return (
    <LinearGradient
      style={[]}
      locations={[0, 1]}
      colors={["#95b2c2", "rgba(105, 184, 228, 0)"]}
    >
      <View style={[styles.mainPageLayout]}>
        <View>
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
              style={[]}
              resizeMode="cover"
              source={require("../assets/frame-88.png")}
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
              style={[]}
              resizeMode="cover"
              source={require("../assets/frame-88.png")}
            />
            <Text style={[]}>Settings</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
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
    marginHorizontal: 10,
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
    fontSize: 64,
  },
  tempUnit:{
    fontSize: 20,
    marginTop:25,
    marginLeft: 5,
  },
  weatherInfoTempBox:{
    flexDirection:'row',
  },
  weatherCond:{
    marginTop:18,
    fontSize: 20,
    marginLeft: 5,
  },
  avatar:{
    alignSelf: 'flex-end',
    marginTop: 30,
    marginRight: 20,
  },
  botBar:{
    flexDirection:'row',
    justifyContent: 'space-evenly',
  },
});

export default WeatherScreen;
