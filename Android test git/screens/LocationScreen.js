import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const LocationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.locationScreen, styles.iconLayout1]}>
      <Pressable
        style={styles.x}
        onPress={() => navigation.navigate("DayHomePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/x.png")}
        />
      </Pressable>
      <View style={[styles.stockholm, styles.bangkokLayout]}>
        <View style={[styles.city, styles.cityPosition1]}>
          <View style={[styles.cityChild, styles.cityChildPosition]} />
          <Text style={[styles.cityName, styles.cloudyFlexBox]}>Stockholm</Text>
          <Text style={[styles.cloudy, styles.cloudyFlexBox]}>Sunny</Text>
          <Text style={styles.text}>4°</Text>
        </View>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/11.png")}
        />
        <Text style={[styles.text1, styles.text1Position]}>21°</Text>
      </View>
      <Text style={[styles.myLocation, styles.cloudyFlexBox]}>My Location</Text>
      <View style={[styles.editCity, styles.cityLayout]}>
        <View style={[styles.editCityChild, styles.cityLayout]} />
        <Text style={[styles.editCities, styles.addCity1Typo]}>
          Edit Cities
        </Text>
      </View>
      <View style={[styles.addCity, styles.cityLayout]}>
        <View style={[styles.editCityChild, styles.cityLayout]} />
        <Text style={[styles.addCity1, styles.addCity1Typo]}>Add City</Text>
      </View>
      <View style={[styles.bangkok, styles.bangkokLayout]}>
        <View style={styles.cityPosition1}>
          <View style={[styles.city, styles.cityPosition1]}>
            <View style={[styles.cityChild, styles.cityChildPosition]} />
            <Text style={[styles.cityName, styles.cloudyFlexBox]}>Bangkok</Text>
            <Text style={[styles.cloudy, styles.cloudyFlexBox]}>Cloudy</Text>
            <Text style={styles.text}>4°</Text>
          </View>
          <Text style={[styles.text1, styles.text1Position]}>31°</Text>
        </View>
        <Image
          style={[styles.icon2, styles.text1Position]}
          resizeMode="cover"
          source={require("../assets/2.png")}
        />
        <Image
          style={[styles.cloudsIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/clouds1.png")}
        />
      </View>
      <Image
        style={[styles.locationOnIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/location-on.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  bangkokLayout: {
    height: 91,
    width: 310,
    position: "absolute",
  },
  cityPosition1: {
    left: 0,
    top: 0,
    height: 91,
    width: 310,
    position: "absolute",
  },
  cityChildPosition: {
    backgroundColor: Color.lightskyblue,
    left: 0,
    top: 0,
  },
  cloudyFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  text1Position: {
    top: 28,
    position: "absolute",
  },
  cityLayout: {
    height: 31,
    width: 116,
    position: "absolute",
  },
  addCity1Typo: {
    fontSize: FontSize.size_sm,
    top: 7,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.heading1Medium,
    position: "absolute",
  },
  iconLayout: {
    width: 38,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  x: {
    left: 6,
    top: 6,
    width: 40,
    height: 40,
    position: "absolute",
  },
  cityChild: {
    height: 91,
    width: 310,
    position: "absolute",
  },
  cityName: {
    top: 23,
    fontFamily: FontFamily.heading1Medium,
    fontSize: 18,
    color: Color.black,
    left: 18,
  },
  cloudy: {
    top: 46,
    fontSize: 8,
    fontWeight: "300",
    fontFamily: FontFamily.montserratLight,
    left: 18,
  },
  text: {
    top: 12,
    left: 243,
    fontSize: 54,
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    width: 58,
    height: 67,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  city: {
    borderRadius: 11,
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  icon1: {
    top: 35,
    left: 264,
    borderRadius: 18,
    width: 27,
    height: 26,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_13xl,
    left: 213,
    color: Color.white,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    top: 28,
    textAlign: "left",
  },
  stockholm: {
    top: 130,
    left: 26,
  },
  myLocation: {
    top: 74,
    left: 32,
    fontFamily: FontFamily.heading1Medium,
    fontSize: 18,
    color: Color.black,
  },
  editCityChild: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.lightskyblue,
    left: 0,
    top: 0,
  },
  editCities: {
    left: 23,
  },
  editCity: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 416,
    width: 116,
    left: 26,
  },
  addCity1: {
    left: 28,
  },
  addCity: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 416,
    width: 116,
    left: 213,
  },
  icon2: {
    left: 271,
    width: 25,
    height: 24,
  },
  cloudsIcon: {
    top: 37,
    left: 258,
    height: 22,
  },
  bangkok: {
    top: 239,
    left: 26,
  },
  locationOnIcon: {
    top: 66,
    left: 296,
    height: 38,
    overflow: "hidden",
  },
  locationScreen: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default LocationScreen;
