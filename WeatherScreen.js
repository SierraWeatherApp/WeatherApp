import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, Dimensions, PixelRatio} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

import { getWeather } from "./CodeToWeather";


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







// SHIT CODE (IGNORE PLEASE)
  let WeatherIcon;

 // Weather conditions with ID 14-16
  if (weatherString === "overcast" || weatherString === "smoke" || weatherString === "haze"||weatherString === "mist" || weatherString === "shallow fog" || weatherString === "fog"||weatherString === "squalls" 
  ||weatherString === "funnel cloud(s)"||weatherString === "fog or ice fog" ||"depositing rime fog"||"fog"||"fog or ice fog at a distance"||"fog or ice fog in patche") {
    WeatherIcon = require("../assets/overcast.png");

}  if (weatherString === "cloudy"|| weatherString === "mainly clear") {
  WeatherIcon = require("../assets/cloudy.png");
} // Weather conditions with ID 14-16
if (weatherString === "clear sky") {
  WeatherIcon = require("../assets/sunny.png");
} // Weather conditions with ID 14-16

 if (weatherString === "precipitation in sight" || weatherString === "precipitation in sight" || weatherString === "precipitation in sight") {
  WeatherIcon = require("../assets/rain.png");
}

// Weather condition with ID 20
 if (weatherString === "drizzle") {
  WeatherIcon = require("../assets/rain.png");
}

// Weather condition with ID 21
 if (weatherString === "rain") {
  WeatherIcon = require("../assets/rain.png");
}

// Weather condition with ID 24
 if (weatherString === "freezing drizzle") {
  WeatherIcon = require("../assets/rain.png");
}

// Weather conditions with ID 25
 if (weatherString === "shower(s) of rain" || weatherString === "shower(s) of snow" || weatherString === "shower(s) of hail") {
  WeatherIcon = require("../assets/rain.png");
}

// Weather conditions with ID 50
 if (weatherString === "drizzle") {
  WeatherIcon = require("../assets/rain.png");
}
// Weather conditions with ID 51-67
 if (weatherString === "light drizzle" || weatherString === "moderate drizzle" || weatherString === "moderate drizzle" || 
  weatherString === "heavy drizzle" || weatherString === "heavy drizzle" || weatherString === "light freezing drizzle" || 
  weatherString === "heavy freezing drizzle" || weatherString === "slight drizzle and rain" || weatherString === "moderate or heavy drizzle and rain" ||
  weatherString === "light rain" || weatherString === "moderate rain" || weatherString === "moderate rain" || weatherString === "heavy rain" || 
  weatherString === "heavy rain" || weatherString === "light freezing rain" || weatherString === "heavy freezing rain" || 
  weatherString === "rain or drizzle with slight snow" || weatherString === "rain or drizzle with moderate or heavy snow" || 
  weatherString === "light snow" || weatherString === "moderate snow" || weatherString === "moderate snow" || weatherString === "heavy snow" || 
  weatherString === "heavy snow" || weatherString === "ice prisms" || weatherString === "snow grains" || 
  weatherString === "isolated starlike snow crystals" || weatherString === "ice pellets" || 
  weatherString === "showers of rain and snow mixed, slight" || weatherString === "howers of rain and snow mixed, moderate or heavy" || 
  weatherString === "light snow showers" || weatherString === "heavy snow showers" || weatherString === "snow pallets" || weatherString === "snow pallets") {
  WeatherIcon = require("../assets/rain.png");
}

// Weather conditions with ID 80-82
 if (weatherString === "light rain showers" || weatherString === "moderate rain showers" || weatherString === "heavy rain showers") {
  WeatherIcon = require("../assets/rain.png");
}

// Weather conditions with ID 91-94
 if (weatherString === "slight rain" || weatherString === "moderate or heavy rain" || weatherString === "slight precipitation" || weatherString === "moderate or heavy precipitation") {
  WeatherIcon = require("../assets/rain.png");
}
 if (weatherString === "snow" || weatherString === "rain and snow or ice pellets" || weatherString === "light snow" || weatherString === "moderate snow" || weatherString === "heavy snow" || weatherString === "ice prisms" || weatherString === "snow grains" || weatherString === "isolated starlike snow crystals" || weatherString === "snow pallets" || weatherString === "heavy snow showers") {
  WeatherIcon = require("../assets/snow.png");
} 
 if (weatherString === "showers of rain and snow mixed, slight" || weatherString === "howers of rain and snow mixed, moderate or heavy") {
  WeatherIcon = require("../assets/snow.png");

}
   if (weatherString === "dust" ||
    weatherString === "dust or sand" ||
    weatherString === "dust or sand whirl(s)" ||
    weatherString === "dust or sand storm in sight") {
  WeatherIcon = require("../assets/sandstorm.png")
}
 if (weatherString === "slight or moderate dust or sand storm (decreasing)" ||
    weatherString === "slight or moderate dust or sand storm (no change)" ||
    weatherString === "slight or moderate dust or sand storm (increasing)" ||
    weatherString === "severe dust or sand storm (decreasing)" ||
    weatherString === "severe dust or sand storm (no change)" ||
    weatherString === "severe dust or sand storm (increasing)") {
  WeatherIcon = require("../assets/sandstorm.png")
} if (weatherString === "lighning visible, no thunder heard" ||
weatherString === "thunderstorm without precipitation" ||
weatherString === "thunderstorm" ||
(weatherString >= "thunderstorm" && weatherString <= "thunderstorm with heavy hail")) {
WeatherIcon = require("../assets/thunder.png");
}

//END OF SHIT CODE










  return (
    <LinearGradient
      style={styles.dayHomePage}
      locations={[0, 1]}
      colors={["#95b2c2", "rgba(105, 184, 228, 0)"]}
    >
      <View style={styles.homepageBar}>
        <Pressable
          style={[styles.profileIcon, styles.iconPosition]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={styles.profileIconChild}
            resizeMode="cover"
            source={require("../assets/frame-88.png")}
          />
          <Text style={[styles.profile, styles.textFlexBox]}>Profile</Text>
        </Pressable>
        <Pressable
          style={[styles.clothesIcon, styles.iconPosition]}
          onPress={() => navigation.navigate("ClothingRecommendation")}
        >
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
          <Image
            style={[styles.vectorIcon4, styles.vectorIconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.clothing, styles.textFlexBox]}>{`
Clothing`}</Text>
        </Pressable>
        <Image
          style={styles.blueShitIcon}
          resizeMode="cover"
          source={require("../assets/blue-shit.png")}
        />
      </View>
      <Image
        style={styles.cloudyIcon}
        resizeMode="center"
        // For weather Icon main screen 
        source={WeatherIcon}
      />
      <Text style={[styles.solna, styles.cClr]}>{positionString}</Text>
      <Pressable
        style={styles.plus}
        onPress={() => navigation.navigate("LocationScreen")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/plus.png")}
        />
      </Pressable>
      <View style={styles.temperature}>
        <Text style={[styles.cloudy, styles.cFlexBox]}>{weatherString}</Text>
        <Text style={[styles.humidity45Wind, styles.cFlexBox]}>Humidity: {humidityString}% {"\n"}
Wind: {windString}m/s</Text>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo]}>{tempString}</Text>
          <Text style={[styles.c, styles.cFlexBox]}>°C</Text>
        </View>
      </View>
      <Pressable
        style={styles.avatar}
        onPress={() => navigation.navigate("AvatarChangeClothing")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/avatar1.png")}
        />
      </Pressable>
      <Text style={[styles.weatherIt, styles.cFlexBox]}>Wea(the)r it</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 13,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    bottom: "60%",
    top: "18.79%",
    width: "4.31%",
    height: "21.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cClr: {
    color: Color.gray_200,
    fontSize: FontSize.heading1Medium_size,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  cFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.alegreyaSansBold,
    fontWeight: "700",
    color: Color.gray_200,
  },
  profileIconChild: {
    left: 11,
    width: 37,
    height: 31,
    top: 0,
    position: "absolute",
  },
  profile: {
    top: 34,
    height: 15,
    color: Color.darkslateblue,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    width: 58,
    left: 0,
  },
  profileIcon: {
    left: widthScaling(270),
    height: 49,
    width: 58,
  },
  vectorIcon: {
    height: "70.54%",
    top: "15.85%",
    right: "0%",
    bottom: "13.61%",
    left: "0%",
    width: "100%",
  },
  vectorIcon1: {
    right: "33.67%",
    left: "62.02%",
  },
  vectorIcon2: {
    height: "39.53%",
    width: "60.27%",
    top: "60.47%",
    right: "19.9%",
    bottom: "0%",
    left: "19.82%",
  },
  vectorIcon3: {
    right: "61.98%",
    left: "33.71%",
  },
  vectorIcon4: {
    height: "25.51%",
    width: "51.5%",
    top: "0%",
    right: "24.23%",
    bottom: "74.49%",
    left: "24.28%",
  },
  clothing: {
    top: 14,
    left: -18,
    width: 67,
    height: 48,
    color: Color.darkslateblue,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  clothesIcon: {
    left: widthScaling(48),
    width: 29,
    height: 29,
  },
  blueShitIcon: {
    left: widthScaling(width/2 - widthScaling(210)/2),
    width: widthScaling(210),
    height: 63,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homepageBar: {
    top: height - 75,
    backgroundColor: "#e4e4e4",
    width: width,
    height: 150,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  cloudyIcon: {
    top: heightScaling(84),
    width: 101,
    height: 83,
    left: 10,
    position: "absolute",
  },
  solna: {
    top: heightScaling(37),
    left: widthScaling(55),
    width: widthScaling(78),
    height: 40,
    fontFamily: FontFamily.alataRegular,
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  plus: {
    left: 20,
    top: 40,
    width: 28,
    height: 28,
    position: "absolute",
  },
  cloudy: {
    left: 149,
    fontSize: 30,
    fontFamily: FontFamily.alegreyaSansBold,
    fontWeight: "700",
    color: Color.gray_200,
    top: 15,
    textAlign: "left",
  },
  humidity45Wind: {
    top: 115,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.alegreyaSansBold,
    fontWeight: "700",
    color: Color.gray_200,
    left: 10,
  },
  text: {
    fontSize: scaleFont(27),
    textAlign: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  c: {
    left: 111,
    fontWeight: "500",
    fontFamily: FontFamily.alegreyaSansMedium,
    top: 15,
    textAlign: "left",
    color: Color.gray_200,
    fontSize: scaleFont(13),
  },
  parent: {
    width: 131,
    height: 115,
    top: 0,
    left: 0,
    position: "absolute",
  },
  temperature: {
    top: 171,
    left: 12,
    width: 233,
    height: 163,
    position: "absolute",
  },
  icon1: {
    marginTop: -24,
    marginLeft: 65,
  },
  avatar: {
    left: "50%",
    top: "50%",
    width: 95,
    height: 275,
    position: "absolute",
  },
  weatherIt: {
    top: 39,
    left: 257,
    fontSize: FontSize.size_base,
    color: Color.black,
    width: 81,
    height: 87,
    fontFamily: FontFamily.alataRegular,
  },
  dayHomePage: {
    backgroundColor: "transparent",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default WeatherScreen;
