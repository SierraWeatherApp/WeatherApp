import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
const categories = {
    shoes: {
        first: 'Sandals',
        second: 'Boots',
        third: 'Sneakers'
    },
    pants: {
        first: 'Jeans',
        second: 'Cargo Pants',
        third: 'Shorts'
    },
    shirt: {
        first: 'Long Sleeved',
        second: 'T-Shirt',
        third: 'Hoodie'
    },
    jacket: {
        first: 'Winter Jacket',
        second: 'Casual Jacket',
        third: 'Rain Coat'
    },
    hats: {
        first: 'Cap',
        second: 'Hat',
        third: 'Top Hat'
    },
    body: {
        first: 'Umbrella',
        second: 'Glasses',
        third: 'Skin'
    },
}

const AvatarChangeClothing = ({route}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.clothingScreen]}>
        <View style={[styles.topBar]}>
        <Pressable
          style={styles.arrow}
          onPress={() => navigation.navigate("AvatarChangeClothing")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/arrow1.png")}
          />
        </Pressable>
      </View>
        <View style={[styles.categories]}>
            <Text style={[styles.categoriesHeader]}>{categories[route.params.type]['first']}</Text>
        </View>
        <View style={[styles.categories]}>
            <Text style={[styles.categoriesHeader]}>{categories[route.params.type]['second']}</Text>
        </View>
        <View style={[styles.categories]}>
            <Text style={[styles.categoriesHeader]}>{categories[route.params.type]['third']}</Text>
        </View>
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
  categories:{
    marginHorizontal: 20,
  },
  clothingScreen:{
    overflow: "hidden",
    height: screenHeight,
    backgroundColor: Color.white,
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
