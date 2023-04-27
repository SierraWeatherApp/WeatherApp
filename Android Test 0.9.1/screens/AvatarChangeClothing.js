import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AvatarChangeClothing = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.avatarChangeClothing]}>
      <View style={[styles.topBar]}>
        <Pressable
          style={styles.arrow}
          onPress={() => navigation.navigate("DayHomePage")}
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
          <View style={[styles.clothingBox]}>
            <Text style={[styles.clothingBoxText]}>Hats</Text>

          </View>
          <View style={[styles.clothingBox]}>
            <Text style={[styles.clothingBoxText]}>Shirt</Text>
          </View>
          <View style={[styles.clothingBox]}>
            <Text style={[styles.clothingBoxText]}>Pants</Text>
          </View>
        </View>
        <View style={[styles.avatar]}>
          <Image
            resizeMode="cover"
            source={require("../assets/avatar.png")}
          />
          <Image
            style={[styles.sunGlassesAvatar]}
            resizeMode="cover"
            source={require("../assets/sun-glasses.png")}
          />
      </View>
        <View style={[styles.columnBoxes]}>
          <View style={[styles.clothingBox]}>
            <Text style={[styles.clothingBoxText]}>Skin</Text>
            <Image
              style={[styles.clothingImage]}
              resizeMode="cover"
              source={require("../assets/sun-glasses.png")}
            />
          </View>
          <View style={[styles.clothingBox]}>
            <Text style={[styles.clothingBoxText]}>Jacket</Text>
          </View>
          <View style={[styles.clothingBox]}>
            <Text style={[styles.clothingBoxText]}>Shoes</Text>
          </View>
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
    marginTop: 20,
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
    fontSize: FontSize.size_5xs_1,
    marginTop: 2,
    color: Color.black,
    fontFamily: FontFamily.heading1Medium,
  },
  text: {
    fontSize: FontSize.heading1Medium_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.heading1Medium,
    alignSelf: 'center'
  },
  clothingBox:{
    margin: 20,
    width: 80,
    height: 80,
    backgroundColor: Color.light_gray,
    borderRadius: 7,
    alignItems: 'center',
  },
  avatar:{
    marginTop: 40,
    position: 'relative',
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
