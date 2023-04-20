import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const HelpSupport = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.helpsupport}>
      <View style={[styles.editCity, styles.editLayout1]}>
        <View style={[styles.editCityChild, styles.editPosition]} />
        <Text style={[styles.helpAndSupport, styles.submit1Typo]}>
          Help and Support
        </Text>
      </View>
      <View style={[styles.editCity1, styles.editLayout]}>
        <View style={[styles.editCityItem, styles.editLayout]} />
        <Pressable
          style={[styles.submit, styles.submitPosition]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={[styles.submit1, styles.submit1Typo]}>Submit</Text>
        </Pressable>
      </View>
      <View style={[styles.helpsupportChild, styles.transferFramePosition]} />
      <View style={[styles.transferFrame, styles.transferFramePosition]}>
        <Text style={styles.pleaseLeaveYour}>
          Please leave your questions...
        </Text>
      </View>
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
  submit1Typo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.heading1Medium,
  },
  editLayout: {
    height: 31,
    width: 116,
    position: "absolute",
  },
  submitPosition: {
    top: 7,
    position: "absolute",
  },
  transferFramePosition: {
    top: 100,
    position: "absolute",
  },
  editCityChild: {
    backgroundColor: Color.white,
    height: 32,
    width: 319,
    position: "absolute",
  },
  helpAndSupport: {
    left: 55,
    color: Color.black,
    width: 208,
    height: 18,
    top: 7,
    position: "absolute",
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
  editCityItem: {
    backgroundColor: Color.lightskyblue,
    borderRadius: Border.br_4xs,
    left: 0,
    top: 0,
  },
  submit1: {
    color: Color.white,
  },
  submit: {
    left: 32,
  },
  editCity1: {
    top: 684,
    left: 122,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  helpsupportChild: {
    left: 28,
    width: 304,
    height: 489,
    backgroundColor: Color.white,
  },
  pleaseLeaveYour: {
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
  helpsupport: {
    backgroundColor: Color.gainsboro_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default HelpSupport;
