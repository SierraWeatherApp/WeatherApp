import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Settings = () => {
  const [frameContainerVisible, setFrameContainerVisible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer = useCallback(() => {
    setFrameContainerVisible(true);
  }, []);

  const closeFrameContainer = useCallback(() => {
    setFrameContainerVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.settings, styles.iconLayout]}>
        <Pressable
          style={styles.x}
          onPress={() => navigation.navigate("DayHomePage")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/x1.png")}
          />
        </Pressable>
        <View style={[styles.vectorParent, styles.frameChildLayout]}>
          <Image
            style={[styles.frameChild, styles.frameLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle-82.png")}
          />
          <Pressable
            style={[styles.faqFrame, styles.frameLayout]}
            onPress={() => navigation.navigate("FAQ")}
          >
            <Text style={[styles.faq, styles.faqTypo]}>FAQ</Text>
          </Pressable>
          <View style={[styles.recommendationsFrame, styles.frameLayout]}>
            <Pressable
              style={styles.faqPosition}
              onPress={() => navigation.navigate("RecommendationsFeedback")}
            >
              <Text style={[styles.recommendationsFeedback1, styles.faqTypo]}>
                Recommendations feedback
              </Text>
            </Pressable>
          </View>
          <Pressable
            style={[styles.resetFrame, styles.frameLayout]}
            onPress={() => navigation.navigate("ResetWindow")}
          >
            <Text style={[styles.reset, styles.faqTypo]}>Reset</Text>
          </Pressable>
          <Pressable
            style={[styles.transferFrame, styles.frameLayout]}
            onPress={() => navigation.navigate("ResetWindow")}
          >
            <Text style={[styles.transferSettings, styles.faqTypo]}>
              Transfer settings
            </Text>
          </Pressable>
          <Pressable
            style={[styles.contanctUsFrame, styles.frameLayout]}
            onPress={() => navigation.navigate("ContactUs")}
          >
            <Text style={[styles.contactUs, styles.faqTypo]}>Contact us</Text>
          </Pressable>
          <Pressable
            style={[
              styles.temperatureCelciusCWrapper,
              styles.aboutWeatherFrameLayout,
            ]}
            onPress={openFrameContainer}
          >
            <Text style={styles.temperatureCelciusCContainer}>
              <Text style={styles.temperature}>{`Temperature
`}</Text>
              <Text style={styles.celciusC}>{`Celcius C° `}</Text>
            </Text>
          </Pressable>
        </View>
        <View style={[styles.vectorGroup, styles.frameItemLayout]}>
          <Image
            style={[styles.frameItem, styles.frameItemLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-9.png")}
          />
          <Pressable
            style={[styles.helpFrame, styles.framePosition]}
            onPress={() => navigation.navigate("HelpSupport")}
          >
            <Text
              style={[styles.helpSupport, styles.privacyTypo]}
            >{`Help & Support`}</Text>
          </Pressable>
          <Pressable
            style={[styles.aboutWeatherFrame, styles.aboutWeatherFrameLayout]}
            onPress={() => navigation.navigate("About")}
          >
            <Text style={[styles.aboutWeatherApp, styles.privacyTypo]}>
              About Weather app
            </Text>
          </Pressable>
          <Pressable
            style={[styles.privacyFrame, styles.framePosition]}
            onPress={() => navigation.navigate("Privacy")}
          >
            <Text style={[styles.privacy, styles.privacyTypo]}>Privacy</Text>
          </Pressable>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainerVisible}>
        <View style={styles.frameContainerOverlay}>
          <Pressable
            style={styles.frameContainerBg}
            onPress={closeFrameContainer}
          />
          <FrameComponent onClose={closeFrameContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  frameChildLayout: {
    height: 310,
    position: "absolute",
  },
  frameLayout1: {
    borderRadius: Border.br_4xl,
    top: 0,
    left: 0,
    width: 320,
  },
  frameLayout: {
    height: 50,
    width: 319,
    position: "absolute",
    overflow: "hidden",
  },
  faqTypo: {
    height: 30,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.heading1Medium,
    fontSize: FontSize.size_xl,
  },
  aboutWeatherFrameLayout: {
    height: 60,
    width: 319,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameItemLayout: {
    height: 180,
    position: "absolute",
  },
  framePosition: {
    left: -1,
    height: 60,
    width: 319,
    position: "absolute",
    overflow: "hidden",
  },
  privacyTypo: {
    height: 34,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.heading1Medium,
    fontSize: FontSize.size_xl,
    left: 12,
    top: 15,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  x: {
    left: 305,
    top: 44,
    width: 40,
    height: 40,
    position: "absolute",
  },
  frameChild: {
    height: 310,
    position: "absolute",
  },
  faq: {
    width: 45,
    left: 12,
    top: 15,
    position: "absolute",
  },
  faqFrame: {
    top: 210,
    left: 1,
  },
  recommendationsFeedback1: {
    width: 297,
  },
  faqPosition: {
    left: 12,
    top: 15,
    position: "absolute",
  },
  recommendationsFrame: {
    top: 260,
    left: 0,
  },
  reset: {
    width: 58,
    left: 12,
    top: 15,
    position: "absolute",
  },
  resetFrame: {
    top: 110,
    left: 0,
  },
  transferSettings: {
    right: 2,
    width: 305,
    top: 15,
    height: 30,
    position: "absolute",
  },
  transferFrame: {
    top: 60,
    left: 1,
  },
  contactUs: {
    width: 110,
    left: 12,
    top: 15,
    position: "absolute",
  },
  contanctUsFrame: {
    top: 160,
    left: 1,
  },
  frameContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
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
    width: 133,
    height: 48,
    textAlign: "left",
    fontFamily: FontFamily.heading1Medium,
    left: 12,
    top: 15,
    position: "absolute",
  },
  temperatureCelciusCWrapper: {
    left: 1,
  },
  vectorParent: {
    top: 93,
    left: 15,
    width: 320,
    height: 310,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  frameItem: {
    borderRadius: Border.br_4xl,
    top: 0,
    left: 0,
    width: 320,
  },
  helpSupport: {
    width: 156,
  },
  helpFrame: {
    top: 120,
  },
  aboutWeatherApp: {
    width: 202,
  },
  aboutWeatherFrame: {
    left: 0,
  },
  privacy: {
    width: 73,
  },
  privacyFrame: {
    top: 60,
  },
  vectorGroup: {
    top: 442,
    left: 16,
    width: 318,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 180,
    overflow: "hidden",
  },
  settings: {
    backgroundColor: Color.gainsboro_200,
    flex: 1,
    height: 800,
  },
});

export default Settings;
