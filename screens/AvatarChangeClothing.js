import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { getClothing } from "./getClothing";

const AvatarChangeClothing = ({route}) => {
  const navigation = useNavigation();
  const clothingRec = getClothing(route.params.city);
  return (
    <View style={[styles.avatarChangeClothing]}>
      <View style={[styles.topBar]}>
        <Pressable
          style={styles.arrow}
          onPress={() => navigation.navigate("0")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/arrow1.png")}
          />
        </Pressable>
        <Text style={[styles.text]}>Change Clothing</Text>
      </View>
      <View style={[styles.outerBox]}>
        <View style={[styles.columnBoxes]}>
          <Pressable style={[styles.clothingBox]}
            onPress={() => {
              // Pass and merge params back to home screen
              navigation.navigate({
                name: 'ClothingScreen',
                params: { type: 'Hat' },
                merge: true,
              });
            }}
          >
            <Text style={[styles.clothingBoxText]}>Hat</Text>
          </Pressable>
          <Pressable style={[styles.clothingBox]}
            onPress={() => {
              // Pass and merge params back to home screen
              
              navigation.navigate({
                name: 'ClothingScreen',
                params: { type: 'Shirt' },
                merge: true,
              });
            }}
          >
            <Text style={[styles.clothingBoxText]}>Shirt</Text>
            <Image
              style={[styles.clothingImage, styles.clothingImageShirt]}
              resizeMode="cover"
              source={clothingRec.shirt}
            />
          </Pressable>
          <Pressable style={[styles.clothingBox]}
            onPress={() => {
              // Pass and merge params back to home screen
              navigation.navigate({
                name: 'ClothingScreen',
                params: { type: 'Pants' },
                merge: true,
              });
            }}
          >
            <Text style={[styles.clothingBoxText]}>Pants</Text>
            <Image
              style={[styles.clothingImage, styles.clothingImagePants]}
              resizeMode="cover"
              source={clothingRec.pants}
            />
          </Pressable>
        </View>
        <View style={[styles.avatarOuterBox]}>
              <View style={[styles.avatarBody]}>
                <Image
                  style={[styles.avatarBodyHead]}
                  resizeMode="cover"
                  source={clothingRec.skin}
                />
                <Image
                  style={[styles.avatarBodyUpperBody]}
                  resizeMode="cover"
                  source={require("../assets/male-body/male-upper-body.png")}
                />
                <Image
                    style={[]}
                    resizeMode="cover"
                    source={require("../assets/male-body/male-lower-body.png")}
                />
                <Image
                    style={[styles.clothes, styles.jacket]}
                    resizeMode="cover"
                    source={clothingRec.jacket}
                />
                <Image
                    style={[styles.clothes, styles.shirt]}
                    resizeMode="cover"
                    source={clothingRec.shirt}
                />
                <Image
                    style={[styles.clothes, styles.pants]}
                    resizeMode="cover"
                    source={clothingRec.pants}
                />
                <Image
                    style={[styles.clothes, styles.shoes]}
                    resizeMode="cover"
                    source={clothingRec.shoes}
                />
                <Image
                    style={[styles.clothes, styles.umbrella]}
                    resizeMode="cover"
                    source={clothingRec.umbrella}
                />
              </View>
          </View>
        <View style={[styles.columnBoxes]}>
          <Pressable style={[styles.clothingBox]}
            onPress={() => {
              // Pass and merge params back to home screen
              navigation.navigate({
                name: 'ClothingScreen',
                params: { type: 'Body' },
                merge: true,
              });
            }}
          >
            <Text style={[styles.clothingBoxText]}>Body</Text>
            <Image
              style={[styles.clothingImage]}
              resizeMode="cover"
              source={require("../assets/sun-glasses-square.png")}
            />
          </Pressable>
          <Pressable style={[styles.clothingBox]}
            onPress={() => {
              // Pass and merge params back to home screen
              navigation.navigate({
                name: 'ClothingScreen',
                params: { type: 'Jacket' },
                merge: true,
              });
            }}
          >
            <Text style={[styles.clothingBoxText]}>Jacket</Text>
            <Image
              style={[styles.clothingImage, styles.clothingImageJacket]}
              resizeMode="cover"
              source={clothingRec.jacket}
            />
          </Pressable>
          <Pressable style={[styles.clothingBox]}
            onPress={() => {
              // Pass and merge params back to home screen
              navigation.navigate({
                name: 'ClothingScreen',
                params: { type: 'Shoes' },
                merge: true,
              });
            }}
          >
            <Text style={[styles.clothingBoxText]}>Shoes</Text>
            <Image
              style={[styles.clothingImage, styles.clothingImageShoes]}
              resizeMode="cover"
              source={clothingRec.shoes}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  avatarChangeClothing:{
    overflow: "hidden",
    height: screenHeight,
    backgroundColor: Color.white,
  },
  clothingImage:{
    margin:0,
  },
  clothingImageJacket:{
    transform: [{scale: 0.5}, {translateY: -45},],
  },
  clothingImageShirt:{
    transform: [{scale: 0.5}, {translateY: -53},],
  },
  clothingImagePants:{
    transform: [{scale: 0.5}, {translateY: -45},],
  },
  clothingImageShoes:{
    transform: [{scale: 0.7}, {translateY: 20},],
  },
  sunGlassesAvatar:{
    position: 'absolute',
    top: 37,
    left: 28
  },
  arrow: {
    width: 28,
    height: 23,
    marginLeft: 20,
    marginBottom: 8,
  },
  topBar: {
    position: "relative",
    marginTop: 40,
    marginBottom: 20,
  },
  clothingBoxText:{
    fontSize: 10,
    marginTop: 2,
    color: Color.black,
    fontFamily: FontFamily.montserratBold,

  },
  text: {
    fontSize: FontSize.heading1Medium_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.heading1Medium,
    alignSelf: 'center',
  },
  clothingBox:{
    marginVertical: 20,
    width: 80,
    height: 80,
    backgroundColor: Color.light_gray,
    overflow: 'hidden',
    borderRadius: 7,
    alignItems: 'center',
  },
  avatarOuterBox:{
    alignSelf: 'center'
  },
  avatarBody:{
    alignItems: 'center',
    position: 'relative',
    transform: [{scale: 1}],
  },
  avatarBodyUpperBody:{
    marginTop: -5,
  },
  avatarBodyHead:{
    zIndex: 10,
  },
  clothes:{
    position: 'absolute',
  },
  shirt:{
    zIndex: 1,
    top: 63,
  },
  jacket:{
    zIndex: 2,
    top: 64,
  },
  pants:{
    top: 150,
    zIndex: 0,
  },
  shoes:{
    bottom: -8,
    zIndex: 1,
  },
  umbrella:{
    zIndex: 100,
    top: 152,
    right: 70
  },
  columnBoxes:{
    flexDirection: 'column',
  },
  outerBox:{
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  
  
});

export default AvatarChangeClothing;
