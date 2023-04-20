import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ResetWindow = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.resetWindow, styles.iconLayout]}>
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
      <View style={[styles.editCity, styles.editLayout]}>
        <View style={[styles.editCityChild, styles.editLayout]} />
        <Text style={styles.reset}>Reset</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  editLayout: {
    height: 31,
    width: 116,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  x: {
    left: 310,
    top: 20,
    width: 40,
    height: 40,
    position: "absolute",
  },
  editCityChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.indianred,
  },
  reset: {
    top: 7,
    left: 38,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.heading1Medium,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  editCity: {
    top: 671,
    left: 122,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  resetWindow: {
    backgroundColor: Color.gainsboro_100,
    flex: 1,
    height: 800,
  },
});

export default ResetWindow;
