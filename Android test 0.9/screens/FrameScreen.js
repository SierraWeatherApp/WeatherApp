import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FrameScreen = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.fahrenheitFWrapper, styles.wrapperLayout]}>
        <Text style={[styles.fahrenheitF, styles.celciusCTypo]}>
          Fahrenheit F
        </Text>
      </View>
      <View style={[styles.celciusCWrapper, styles.wrapperLayout]}>
        <Text
          style={[styles.celciusC, styles.celciusCTypo]}
        >{`Celcius C° `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    overflow: "hidden",
    height: 50,
    width: 198,
    left: 0,
    position: "absolute",
  },
  celciusCTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.heading1Medium,
    fontSize: FontSize.heading1Medium_size,
    left: 10,
    position: "absolute",
  },
  fahrenheitF: {
    top: 6,
  },
  fahrenheitFWrapper: {
    top: 50,
    zIndex: 0,
  },
  celciusC: {
    top: 10,
  },
  celciusCWrapper: {
    top: 0,
    zIndex: 1,
    marginTop: 10,
  },
  frameParent: {
    borderRadius: 20,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 100,
    padding: 10,
  },
});

export default FrameScreen;
