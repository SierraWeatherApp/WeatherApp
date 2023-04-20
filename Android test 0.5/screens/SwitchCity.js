import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const SwitchCity = () => {
  return (
    <View style={styles.switchCity}>
      <Image
        style={[styles.arrowIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/arrow2.png")}
      />
      <View style={[styles.rectangleParent, styles.bangkokLayout]}>
        <View style={[styles.frameChild, styles.editCityShadowBox]} />
        <Image
          style={[styles.locationOnIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/location-on.png")}
        />
        <Text style={styles.myLocation}>My Location</Text>
      </View>
      <View style={[styles.cityParent, styles.cityParentLayout]}>
        <View style={[styles.city, styles.cityParentLayout]}>
          <View style={[styles.cityChild, styles.cityParentLayout]} />
          <Text style={[styles.cityName, styles.cloudyPosition]}>Bangkok</Text>
          <Text style={[styles.cloudy, styles.cloudyTypo]}>Cloudy</Text>
          <Text style={[styles.text, styles.textFlexBox]}>4°</Text>
        </View>
        <View style={[styles.bangkok, styles.bangkokLayout]}>
          <Text style={[styles.cloudy1, styles.cloudy1Position]}>Cloudy</Text>
          <Text style={[styles.bangkok1, styles.cloudy1Position]}>Bangkok</Text>
          <Image
            style={[styles.bangkokChild, styles.frameItemLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Image
            style={[styles.hamburgerMenuIcon, styles.hamburgerIconLayout]}
            resizeMode="cover"
            source={require("../assets/hamburger-menu.png")}
          />
        </View>
      </View>
      <View style={[styles.bangkokParent, styles.cityParentLayout]}>
        <View style={[styles.bangkok2, styles.cityParentLayout]}>
          <View style={[styles.city, styles.cityParentLayout]}>
            <View style={[styles.cityChild, styles.cityParentLayout]} />
            <Text style={[styles.cityName, styles.cloudyPosition]}>
              Bangkok
            </Text>
            <Text style={[styles.cloudy, styles.cloudyTypo]}>Cloudy</Text>
            <Text style={[styles.text, styles.textFlexBox]}>4°</Text>
          </View>
          <Image
            style={[styles.hamburgerMenuIcon1, styles.hamburgerIconLayout]}
            resizeMode="cover"
            source={require("../assets/hamburger-menu.png")}
          />
          <Text style={[styles.cloudy3, styles.cloudy3Position]}>Cloudy</Text>
          <Text style={[styles.stockholm, styles.cloudy3Position]}>
            Stockholm
          </Text>
        </View>
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
      </View>
      <View style={[styles.editCity, styles.editLayout]}>
        <View style={[styles.editCityChild, styles.editLayout]} />
        <Text style={[styles.cancel, styles.textFlexBox]}>Cancel</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  bangkokLayout: {
    height: 39,
    position: "absolute",
  },
  editCityShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  cityParentLayout: {
    height: 91,
    width: 310,
    position: "absolute",
  },
  cloudyPosition: {
    left: 18,
    display: "none",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  cloudyTypo: {
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    fontSize: 8,
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  cloudy1Position: {
    left: 27,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  frameItemLayout: {
    height: 19,
    width: 19,
    position: "absolute",
  },
  hamburgerIconLayout: {
    height: 15,
    width: 21,
    position: "absolute",
    overflow: "hidden",
  },
  cloudy3Position: {
    left: 43,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  editLayout: {
    height: 31,
    width: 116,
    position: "absolute",
  },
  arrowIcon: {
    left: 6,
    width: 49,
    height: 40,
    top: 29,
  },
  frameChild: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    height: 39,
    position: "absolute",
    width: 329,
  },
  locationOnIcon: {
    top: 5,
    left: 282,
    width: 30,
    height: 30,
  },
  myLocation: {
    top: 9,
    left: 16,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.heading1Medium,
    fontSize: 18,
    position: "absolute",
  },
  rectangleParent: {
    top: 191,
    left: 26,
    width: 329,
    height: 39,
  },
  cityChild: {
    backgroundColor: Color.lightskyblue,
    left: 0,
    top: 0,
  },
  cityName: {
    top: 23,
    display: "none",
    fontFamily: FontFamily.heading1Medium,
    fontSize: 18,
  },
  cloudy: {
    top: 46,
    display: "none",
    left: 18,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  text: {
    top: 12,
    left: 243,
    fontSize: 54,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemibold,
    alignItems: "center",
    justifyContent: "center",
    width: 58,
    height: 67,
    display: "none",
  },
  city: {
    borderRadius: 11,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  cloudy1: {
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    fontSize: 8,
    top: 29,
  },
  bangkok1: {
    fontFamily: FontFamily.heading1Medium,
    fontSize: 18,
    top: 0,
  },
  bangkokChild: {
    left: 250,
    top: 14,
  },
  hamburgerMenuIcon: {
    top: 14,
    left: 0,
  },
  bangkok: {
    top: 26,
    left: 21,
    width: 269,
  },
  cityParent: {
    top: 400,
    left: 35,
    width: 310,
  },
  hamburgerMenuIcon1: {
    top: 38,
    left: 12,
  },
  cloudy3: {
    top: 50,
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    fontSize: 8,
  },
  stockholm: {
    top: 21,
    fontFamily: FontFamily.heading1Medium,
    fontSize: 18,
  },
  bangkok2: {
    left: 0,
    top: 0,
  },
  frameItem: {
    top: 33,
    left: 271,
  },
  bangkokParent: {
    top: 290,
    left: 35,
    width: 310,
  },
  editCityChild: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.indianred,
    left: 0,
    top: 0,
  },
  cancel: {
    top: 7,
    left: 34,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.heading1Medium,
  },
  editCity: {
    top: 642,
    left: 132,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  switchCity: {
    backgroundColor: Color.gainsboro_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SwitchCity;
