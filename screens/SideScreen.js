import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, Dimensions, PixelRatio} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { getWeather } from "./CodeToWeather";
import { getWinterJackets, 
         getlongSleeved,
         getPants,
         getHoodie,
         getBoots,
         getSandals,
         getUmbrella,
         getRainBoots,
         getSneakers,
         getShorts,
         getLightJacket } from "./getClothing";

//For scaling [default dimension: 360x800]
const { width, height } = Dimensions.get('window');

const WeatherScreen = ( { city} ) => {
  const navigation = useNavigation();
  const positionString = city.city_name;
  const weatherString = getWeather(city.weathercode);
  const tempString = Math.round(city.temperature);
  const windString = city.windspeed;
  const humidityString = city.humidity;
  useFocusEffect(
    React.useCallback(() => {
      console.log('asdsa')
        //updateParent();
    }, [])
  );
  var hat
  var shirt
  var jacket
  var pants
  var shoes
  var umbrella
  if(city.hat){

  }
  else if(city.hat){

  }
  else{
    hat = require('../assets/empty.png')
  }
  if(city.shirt === 'long-sleeved'){
    shirt = getlongSleeved()[0]
  }
  else if(city.shirt === 'hoodie'){
    shirt = getHoodie()[0]
  }
  else{

  }
  if(city.jacket === 'winter-jacket'){
    jacket = getWinterJackets()[0]
  }
  else if(city.jacket === 'light-jacket'){
    jacket = getLightJacket()[0]
  }
  else{
    jacket = require('../assets/empty.png')
  }
  if(city.pants === 'pants'){
    pants = getPants()[0]
  }
  else if(city.pants === 'shorts'){
    pants = getShorts()[0]
  }
  else{

  }
  if(city.shoes === 'boots'){
    shoes = getBoots()[0]
  }
  else if(city.shoes === 'sandals'){
    shoes = getSandals()[0]
  }
  else if(city.shoes === 'rain'){
    shoes = getRainBoots()[0]
  }
  else{
    shoes = getSneakers()[0]
  }
  if(city.umbrella === 'true'){
    umbrella = getUmbrella()[0]
  }
  else{
    umbrella = require('../assets/empty.png')
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
          <Text style={[styles.appName]}>Wea(the)r it</Text>
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
                <Text style={[styles.weatherText, styles.tempUnit]}>°{'C'}</Text>
                <Text style={[styles.weatherText, styles.weatherCond]}>{weatherString}</Text>
              </View>
              <Text style={[styles.weatherText]}>Humidity: {humidityString}% {"\n"}
                Wind: {windString}m/s</Text>
            </View>
          </View>
          <View style={[styles.avatarOuterBox]}>
            <Pressable
              style={[]}
              onPress={() => navigation.push("AvatarChangeClothing", {screenName: "AvatarChangeClothing"})}
            >
              <View style={[styles.avatarBody]}>
                <Image
                  style={[styles.avatarBodyHead]}
                  resizeMode="cover"
                  source={require("../assets/male-body/male-head.png")}
                />
                <Image
                  style={[styles.avatarBodyUpperBody]}
                  resizeMode="cover"
                  source={require("../assets/male-body/male-upper-body.png")}
                />
                <Image
                    style={[]}
                    resizeMode="cover"
                    source={require("../assets/male-body/male-lower-body.png")}
                />
                <Image
                    style={[styles.clothes, styles.jacket]}
                    resizeMode="cover"
                    source={jacket}
                />
                <Image
                    style={[styles.clothes, styles.shirt]}
                    resizeMode="cover"
                    source={shirt}
                />
                <Image
                    style={[styles.clothes, styles.pants]}
                    resizeMode="cover"
                    source={pants}
                />
                <Image
                    style={[styles.clothes, styles.shoes]}
                    resizeMode="cover"
                    source={shoes}
                />
                <Image
                    style={[styles.clothes, styles.umbrella]}
                    resizeMode="cover"
                    source={umbrella}
                />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={[styles.botBar]}>
          <Pressable
            style={[]}
            onPress={() => navigation.navigate("Settings")}
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
