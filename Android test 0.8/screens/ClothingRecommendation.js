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
        source={require("../assets/line-11.png")}
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
        <Text style={[styles.clothing, styles.hoodie1Typo]}>Clothing</Text>
        <Text style={[styles.stockholm, styles.cLayout]}>
          <Text style={styles.stockholm1}>Stockholm</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
      </View>
      <Text style={[styles.hoodie, styles.todayClr]}>{`Hoodie


`}</Text>
      <View style={styles.recommendedClothes}>
        <View style={[styles.recommendedClothesChild, styles.childPosition]} />
        <Image
          style={[styles.recommendedClothesItem, styles.recommendedLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Image
          style={[styles.recommendedClothesInner, styles.recommendedLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Image
          style={styles.image2Icon}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Image
          style={styles.image3Icon}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
        <Image
          style={styles.image4Icon}
          resizeMode="cover"
          source={require("../assets/image-4.png")}
        />
        <Text style={[styles.hoodie1, styles.hoodie1Typo]}>Hoodie</Text>
        <Text style={[styles.cloudy21c, styles.todayClr]}>Cloudy 21°C</Text>
        <Text style={[styles.today, styles.todayClr]}>{`Today
`}</Text>
      </View>
      <View style={styles.ads}>
        <View style={[styles.adsChild, styles.childPosition]} />
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
  hoodie1Typo: {
    height: 41,
    width: 107,
    fontSize: FontSize.size_xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.alataRegular,
    position: "absolute",
  },
  todayClr: {
    color: Color.black,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.white,
    left: 0,
    height: 297,
    width: 337,
    position: "absolute",
  },
  recommendedLayout: {
    height: 10,
    width: 10,
    top: 209,
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
    left: 43,
    top: 139,
    width: 42,
    height: 34,
    position: "absolute",
  },
  clothing: {
    top: 141,
    left: 170,
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
  recommendedClothesChild: {
    top: 0,
  },
  recommendedClothesItem: {
    left: 169,
  },
  recommendedClothesInner: {
    left: 189,
  },
  ellipseIcon: {
    top: 207,
    left: 145,
    width: 14,
    height: 14,
    position: "absolute",
  },
  image2Icon: {
    top: 78,
    left: 114,
    width: 121,
    height: 110,
    position: "absolute",
  },
  image3Icon: {
    top: 95,
    left: 226,
    width: 54,
    height: 60,
    position: "absolute",
  },
  image4Icon: {
    top: 90,
    left: 44,
    width: 65,
    height: 65,
    position: "absolute",
  },
  hoodie1: {
    top: 16,
    left: 141,
  },
  cloudy21c: {
    top: 26,
    left: 243,
    width: 74,
    height: 23,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.size_xs,
  },
  today: {
    top: 23,
    left: 27,
    width: 70,
    height: 35,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.size_xs,
  },
  recommendedClothes: {
    top: 124,
    height: 297,
    width: 337,
    left: 12,
    position: "absolute",
  },
  adsChild: {
    top: 40,
  },
  weatherIt: {
    fontSize: FontSize.size_mini,
  },
  recommends: {
    fontSize: FontSize.size_xs,
  },
  weatherItRecommendsContainer: {
    left: 28,
    width: 289,
    height: 146,
    top: 0,
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
  clothingRecommendation: {
    backgroundColor: Color.gainsboro_100,
    flex: 1,
    height: 800,
  },
});

export default ClothingRecommendation;
