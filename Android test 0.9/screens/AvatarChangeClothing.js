import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AvatarChangeClothing = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.avatarChangeClothing, styles.iconLayout]}>
      <Image
        style={styles.avatarChangeClothingChild}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <View style={[styles.clothingFrame, styles.clothingFrameLayout]}>
        <View style={[styles.clothingFrameChild, styles.clothingFrameLayout]} />
        <Text style={[styles.nameOfClothing, styles.namePosition]}>
          Acessories
        </Text>
      </View>
      <View style={[styles.clothingFrame1, styles.clothingFrameLayout]}>
        <View style={[styles.clothingFrameChild, styles.clothingFrameLayout]} />
        <Text style={[styles.nameOfClothing1, styles.namePosition]}>
          Umbrella
        </Text>
      </View>
      <View style={[styles.clothingFrame2, styles.clothingFrameLayout]}>
        <View style={[styles.clothingFrameChild, styles.clothingFrameLayout]} />
        <Text style={[styles.nameOfClothing2, styles.namePosition]}>Shoes</Text>
      </View>
      <View style={[styles.clothingFrame3, styles.clothingFramePosition]}>
        <View style={[styles.clothingFrameChild, styles.clothingFrameLayout]} />
        <Text style={[styles.nameOfClothing3, styles.namePosition]}>Hat</Text>
      </View>
      <View style={[styles.clothingFrame4, styles.clothingFramePosition]}>
        <View style={[styles.clothingFrameChild, styles.clothingFrameLayout]} />
        <Text style={[styles.nameOfClothing4, styles.namePosition]}>
          Trousers
        </Text>
      </View>
      <View style={[styles.clothingFrame5, styles.clothingFramePosition]}>
        <View style={[styles.clothingFrameChild, styles.clothingFrameLayout]} />
        <Text style={[styles.nameOfClothing5, styles.namePosition]}>
          T-Shirt
        </Text>
      </View>
      <Image
        style={[styles.upperLimbIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/upper-limb.png")}
      />
      <Pressable
        style={styles.arrow}
        onPress={() => navigation.navigate("DayHomePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow1.png")}
        />
      </Pressable>
      <Text style={styles.changeClothing}>Change Clothing</Text>
      <Image
        style={[styles.avatarIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/avatar.png")}
      />
      <Image
        style={[styles.pathIcon, styles.pathIconPosition1]}
        resizeMode="cover"
        source={require("../assets/path.png")}
      />
      <Image
        style={[styles.pathIcon1, styles.pathIconPosition1]}
        resizeMode="cover"
        source={require("../assets/path1.png")}
      />
      <Image
        style={[styles.pathIcon2, styles.pathIconPosition]}
        resizeMode="cover"
        source={require("../assets/path2.png")}
      />
      <Image
        style={[styles.pathIcon3, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/path3.png")}
      />
      <Image
        style={[styles.pathIcon4, styles.pathIconPosition]}
        resizeMode="cover"
        source={require("../assets/path4.png")}
      />
      <Image
        style={[styles.sunGlassesIcon, styles.sunIconPosition]}
        resizeMode="cover"
        source={require("../assets/sun-glasses.png")}
      />
      <Image
        style={[styles.sunGlassesIcon1, styles.sunIconPosition]}
        resizeMode="cover"
        source={require("../assets/sun-glasses.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  clothingFrameLayout: {
    height: 71,
    width: 71,
    position: "absolute",
  },
  namePosition: {
    textAlign: "center",
    fontSize: FontSize.size_5xs_1,
    marginTop: -32.87,
    color: Color.black,
    fontFamily: FontFamily.heading1Medium,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  clothingFramePosition: {
    left: 25,
    height: 71,
    width: 71,
    backgroundColor: Color.gray_300,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  pathIconPosition1: {
    height: 9,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  pathIconPosition: {
    marginLeft: 105,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  sunIconPosition: {
    height: 13,
    width: 37,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  avatarChangeClothingChild: {
    top: 381,
    left: 360,
    width: 0,
    height: 3,
    position: "absolute",
  },
  clothingFrameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs_1,
    backgroundColor: Color.gainsboro_200,
  },
  nameOfClothing: {
    marginLeft: -18.74,
  },
  clothingFrame: {
    backgroundColor: Color.gray_300,
    left: 266,
    width: 71,
    overflow: "hidden",
    top: 190,
  },
  nameOfClothing1: {
    marginLeft: -16.74,
  },
  clothingFrame1: {
    top: 372,
    backgroundColor: Color.gray_300,
    left: 266,
    width: 71,
    overflow: "hidden",
  },
  nameOfClothing2: {
    marginLeft: -10.74,
  },
  clothingFrame2: {
    top: 281,
    backgroundColor: Color.gray_300,
    left: 266,
    width: 71,
    overflow: "hidden",
  },
  nameOfClothing3: {
    marginLeft: -5.74,
  },
  clothingFrame3: {
    top: 190,
  },
  nameOfClothing4: {
    marginLeft: -14.74,
  },
  clothingFrame4: {
    top: 372,
  },
  nameOfClothing5: {
    marginLeft: -11.74,
  },
  clothingFrame5: {
    top: 281,
  },
  upperLimbIcon: {
    marginTop: -106,
    marginLeft: -145,
    width: 53,
    height: 55,
  },
  icon: {
    height: "100%",
  },
  arrow: {
    left: 23,
    top: 40,
    width: 28,
    height: 23,
    position: "absolute",
  },
  changeClothing: {
    top: 86,
    left: 89,
    fontSize: FontSize.heading1Medium_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.heading1Medium,
    position: "absolute",
  },
  avatarIcon: {
    marginTop: -227,
    marginLeft: -39,
    width: 95,
    height: 275,
  },
  pathIcon: {
    marginTop: -81,
    marginLeft: 106,
    width: 24,
  },
  pathIcon1: {
    marginTop: -85,
    marginLeft: 123,
    width: 10,
  },
  pathIcon2: {
    marginTop: -84,
    width: 8,
    height: 6,
  },
  pathIcon3: {
    marginTop: -79,
    marginLeft: 135,
    width: 9,
    height: 7,
  },
  pathIcon4: {
    marginTop: -73,
    width: 39,
    height: 4,
  },
  sunGlassesIcon: {
    marginTop: -189,
    marginLeft: -11,
  },
  sunGlassesIcon1: {
    marginTop: -180,
    marginLeft: 103,
  },
  avatarChangeClothing: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
  },
});

export default AvatarChangeClothing;
