import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const RecommendationsFeedback = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recommendationsFeedback}>
      <View style={[styles.editCity, styles.editLayout1]}>
        <View style={[styles.editCityChild, styles.editPosition]} />
        <Text style={[styles.feedback, styles.submitTypo]}>Feedback</Text>
      </View>
      <Pressable
        style={[styles.editCity1, styles.editLayout]}
        onPress={() => navigation.navigate("Settings")}
      >
        <View style={[styles.editCityItem, styles.editLayout]} />
        <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
      </Pressable>
      <View
        style={[
          styles.recommendationsFeedbackChild,
          styles.transferFramePosition,
        ]}
      />
      <View style={[styles.transferFrame, styles.transferFramePosition]}>
        <Text style={styles.pleaseLeaveYour}>
          Please leave your feedback...
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
  submitTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: 7,
    fontFamily: FontFamily.heading1Medium,
    position: "absolute",
  },
  editLayout: {
    height: 31,
    width: 116,
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
  feedback: {
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
  editCityItem: {
    backgroundColor: Color.lightskyblue,
    borderRadius: Border.br_4xs,
    left: 0,
    top: 0,
  },
  submit: {
    left: 32,
    color: Color.white,
  },
  editCity1: {
    top: 685,
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
  recommendationsFeedbackChild: {
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
  recommendationsFeedback: {
    backgroundColor: Color.gainsboro_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default RecommendationsFeedback;
