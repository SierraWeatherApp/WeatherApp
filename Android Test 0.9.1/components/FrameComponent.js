import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FrameComponent = ({ onClose }) => {
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
    left: 0,
    position: "absolute",
    width: 198,
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
    height: 100,
    padding: 10,
    maxWidth: "100%",
    maxHeight: "100%",
    width: 198,
  },
});

export default FrameComponent;
