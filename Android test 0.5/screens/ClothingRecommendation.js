import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ClothingRecommendation = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.clothingRecommendation, styles.iconLayout]}>
      <Image
        style={styles.clothingRecommendationChild}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <View style={[styles.titleCityTemp, styles.titleLayout]}>
        <Image
          style={[styles.titleCityTempChild, styles.titleLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-17.png")}
        />
        <Text style={[styles.c, styles.cLayout]}>21°C</Text>
        <Pressable
          style={styles.arrow}
          onPress={() => navigation.navigate("DayHomePage")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow3.png")}
          />
        </Pressable>
        <Text style={[styles.clothing, styles.todayClr]}>Clothing</Text>
        <Text style={[styles.stockholm, styles.cLayout]}>
          <Text style={styles.stockholm1}>Stockholm</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
      </View>
      <Text style={[styles.hoodie, styles.todayClr]}>{`Hoodie


`}</Text>
      <Image
        style={[styles.recommendedClothesIcon, styles.adsChildLayout]}
        resizeMode="cover"
        source={require("../assets/recommended-clothes.png")}
      />
      <View style={styles.ads}>
        <View style={[styles.adsChild, styles.adsChildLayout]} />
        <Text style={[styles.weatherItRecommendsContainer, styles.todayClr]}>
          <Text style={styles.weatherIt}>Wea(the)r it</Text>
          <Text style={styles.recommends}> Recommends:</Text>
        </Text>
        <Image
          style={styles.image5Icon}
          resizeMode="cover"
          source={require("../assets/image-5.png")}
        />
      </View>
      <Text style={[styles.cloudy21c, styles.todayClr]}>Cloudy 21°C</Text>
      <Text style={[styles.today, styles.todayClr]}>{`Today
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  titleLayout: {
    height: 312,
    width: 423,
    position: "absolute",
  },
  cLayout: {
    height: 43,
    width: 87,
    color: Color.gray_100,
    top: 176,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  todayClr: {
    color: Color.black,
    position: "absolute",
  },
  adsChildLayout: {
    height: 297,
    width: 337,
    position: "absolute",
  },
  clothingRecommendationChild: {
    top: 397,
    left: 360,
    width: 0,
    height: 3,
    position: "absolute",
  },
  titleCityTempChild: {
    top: 105,
    left: 31,
  },
  c: {
    left: 317,
    fontFamily: FontFamily.alataRegular,
  },
  icon: {
    height: "100%",
  },
  arrow: {
    left: 63,
    top: 135,
    width: 42,
    height: 34,
    position: "absolute",
  },
  clothing: {
    top: 141,
    left: 170,
    fontSize: FontSize.size_xl,
    width: 107,
    height: 41,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.alataRegular,
  },
  stockholm1: {
    fontFamily: FontFamily.alataRegular,
  },
  text: {
    fontFamily: FontFamily.heading1Medium,
  },
  stockholm: {
    left: 70,
  },
  titleCityTemp: {
    top: -105,
    left: -31,
  },
  hoodie: {
    top: 182,
    left: 56,
    fontFamily: FontFamily.montserratAlternatesRegular,
    textAlign: "center",
    width: 263,
    height: 20,
    fontSize: FontSize.size_xs,
  },
  recommendedClothesIcon: {
    top: 124,
    left: 12,
    height: 297,
  },
  adsChild: {
    top: 40,
    left: 0,
    backgroundColor: Color.white,
  },
  weatherIt: {
    fontSize: FontSize.size_mini,
  },
  recommends: {
    fontSize: FontSize.size_xs,
  },
  weatherItRecommendsContainer: {
    top: 0,
    left: 28,
    width: 289,
    height: 146,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.alataRegular,
  },
  image5Icon: {
    top: 51,
    left: 111,
    width: 127,
    height: 231,
    position: "absolute",
  },
  ads: {
    top: 444,
    height: 337,
    width: 337,
    left: 12,
    position: "absolute",
  },
  cloudy21c: {
    top: 150,
    left: 255,
    width: 74,
    height: 23,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.size_xs,
  },
  today: {
    top: 147,
    left: 39,
    width: 70,
    height: 35,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.size_xs,
  },
  clothingRecommendation: {
    backgroundColor: Color.gainsboro_100,
    flex: 1,
    height: 800,
  },
});

export default ClothingRecommendation;
