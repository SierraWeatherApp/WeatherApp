import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FrameComponent = ({ onClose, temperatureUnit, onToggleTemperatureUnit }) => {
  const [isFahrenheitPressed, setIsFahrenheitPressed] = React.useState(
    temperatureUnit === "fahrenheit"
  );
  const handleFahrenheitPress = () => {
    setIsFahrenheitPressed(true);
  };

  const handleCelciusPress = () => {
    setIsFahrenheitPressed(false);
  };

  return (
    <View style={styles.frameParent}>
      <TouchableOpacity
        style={[
          styles.fahrenheitFWrapper,
          styles.wrapperLayout,
          isFahrenheitPressed && styles.buttonPressed,
        ]}
        onPress={handleFahrenheitPress}
      >
        <Text
          style={[
            styles.fahrenheitF,
            styles.celciusCTypo,
            isFahrenheitPressed && styles.textPressed,
          ]}
        >
          Fahrenheit F
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.celciusCWrapper,
          styles.wrapperLayout,
          !isFahrenheitPressed && styles.buttonPressed,
        ]}
        onPress={handleCelciusPress}
      >
        <Text
          style={[
            styles.celciusC,
            styles.celciusCTypo,
            !isFahrenheitPressed && styles.textPressed,
          ]}
        >
          {`Celcius C° `}
        </Text>
      </TouchableOpacity>
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
