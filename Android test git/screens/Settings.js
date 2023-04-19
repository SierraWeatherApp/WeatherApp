import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settings, styles.iconLayout]}>
      <View style={[styles.vectorParent, styles.vectorPosition]}>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-81.png")}
        />
        <Text style={styles.temperatureCelciusCContainer}>
          <Text style={styles.temperature}>{`Temperature
`}</Text>
          <Text style={styles.celciusC}>{`Celcius C° `}</Text>
        </Text>
        <Text style={[styles.transferSettings, styles.faqTypo]}>
          Transfer settings
        </Text>
        <Text style={[styles.reset, styles.faqTypo]}>Reset</Text>
        <Text style={[styles.contactUs, styles.faqTypo]}>Contact us</Text>
        <Text style={[styles.faq, styles.faqTypo]}>FAQ</Text>
        <Text style={[styles.recommendationsFeedback, styles.faqTypo]}>
          Recommendations feedback
        </Text>
      </View>
      <View style={[styles.vectorGroup, styles.vectorPosition]}>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-9.png")}
        />
        <Text
          style={[styles.helpSupport, styles.privacyTypo]}
        >{`Help & Support`}</Text>
        <Text style={[styles.aboutWeatherApp, styles.privacyTypo]}>
          About Weather app
        </Text>
        <Text style={[styles.privacy, styles.privacyTypo]}>Privacy</Text>
      </View>
      <Pressable
        style={styles.x}
        onPress={() => navigation.navigate("DayHomePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/x.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  vectorPosition: {
    width: 320,
    left: 20,
    position: "absolute",
  },
  groupPosition: {
    width: 328,
    borderRadius: Border.br_4xl,
    left: -4,
    top: 0,
    position: "absolute",
  },
  faqTypo: {
    height: 30,
    color: Color.black,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.heading1Medium,
    position: "absolute",
  },
  privacyTypo: {
    height: 34,
    color: Color.black,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.heading1Medium,
    position: "absolute",
  },
  groupChild: {
    height: 318,
  },
  temperature: {
    color: Color.black,
    fontSize: FontSize.size_xl,
  },
  celciusC: {
    fontSize: FontSize.size_sm,
    color: "#2c7900",
  },
  temperatureCelciusCContainer: {
    top: 16,
    width: 133,
    height: 48,
    textAlign: "left",
    fontFamily: FontFamily.heading1Medium,
    left: 14,
    position: "absolute",
  },
  transferSettings: {
    top: 80,
    right: 137,
    width: 169,
  },
  reset: {
    width: 58,
    top: 126,
    left: 14,
  },
  contactUs: {
    top: 172,
    width: 110,
    left: 14,
  },
  faq: {
    top: 218,
    width: 45,
    left: 14,
  },
  recommendationsFeedback: {
    top: 264,
    width: 297,
    left: 14,
  },
  vectorParent: {
    top: 50,
    height: 310,
  },
  groupItem: {
    height: 188,
  },
  helpSupport: {
    left: 15,
    width: 156,
    top: 126,
  },
  aboutWeatherApp: {
    top: 19,
    width: 202,
    left: 14,
  },
  privacy: {
    top: 73,
    width: 73,
    left: 14,
  },
  vectorGroup: {
    top: 395,
    height: 180,
  },
  icon: {
    height: "100%",
  },
  x: {
    left: 320,
    top: 6,
    width: 40,
    height: 40,
    position: "absolute",
  },
  settings: {
    backgroundColor: Color.gainsboro_100,
    flex: 1,
    height: 800,
  },
});

export default Settings;
