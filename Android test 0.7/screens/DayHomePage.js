import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomepageBar from "../components/HomepageBar";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const DayHomePage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.dayHomePage}
      locations={[0, 1]}
      colors={["#95b2c2", "rgba(105, 184, 228, 0)"]}
    >
      <HomepageBar />
      <Image
        style={styles.cloudyIcon}
        resizeMode="cover"
        source={require("../assets/cloudy.png")}
      />
      <Text style={[styles.solna, styles.cClr]}>Solna</Text>
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
        <Text style={[styles.cloudy, styles.cFlexBox]}>Cloudy</Text>
        <Text style={[styles.humidity45Wind, styles.cFlexBox]}>{`Humidity: 45%
Wind: 6m/s`}</Text>
        <View style={[styles.parent, styles.textPosition]}>
          <Text style={[styles.text, styles.textPosition]}>21</Text>
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
  textPosition: {
    left: 0,
    top: 0,
    position: "absolute",
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
    textAlign: "center",
    fontFamily: FontFamily.alataRegular,
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
    fontSize: 96,
    fontFamily: FontFamily.alegreyaSansBold,
    fontWeight: "700",
    color: Color.gray_200,
    textAlign: "center",
  },
  c: {
    left: 111,
    fontWeight: "500",
    fontFamily: FontFamily.alegreyaSansMedium,
    top: 31,
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.heading1Medium_size,
  },
  parent: {
    width: 131,
    height: 115,
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
