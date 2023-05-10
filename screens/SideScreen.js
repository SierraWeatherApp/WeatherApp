import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, Dimensions, PixelRatio} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { getWeather } from "./CodeToWeather";
import { getClothing as getClothingMale } from "./getClothingMale";
import { getClothing as getClothingFemale } from "./getClothingFemale";
import { useSelector } from 'react-redux'

//For scaling [default dimension: 360x800]
const { width, height } = Dimensions.get('window');

const WeatherScreen = ( { city} ) => {
  const unit = useSelector(state => state.unit)
  const getUnit = () =>{
    if(unit === 'fahrenheit'){
      return ('F')
    }
    else{
      return ('C')
    }
  }
  const navigation = useNavigation();
  const positionString = city.city_name;
  const weatherString = getWeather(city.weathercode);
  const tempString = Math.round(city.temperature);
  const windString = city.windspeed;
  const humidityString = city.humidity;
  const gender = useSelector(state => state.clothing).Gender
  const clothingRec = gender === 'male' ? getClothingMale(city) : getClothingFemale(city);
  const bodyImage = (type) => {
    if(gender == 'male'){
      if(type === 'upper'){
        return require("../assets/male-body/male-upper-body.png")
      }
      else if(type === 'lower'){
        return require("../assets/male-body/male-lower-body.png")
      }
    }
    else if(gender == 'female'){
      if(type === 'upper'){
        return require("../assets/female-body/female-upper-body.png")
      }
      else if(type === 'lower'){
        return require("../assets/female-body/female-lower-body.png")
      }
    }
  }
  const getWeatherIcon = (weathercode) => {
    if(weathercode <= 1){
      return (require("../assets/weatherIcons/sunny.png"))
    }
    else if(weathercode <= 2){
      return (require("../assets/weatherIcons/cloudy.png"))
    }
    else if(weathercode <= 5){
      return (require("../assets/weatherIcons/overcast.png"))
    }
    else if(weathercode <= 7 || (weathercode >= 30 && weathercode <= 35)){
      return (require("../assets/weatherIcons/sandstorm.png"))
    }
    else if((weathercode >= 70 && weathercode <= 79)||
      (weathercode >= 75 && weathercode <= 76)){
      return (require("../assets/weatherIcons/snow.png"))
    }
    else if((weathercode >= 95 && weathercode <= 99)||
      weathercode == 17 || weathercode == 29 || weathercode == 13){
      return (require("../assets/weatherIcons/thunder.png"))
    }
    else if(weathercode <= 16 || (weathercode >= 40 && weathercode <= 49)){
      return (require("../assets/weatherIcons/overcast.png"))
    }
    else{
      return (require("../assets/weatherIcons/rain.png"))
    }
  };
  return (
    <LinearGradient
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
          <Text style={[styles.appName]}>Wea(the)r It</Text>
          </View>
          <View style={[styles.weatherInfo]}>
            <View style={[]}>
              <Image
                style={[styles.weatherIcon]}
                resizeMode="cover"
                source={getWeatherIcon(city.weathercode)}
              />
              <View style={[styles.weatherInfoTempBox]}>
                <Text style={[styles.weatherText, styles.temperature]}>{tempString}</Text>
                <Text style={[styles.weatherText, styles.tempUnit]}>°{getUnit()}</Text>
                <Text style={[styles.weatherText, styles.weatherCond]}>{weatherString}</Text>
              </View>
              <Text style={[styles.weatherText]}>Humidity: {humidityString}% {"\n"}
                Wind: {windString}m/s</Text>
            </View>
          </View>
          <View style={[styles.avatarOuterBox]}>
            <Pressable
              style={[]}
              onPress={() => navigation.push("AvatarChangeClothing", 
                {
                  city: city,
              }
              )}
            >
              <View style={[styles.avatarBody]}>
                <Image
                  style={[styles.avatarBodyHead]}
                  resizeMode="cover"
                  source={clothingRec.skin}
                />
                <Image
                  style={[styles.avatarBodyUpperBody]}
                  resizeMode="cover"
                  source={bodyImage('upper')}
                />
                <Image
                    style={[]}
                    resizeMode="cover"
                    source={bodyImage('lower')}
                />
                <Image
                    style={[styles.clothes, styles.hat]}
                    resizeMode="cover"
                    source={clothingRec.hat}
                />
                <Image
                    style={[styles.clothes, styles.jacket]}
                    resizeMode="cover"
                    source={clothingRec.jacket}
                />
                <Image
                    style={[styles.clothes, styles.shirt]}
                    resizeMode="cover"
                    source={clothingRec.shirt}
                />
                <Image
                    style={[styles.clothes, styles.pants]}
                    resizeMode="cover"
                    source={clothingRec.pants}
                />
                <Image
                    style={[styles.clothes, styles.shoes]}
                    resizeMode="cover"
                    source={clothingRec.shoes}
                />
                <Image
                    style={[styles.clothes, styles.umbrella]}
                    resizeMode="cover"
                    source={clothingRec.umbrella}
                />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={[styles.botBar]}>
          <Pressable
            style={[]}
            onPress={() => navigation.navigate("QuestionScreen")}
          >
            <Image
              style={[styles.botBarIcon]}
              resizeMode="cover"
              source={require("../assets/clothing-icon.png")}
            />
            <Text style={[]}>Preference</Text>
          </Pressable>
          <Pressable
            style={[]}
            onPress={() =>
            navigation.navigate({
              name: 'Forecast',
              params: { id: city.id },
              merge: true,
            })}
          >
            <Image
              style={[styles.botBarIcon]}
              resizeMode="cover"
              source={require("../assets/blue-shit.png")}
            />
          </Pressable>
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
  weatherIcon:{
    margin: 5
  },
  upperBox:{
    marginHorizontal: 10,
  },
  botBarIcon:{
    alignSelf: 'center',
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
  avatarOuterBox:{
    alignSelf: 'flex-end',
    marginTop: 30,
    marginRight: 20,
  },
  avatarBody:{
    alignItems: 'center',
    position: 'relative',
  },
  avatarBodyUpperBody:{
    marginTop: -5,
  },
  avatarBodyHead:{
    zIndex: 10,
  },
  clothes:{
    position: 'absolute',
  },
  hat:{
    zIndex: 100,
    marginTop: -12,
  },
  shirt:{
    zIndex: 1,
    top: 63,
  },
  jacket:{
    zIndex: 2,
    top: 64,
  },
  pants:{
    top: 150,
    zIndex: 0,
  },
  shoes:{
    bottom: -8,
    zIndex: 1,
  },
  umbrella:{
    zIndex: 100,
    top: 152,
    right: 70
  },
  botBar:{
    flexDirection:'row',
    justifyContent: 'space-evenly',
    backgroundColor: Color.gainsboro_100,
  },
});


export default WeatherScreen;
