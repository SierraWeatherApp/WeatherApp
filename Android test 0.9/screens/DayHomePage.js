import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import {
  getHumidityString,
  getWeatherString,
  getWindString,
  getTempString,
} from "./ApiToString";

const DayHomePage = () => {
  const navigation = useNavigation();

  const weatherString = getWeatherString();
  const tempString = getTempString();
  const windString = getWindString();
  const humidityString = getHumidityString();

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
          <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
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
          <Text style={[styles.clothing, styles.profileTypo]}>{`
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
        resizeMode="cover"
        source={require("../assets/cloudy.png")}
      />
      <View style={[styles.cityInfo, styles.solnaLayout]}>
        <Text style={[styles.solna, styles.cTypo]}>Solna</Text>
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
      </View>
      <View style={styles.temperature}>
        <Text style={[styles.cloudy, styles.cFlexBox]}>{weatherString}</Text>
        <Text style={[styles.humidity45Wind, styles.cFlexBox]}>
          {windString} m/s {humidityString} humidity{" "}
        </Text>
        <Text style={styles.text}>{tempString}</Text>
        <Text style={[styles.c, styles.cFlexBox]}>°C</Text>
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
  profileTypo: {
    color: Color.darkslateblue,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
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
  solnaLayout: {
    height: 40,
    position: "absolute",
  },
  cTypo: {
    fontSize: FontSize.heading1Medium_size,
    color: Color.gray_200,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  cFlexBox: {
    textAlign: "left",
    position: "absolute",
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
    textAlign: "center",
    width: 58,
    left: 0,
  },
  profileIcon: {
    left: 270,
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
    textAlign: "center",
  },
  clothesIcon: {
    left: 48,
    height: 29,
    width: 29,
  },
  blueShitIcon: {
    left: 77,
    width: 206,
    height: 63,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homepageBar: {
    top: 725,
    backgroundColor: "#e4e4e4",
    width: 360,
    height: 150,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  cloudyIcon: {
    top: 84,
    left: 10,
    width: 101,
    height: 83,
    position: "absolute",
  },
  solna: {
    left: 35,
    width: 78,
    color: Color.gray_200,
    fontFamily: FontFamily.alataRegular,
    height: 40,
    position: "absolute",
    textAlign: "center",
    top: 0,
  },
  icon: {
    overflow: "hidden",
  },
  plus: {
    top: 3,
    width: 28,
    height: 28,
    left: 0,
    position: "absolute",
  },
  cityInfo: {
    top: 37,
    left: 20,
    width: 113,
  },
  cloudy: {
    top: 26,
    left: 157,
    fontSize: 27,
    color: Color.gray_200,
    fontFamily: FontFamily.alataRegular,
  },
  humidity45Wind: {
    top: 111,
    left: 19,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.alegreyaSansBold,
    width: 158,
    color: Color.gray_200,
    height: 48,
  },
  text: {
    fontSize: 64,
    width: 116,
    color: Color.gray_200,
    fontFamily: FontFamily.alataRegular,
    textAlign: "center",
    top: 0,
    left: 0,
    position: "absolute",
  },
  c: {
    top: 22,
    left: 111,
    fontWeight: "500",
    fontFamily: FontFamily.alegreyaSansMedium,
    color: Color.gray_200,
    fontSize: FontSize.heading1Medium_size,
    width: 29,
    height: 31,
  },
  temperature: {
    top: 171,
    left: 3,
    width: 243,
    height: 159,
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

export default DayHomePage;
