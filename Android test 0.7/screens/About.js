import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const About = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.about}>
      <View style={[styles.editCity, styles.editLayout1]}>
        <View style={[styles.editCityChild, styles.editPosition]} />
        <Text style={[styles.about1, styles.about1Typo]}>About</Text>
      </View>
      <View style={[styles.aboutChild, styles.aboutChildPosition]} />
      <View style={[styles.transferFrame, styles.aboutChildPosition]}>
        <Text style={styles.thisIsSome}>
          This is some text about the Weather App.
        </Text>
      </View>
      <Pressable
        style={[styles.editCity1, styles.editLayout]}
        onPress={() => navigation.navigate("Settings")}
      >
        <View style={[styles.editCityItem, styles.editLayout]} />
        <Text style={[styles.confirm, styles.about1Typo]}>Confirm</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  editLayout1: {
    height: 32,
    width: 319,
    position: "absolute",
  },
  editPosition: {
    borderRadius: Border.br_4xs,
    left: 0,
    top: 0,
  },
  about1Typo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: 7,
    fontFamily: FontFamily.heading1Medium,
    position: "absolute",
  },
  aboutChildPosition: {
    top: 100,
    position: "absolute",
  },
  editLayout: {
    height: 31,
    width: 116,
    position: "absolute",
  },
  editCityChild: {
    backgroundColor: Color.white,
    height: 32,
    width: 319,
    position: "absolute",
  },
  about1: {
    left: 55,
    color: Color.black,
    width: 208,
    height: 18,
  },
  editCity: {
    top: 28,
    left: 21,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  aboutChild: {
    left: 28,
    width: 304,
    height: 489,
    backgroundColor: Color.white,
  },
  thisIsSome: {
    top: 13,
    right: -8,
    fontSize: FontSize.size_xs,
    color: Color.darkslategray,
    textAlign: "left",
    width: 305,
    height: 34,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontFamily: FontFamily.heading1Medium,
    position: "absolute",
  },
  transferFrame: {
    left: 26,
    width: 306,
    height: 50,
    overflow: "hidden",
  },
  editCityItem: {
    backgroundColor: Color.lightskyblue,
    borderRadius: Border.br_4xs,
    left: 0,
    top: 0,
  },
  confirm: {
    left: 30,
    color: Color.white,
  },
  editCity1: {
    top: 680,
    left: 121,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  about: {
    backgroundColor: Color.gainsboro_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default About;
