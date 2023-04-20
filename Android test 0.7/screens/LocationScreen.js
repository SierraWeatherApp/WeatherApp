import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const LocationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.locationScreen, styles.icon2Layout]}>
      <View style={[styles.stockholm, styles.cityLayout1]}>
        <View style={[styles.city, styles.cityPosition1]}>
          <View style={[styles.cityChild, styles.cityChildPosition]} />
          <Text style={[styles.cityName, styles.cloudyFlexBox]}>Stockholm</Text>
          <Text style={[styles.cloudy, styles.cloudyFlexBox]}>Sunny</Text>
          <Text style={styles.text}>4°</Text>
        </View>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/11.png")}
        />
        <Text style={[styles.text1, styles.text1Position]}>21°</Text>
      </View>
      <View style={[styles.editCity, styles.cityLayout]}>
        <View style={[styles.editCityChild, styles.cityLayout]} />
        <Text style={[styles.editCities, styles.addCity1Typo]}>
          Edit Cities
        </Text>
      </View>
      <Pressable
        style={[styles.addCity, styles.cityLayout]}
        onPress={() => navigation.navigate("SwitchCity")}
      >
        <View style={[styles.editCityChild, styles.cityLayout]} />
        <Text style={[styles.addCity1, styles.addCity1Typo]}>Add City</Text>
      </Pressable>
      <View style={[styles.bangkok, styles.cityLayout1]}>
        <View style={styles.bangkok1}>
          <View style={[styles.city, styles.cityPosition1]}>
            <View style={[styles.cityChild, styles.cityChildPosition]} />
            <Text style={[styles.cityName, styles.cloudyFlexBox]}>Bangkok</Text>
            <Text style={[styles.cloudy, styles.cloudyFlexBox]}>Cloudy</Text>
            <Text style={styles.text}>4°</Text>
          </View>
          <Text style={[styles.text1, styles.text1Position]}>31°</Text>
        </View>
        <Image
          style={[styles.icon1, styles.text1Position]}
          resizeMode="cover"
          source={require("../assets/2.png")}
        />
        <Image
          style={[styles.cloudsIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/clouds1.png")}
        />
      </View>
      <View style={[styles.myLocationBar, styles.locationLayout]}>
        <View style={[styles.myLocationBarChild, styles.locationLayout]} />
        <Text style={[styles.myLocation, styles.cloudyFlexBox]}>
          My Location
        </Text>
        <Image
          style={[styles.locationOnIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/location-on1.png")}
        />
      </View>
      <Pressable
        style={styles.arrow}
        onPress={() => navigation.navigate("DayHomePage")}
      >
        <Image
          style={[styles.icon2, styles.icon2Layout]}
          resizeMode="cover"
          source={require("../assets/arrow1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon2Layout: {
    width: "100%",
    overflow: "hidden",
  },
  cityLayout1: {
    height: 91,
    width: 310,
    position: "absolute",
  },
  cityPosition1: {
    backgroundColor: Color.white,
    left: 0,
    top: 0,
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
  locationLayout: {
    height: 39,
    width: 329,
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
    height: 91,
    width: 310,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    top: 35,
    left: 264,
    borderRadius: 18,
    width: 27,
    height: 26,
    position: "absolute",
  },
  text1: {
    left: 213,
    fontSize: FontSize.size_13xl,
    color: Color.white,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    top: 28,
    textAlign: "left",
  },
  stockholm: {
    top: 146,
    left: 25,
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
    top: 432,
    width: 116,
    left: 25,
  },
  addCity1: {
    left: 28,
  },
  addCity: {
    left: 212,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 432,
    width: 116,
  },
  bangkok1: {
    left: 0,
    top: 0,
    height: 91,
    width: 310,
    position: "absolute",
  },
  icon1: {
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
    top: 255,
    left: 25,
  },
  myLocationBarChild: {
    borderRadius: Border.br_mid,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    left: 0,
    top: 0,
  },
  myLocation: {
    top: 8,
    left: 9,
    fontFamily: FontFamily.heading1Medium,
    fontSize: 18,
    color: Color.black,
  },
  locationOnIcon: {
    left: 276,
    height: 38,
    top: 0,
    width: 38,
    overflow: "hidden",
  },
  myLocationBar: {
    top: 85,
    left: 16,
  },
  icon2: {
    height: "100%",
    overflow: "hidden",
  },
  arrow: {
    left: 20,
    top: 40,
    width: 28,
    height: 23,
    position: "absolute",
  },
  locationScreen: {
    backgroundColor: Color.gainsboro_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default LocationScreen;
