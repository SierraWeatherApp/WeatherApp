import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ContactUs = () => {
  return (
    <View style={styles.contactUs}>
      <View style={[styles.editCity, styles.editLayout1]}>
        <View style={[styles.editCityChild, styles.editPosition]} />
        <Text style={styles.contactSierra}>Contact Sierra</Text>
      </View>
      <View style={[styles.editCity1, styles.editLayout]}>
        <View style={[styles.editCityItem, styles.editLayout]} />
        <View style={[styles.editCityItem, styles.editLayout]} />
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      </View>
      <View style={[styles.editCity2, styles.editLayout]}>
        <View style={[styles.editCityItem, styles.editLayout]} />
        <Text style={[styles.discord, styles.emailTypo]}>Discord</Text>
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
  editLayout: {
    height: 31,
    width: 116,
    position: "absolute",
  },
  emailTypo: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.heading1Medium,
    fontSize: FontSize.size_sm,
    top: 7,
    position: "absolute",
  },
  editCityChild: {
    backgroundColor: Color.white,
    height: 32,
    width: 319,
    position: "absolute",
    left: 0,
    top: 0,
  },
  contactSierra: {
    left: 55,
    color: Color.black,
    width: 208,
    height: 18,
    textAlign: "center",
    fontFamily: FontFamily.heading1Medium,
    fontSize: FontSize.size_sm,
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
    height: 32,
    width: 319,
    position: "absolute",
  },
  editCityItem: {
    backgroundColor: Color.lightskyblue,
    borderRadius: Border.br_4xs,
    left: 0,
    top: 0,
  },
  email: {
    left: 38,
  },
  editCity1: {
    top: 174,
    left: 122,
    width: 116,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  discord: {
    left: 31,
  },
  editCity2: {
    top: 270,
    left: 122,
    width: 116,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  contactUs: {
    backgroundColor: Color.gainsboro_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ContactUs;
