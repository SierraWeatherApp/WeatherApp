import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const HomepageBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepageBar}>
      <Pressable
        style={[styles.profileIcon, styles.iconPosition1]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={[styles.profileIconChild, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/frame-88.png")}
        />
        <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
      </Pressable>
      <Pressable
        style={[styles.clothesIcon, styles.iconPosition1]}
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
        style={[styles.blueShitIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/blue-shit.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition1: {
    top: 13,
    position: "absolute",
  },
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  profileTypo: {
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "60%",
    top: "18.79%",
    width: "4.31%",
    height: "21.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  profileIconChild: {
    left: 11,
    width: 37,
    height: 31,
  },
  profile: {
    top: 34,
    height: 15,
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
    width: "100%",
    top: "15.85%",
    right: "0%",
    bottom: "13.61%",
    left: "0%",
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
  },
  clothesIcon: {
    left: 48,
    width: 29,
    height: 29,
  },
  blueShitIcon: {
    left: 77,
    width: 206,
    height: 63,
    overflow: "hidden",
  },
  homepageBar: {
    top: 725,
    backgroundColor: Color.gainsboro_100,
    width: 360,
    height: 75,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
});

export default HomepageBar;
