import * as React from "react";
import { Image, StyleSheet, View, ScrollView, Text, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { getClothingArray as  getClothingArrayMale} from "./getClothingMale";
import { getClothingArray as  getClothingArrayFemale} from "./getClothingFemale";
import { useDispatch, useSelector } from 'react-redux';
import { setClothing } from "../actions/clothing";
import { frontToApi } from './ApiClothingStrings'
import { getIP } from "./fetchIP" 
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
      'Skin',
    ],
}
async function setLookAPI(index, dID) {
  const url = `http://${getIP()}:8080//api/v1/user?look=${index}`;
  const device_id = dID
  const headers = {
    'Content-Type': 'application/json',
    'x-device-id': device_id,
  };
  
  fetch(url, {
    method: 'PATCH',
    headers: headers,
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
async function setClothingAPI(clothing, index, dID) {
  const url = `http://${getIP()}:8080/api/v1/user/cloth/change_cloth`;
  const device_id = dID
  const headers = {
    'Content-Type': 'application/json',
    'x-device-id': device_id,
  };
  
  fetch(url, {
    method: 'PATCH',
    headers: headers,
    body: `{"preferences":{"${clothing}":${index}}}`,
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

const AvatarChangeClothing = ({route}) => {
  const deviceID = useSelector(state => state.deviceID)
  const gender = useSelector(state => state.clothing).Gender
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const clothing = { ...useSelector(state => state.clothing)}
  const setImage = (index, type) =>{
    clothing[type] = index
    if(type !== 'Glasses' && type !== 'Skin'){
      setClothingAPI(frontToApi(type),index, deviceID)
    }
    else if(type === 'Skin') {
      setLookAPI(index, deviceID)
    }
    dispatch(setClothing(clothing))
  }
  const getIndicator = (index, type) =>{
    if(clothing[type] === index){
      return(<Text style={[styles.indicatorBar]}>----</Text>)
    }
    else{
      return(<View></View>)
    }
  }
  const getImageScrollView = (images, type) =>{
    return(images.map((image, index)=> 
      <Pressable
      style={[styles.clothingImageContainer]}
      onPress={()=> setImage(index, type)}
      >
        <Image 
          style={[styles.clothingImage]}
          resizeMode="cover"
          source={image}
        />
        <View style={[styles.indicator]}>
          {getIndicator(index, type)}
        </View>
      </Pressable>
    ))
  }
  const categoriesComponent = (categories, type) =>{
    const clothing = gender === 'male' ? getClothingArrayMale(type) : getClothingArrayFemale(type);
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
  indicatorBar:{
    alignSelf: 'center'
  },
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
