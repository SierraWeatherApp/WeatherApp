import * as React from "react";
import { Image, StyleSheet, View, ScrollView, Text, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { getClothingArray } from "./getClothing";
import { useDispatch, useSelector } from 'react-redux';
import { setClothing } from "../actions/clothing";
const categories = {
    Shoes: [
      'Sandals',
      'Boots',
      'Sneakers',
      'Rain Boots',
    ],
    Pants: [
      'Pants',
      'Snow-pants',
      'Shorts',
    ],
    Shirt: [
      'Long Sleeved',
      'T-Shirt',
      'Hoodie',
    ],
    Jacket: [
      'Winter Jacket',
      'Light Jacket',
    ],
    Hat: [
      'Cap',
      'Beanie',
    ],
    Body: [
      'Umbrella',
      'Glasses',
      'Skin',
    ],
}

const AvatarChangeClothing = ({route}) => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const clothing = { ...useSelector(state => state.clothing)}
  const setImage = (index, type) =>{
    clothing[type] = index 
    dispatch(setClothing(clothing))
    navigation.pop()
  }
  const getImageScrollView = (images, type) =>{
    return(images.map((image, index)=> 
      <Pressable
      onPress={()=> setImage(index, type)}
      >
        <Image 
          style={[styles.clothingImage]}
          resizeMode="cover"
          source={image}
        />
      </Pressable>
    ))
  }
  const categoriesComponent = (categories, type) =>{
    const clothing = getClothingArray(type)
    return (categories.map((category) => <View style={[styles.categories]}>
        <Text style={[styles.categoriesHeader]}>{category}</Text>
        <ScrollView horizontal>
          {getImageScrollView(clothing[category], category)}
        </ScrollView>
      </View>
    ))
  }
  return (
    <View style={[styles.clothingScreen]}>
        <View style={[styles.topBar]}>
        <Pressable
          style={styles.arrow}
          onPress={() => navigation.pop()}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/arrow1.png")}
          />
        </Pressable>
        <Text style={[styles.text]}>{route.params.type}</Text>
      </View>
        <ScrollView>
          {categoriesComponent(categories[route.params.type], route.params.type)}
        </ScrollView>
    </View>
  );
};
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({

  categoriesHeader:{
    fontSize: FontSize.heading1Medium_size,
    textAlign: "left",
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
  categories:{
    marginHorizontal: 20,
  },
  clothingScreen:{
    overflow: "hidden",
    height: screenHeight,
    backgroundColor: Color.white,
  },
  clothingImage:{
    marginHorizontal: 10,
    marginVertical: 5,
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
});

export default AvatarChangeClothing;
