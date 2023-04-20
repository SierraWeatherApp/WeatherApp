import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
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
      <View style={styles.profileIconParent}>
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
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Image
          style={styles.slideSignIcon}
          resizeMode="cover"
          source={require("../assets/slide-sign.png")}
        />
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
      </View>
      <Image
        style={styles.cloudyIcon}
        resizeMode="cover"
        source={require("../assets/cloudy.png")}
      />
      <Text style={[styles.solna, styles.cClr]}> Place here </Text>
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
        <Text style={[styles.cloudy, styles.cFlexBox]}>{weatherString} </Text>
        <Text style={[styles.humidity45Wind, styles.cFlexBox]}>
          {windString + "m/s  " + humidityString + " Humidity"}
        </Text>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo]}> {tempString} </Text>
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
    height: 15,
    color: Color.darkslateblue,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    top: 31,
    width: 58,
    left: 0,
  },
  profileIcon: {
    left: 270,
    height: 46,
    width: 58,
  },
  frameChild: {
    right: 73,
    bottom: 13,
    left: 73,
    borderRadius: 62,
    height: 62,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  slideSignIcon: {
    top: 8,
    left: 158,
    width: 44,
    height: 35,
    position: "absolute",
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
    top: 11,
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
    left: 48,
    width: 29,
    height: 29,
  },
  profileIconParent: {
    top: 725,
    backgroundColor: "#e4e4e4",
    width: 360,
    height: 75,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  cloudyIcon: {
    top: 84,
    width: 101,
    height: 83,
    left: 10,
    position: "absolute",
  },
  solna: {
    top: 37,
    left: 55,
    width: 78,
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
    top: 31,
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
    fontSize: 96,
    textAlign: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  c: {
    left: 111,
    fontWeight: "500",
    fontFamily: FontFamily.alegreyaSansMedium,
    color: Color.gray_200,
    fontSize: FontSize.heading1Medium_size,
    top: 31,
  },
  parent: {
    width: 131,
    height: 115,
    top: 0,
    left: 0,
    position: "absolute",
  },
  temperature: {
    top: 167,
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

export default DayHomePage;
