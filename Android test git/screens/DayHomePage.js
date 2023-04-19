import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

import { Dimensions, PixelRatio } from "react-native";
const {width, height} = Dimensions.get("window");
const pixelRatio = PixelRatio.get();

//template on figma is width 360, height 800
const widthCalculation = (difference) => {
  const ratio = difference/360;
  return Math.round(width*ratio);
}
const heightCalculation = (difference) => {
  const ratio = difference/800;
  return Math.round(height*ratio);
}
const scaleFont = (fontSize) => {
  const scale = Math.min(width / 375, height / 812); // use 375 x 812 as a reference
  const adjustedFontSize = Math.round(fontSize * scale * pixelRatio);
  return adjustedFontSize;
};

const DayHomePage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.dayHomePage}
      locations={[0, 1]}
      colors={["#95b2c2", "rgba(105, 184, 228, 0)"]}
    >
      <View style={styles.groupParent}>
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.home, styles.homeLayout]}>Home</Text>
        </View>
        <Pressable
          style={styles.frameParent}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={[styles.groupChild, styles.textPosition]}
            resizeMode="cover"
            source={require("../assets/frame-88.png")}
          />
          <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
        </Pressable>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Image
          style={styles.frameItem}
          resizeMode="cover"
          source={require("../assets/group-141.png")}
        />
      </View>
      <Image
        style={styles.cloudyIcon}
        resizeMode="cover"
        source={require("../assets/cloudy.png")}
      />
      <Text style={[styles.solna, styles.plusLayout]}>Solna</Text>
      <Pressable
        style={[styles.plus, styles.plusLayout]}
        onPress={() => navigation.navigate("LocationScreen")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/plus.png")}
        />
      </Pressable>
      <View style={styles.temperature}>
        <Text style={[styles.cloudy, styles.cFlexBox]}>Cloudy</Text>
        <Text style={[styles.humidity45Wind, styles.cFlexBox]}>{`Humidity: 45%
Wind: 6m/s`}</Text>
        <View style={[styles.parent, styles.textPosition]}>
          <Text style={[styles.text, styles.textTypo]}>21</Text>
          <Text style={[styles.c, styles.cFlexBox]}>°C</Text>
        </View>
      </View>
      <View style={styles.clothesIcon}>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.clothing, styles.profileTypo]}>{`
Clothing`}</Text>
      </View>
      <Pressable
        style={styles.avatar}
        onPress={() => navigation.navigate("ChangeClothing")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/avatar1.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeLayout: {
    height: 15,
    left: 0,
  },
  textPosition: {
    top: 0,
    position: "absolute",
  },
  profileTypo: {
    color: Color.darkslateblue,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  plusLayout: {
    height: 28,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  cFlexBox: {
    textAlign: "left",
    color: Color.gray_100,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.alegreyaSansBold,
    fontWeight: "700",
  },
  vectorIconLayout: {
    bottom: "60.21%",
    top: "19%",
    width: "3.91%",
    height: "20.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "66.87%",
    width: "78.73%",
    right: "9.39%",
    bottom: "33.13%",
    left: "11.89%",
    top: "0%",
    maxHeight: "100%",
  },
  home: {
    top: 32,
    color: Color.black,
    width: 40,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    height: 15,
    position: "absolute",
  },
  vectorParent: {
    height: "48.29%",
    width: "10.93%",
    top: "8.25%",
    right: "76.78%",
    bottom: "43.46%",
    left: "12.3%",
    position: "absolute",
  },
  groupChild: {
    left: 11,
    width: 37,
    height: 31,
  },
  profile: {
    top: 31,
    width: 58,
    height: 15,
    left: 0,
  },
  frameParent: {
    top: 8,
    left: 271,
    height: 46,
    width: 58,
    position: "absolute",
  },
  icon: {
    width: 51,
    height: 51,
  },
  frameChild: {
    right: 91,
    bottom: 35,
    left: 91,
    borderRadius: 62,
    height: 62,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameItem: {
    top: 2,
    left: 158,
    width: 44,
    height: 35,
    position: "absolute",
  },
  groupParent: {
    top: 735,
    left: -6,
    borderRadius: 35,
    backgroundColor: Color.white,
    width: 366,
    height: 97,
    position: "absolute",
    overflow: "hidden",
  },
  cloudyIcon: {
    top: heightCalculation(80),
    width: 101,
    height: 83,
    left: widthCalculation(10)
  },
  solna: {
    top: heightCalculation(37),
    left: widthCalculation(50),
    fontFamily: FontFamily.alataRegular,
    width: 70,
    color: Color.gray_100,
    textAlign: "left",
    fontSize: scaleFont(7),
  },
  icon1: {
    overflow: "hidden",
  },
  plus: {
    left: widthCalculation(20),
    top: heightCalculation(40),
    width: 28,
  },
  cloudy: {
    left: widthCalculation(149),
    fontSize: heightCalculation(30),
    fontFamily: FontFamily.alegreyaSansBold,
    fontWeight: "700",
    top: 31,
  },
  humidity45Wind: {
    top: 115,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.alegreyaSansBold,
    fontWeight: "700",
    left: 10,
  },
  text: {
    fontSize: 96,
    color: Color.gray_100,
    textAlign: "center",
    top: 0,
    position: "absolute",
    left: 0,
  },
  c: {
    left: 111,
    fontWeight: "500",
    fontFamily: FontFamily.alegreyaSansMedium,
    fontSize: FontSize.heading1Medium_size,
    top: 31,
  },
  parent: {
    width: 131,
    height: 115,
    left: 0,
    top: 0,
  },
  temperature: {
    top: 167,
    left: 12,
    width: 233,
    height: 163,
    position: "absolute",
  },
  vectorIcon1: {
    height: "70.54%",
    top: "15.85%",
    right: "0%",
    bottom: "13.61%",
    left: "0%",
    width: "100%",
  },
  vectorIcon2: {
    right: "33.88%",
    left: "62.22%",
  },
  vectorIcon3: {
    height: "39.53%",
    width: "60.27%",
    top: "60.47%",
    right: "19.9%",
    bottom: "0%",
    left: "19.82%",
  },
  vectorIcon4: {
    right: "62.18%",
    left: "33.92%",
  },
  vectorIcon5: {
    height: "25.51%",
    width: "51.5%",
    right: "24.23%",
    bottom: "74.49%",
    left: "24.28%",
    top: "0%",
    maxHeight: "100%",
  },
  clothing: {
    top: 19,
    left: -8,
  },
  clothesIcon: {
    top: 14,
    left: 302,
    width: 32,
    height: 32,
    position: "absolute",
  },
  icon2: {
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
  dayHomePage: {
    backgroundColor: "transparent",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default DayHomePage;
