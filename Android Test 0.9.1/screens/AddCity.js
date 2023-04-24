import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, ScrollView, Dimensions  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const AddCity = () => {
  const navigation = useNavigation();
  const createCityList = (cities) => {
    return cities.map((item, index)=>(
      <View style={[styles.cityListItem]} key={index}>
        <View style={[styles.cityListRight]}>
          <Text style={[styles.cityListCityName]}>{item.city}</Text>
          <Text style={[styles.cityListCond]}>Cloudy</Text>
        </View>
        <View style={[styles.cityListLeft]}>
          <Text style={[styles.cityListTemp]}>{item.temp}°</Text>
          <Image
            style={[styles.cityListIcon]}
            resizeMode="cover"
            source={require("../assets/cloudy1.png")}
          />
        </View>
      </View>
    ));
  };
  return (
     <View style={[styles.locationScreen]}>
        <View style={[styles.topBar]}>
        <Pressable
            style={styles.arrow}
            onPress={() => navigation.navigate("DayHomePage")}
        >
          <Image
            style={[]}
            resizeMode="cover"
            source={require("../assets/arrow1.png")}
          />
        </Pressable>
          <Pressable
            style={[styles.addLocation]}
            onPress={() => navigation.navigate("AddCity")}
          >
            <Text style={[styles.addLocationText]}>Add Location</Text>
            <Image
              style={[]}
              resizeMode="cover"
              source={require("../assets/location-on1.png")}
            />
          </Pressable>
        </View>
        <ScrollView style={[styles.scrollView]}>
          <View style={[styles.cityList]}>
            {createCityList([{city: 'Stockholm', temp: 20}])}
          </View>
        </ScrollView>
      </View>
  );
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  locationScreen: {
    overflow: "hidden",
    height: screenHeight,
  },
  addLocation: {
    borderRadius: 11,
    width: screenWidth - 40,
    backgroundColor: Color.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  addLocationText:{
    fontFamily: FontFamily.heading1Medium,
    fontSize: 18,
    color: Color.black,
    marginLeft: 5,
    marginBottom: 5,
  },
  cityListItem: {
    height: 91,
    width: screenWidth - 40,
    backgroundColor: Color.lightskyblue,
    marginBottom: 20,
    borderRadius: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  scrollView: {
  },
  cityList: {
    position: "relative",
    flex: 1,
    alignItems: 'center',
  },
  cityListCityName: {
    fontFamily: FontFamily.heading1Medium,
    fontSize: 18,
    color: Color.black,
  },
  cityListCond: {
    fontSize: 8,
    fontWeight: "300",
    fontFamily: FontFamily.montserratLight,
  },
  cityListTemp: {
    fontSize: 40,
    color: Color.white,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  cityListLeft: {
    flexDirection: 'row',
  },
  cityListRight: {
    paddingBottom: 20,
  },
  cityListIcon: {
    margin: 5,
    width: 38,
    aspectRatio: 1, 
  },
  topBar: {
    position: "relative",
    marginTop: 40,
    marginBottom: 20,
  },
  arrow: {
    width: 28,
    height: 23,
    marginLeft: 20,
    marginBottom: 8,
  },
});

export default AddCity;
