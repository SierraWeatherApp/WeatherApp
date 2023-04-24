import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, ScrollView, Dimensions  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const LocationScreen = () => {
  const navigation = useNavigation();
  const createCityList = (cities) => {
    return cities.map((item)=>(
      <View style={[styles.cityListItem]}>
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
     <View style={[styles.locationScreen, styles.icon2Layout]}>
        <View style={[styles.topBar]}>
        <View style={[styles.editCity, styles.cityLayout]}>
            <View style={[styles.editCityChild, styles.cityLayout]} />
            <Text style={[styles.editCities, styles.addCity1Typo]}>
              Edit Cities
            </Text>
          </View>
          <Pressable
            style={[styles.addCity, styles.cityLayout]}
            onPress={() => navigation.navigate("SwitchCity")}
          >
            <View style={[styles.editCityChild, styles.cityLayout]} />
            <Text style={[styles.addCity1, styles.addCity1Typo]}>Add City</Text>
          </Pressable>
          
          <View style={[styles.myLocationBar, styles.locationLayout]}>
            <View style={[styles.myLocationBarChild, styles.locationLayout]} />
            <Text style={[styles.myLocation, styles.cloudyFlexBox]}>
              My Location
            </Text>
            <Image
              style={[styles.locationOnIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/location-on1.png")}
            />
          </View>
          <Pressable
            style={styles.arrow}
            onPress={() => navigation.navigate("DayHomePage")}
          >
            <Image
              style={[styles.icon2, styles.icon2Layout]}
              resizeMode="cover"
              source={require("../assets/arrow1.png")}
            />
          </Pressable>
        </View>
        <ScrollView style={[styles.scrollView]}>
          <View style={[styles.cityList]}>
            {createCityList([{city: 'Stockholm', temp: 20},{city: 'Hamburg', temp: 10},{city: 'Hamburg', temp: 10},{city: 'Hamburg', temp: 9},{city: 'Hamburg', temp: 9},{city: 'Hamburg', temp: 9},{city: 'Hamburg', temp: 9}])}
          </View>
        </ScrollView>
      </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
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
  icon2Layout: {
    width: "100%",
    overflow: "hidden",
  },
  topBar: {
    position: "relative",
    height: 150,
  },
  cloudyFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  cityLayout: {
    height: 31,
    width: 116,
    position: "absolute",
  },
  addCity1Typo: {
    fontSize: FontSize.size_sm,
    top: 7,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.heading1Medium,
    position: "absolute",
  },
  iconLayout: {
    width: 38,
    position: "absolute",
  },
  locationLayout: {
    height: 39,
    width: 329,
    position: "absolute",
  },
  cloudy: {
    top: 46,
    fontSize: 8,
    fontWeight: "300",
    fontFamily: FontFamily.montserratLight,
    left: 18,
  },
  text: {
    top: 12,
    left: 243,
    fontSize: 54,
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    width: 58,
    height: 67,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  city: {
    borderRadius: 11,
    height: 91,
    width: 310,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    top: 35,
    left: 264,
    borderRadius: 18,
    width: 27,
    height: 26,
    position: "absolute",
  },
  editCityChild: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.lightskyblue,
    left: 0,
    top: 0,
  },
  editCities: {
    left: 23,
  },
  editCity: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 40,
    width: 116,
    left: 60,
  },
  addCity1: {
    left: 28,
  },
  addCity: {
    left: 212,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 40,
    width: 116,
  },
  myLocationBarChild: {
    borderRadius: Border.br_mid,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    left: 0,
    top: 0,
  },
  myLocation: {
    top: 8,
    left: 9,
    fontFamily: FontFamily.heading1Medium,
    fontSize: 18,
    color: Color.black,
  },
  locationOnIcon: {
    left: 276,
    height: 38,
    top: 0,
    width: 38,
    overflow: "hidden",
  },
  myLocationBar: {
    top: 85,
    left: 16,
  },
  icon2: {
    height: "100%",
    overflow: "hidden",
  },
  arrow: {
    left: 20,
    top: 40,
    width: 28,
    height: 23,
    position: "absolute",
  },
  locationScreen: {
    backgroundColor: Color.gainsboro_100,
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default LocationScreen;
