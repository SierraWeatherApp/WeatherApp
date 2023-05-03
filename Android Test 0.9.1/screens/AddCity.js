import React, { useRef, useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, View, Text, Image, Pressable, ScrollView, Dimensions, Button  } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { getIP } from "../assets/fetchIP" 
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultCities = [{
        weather_id: 2673730,
        name: 'Stockholm',
        country: 'Sweden',
        latitude: 59.33459,
        longitude: 18.06324,
    },
    {
        name:"Hamburg",
        latitude:53.55073,
        longitude:9.99302,
        country: "Germany",
        weather_id: 2911298
    },
    {
        name:"Berlin",
        latitude:52.52437,
        longitude:13.41053,
        country: "Germany",
        weather_id: 2950159
    },
    {
        name:"Hong Kong",
        latitude:22.27832,
        longitude:114.17469,
        country: "China",
        weather_id: 1819729
    },
]
async function addCity(data, dID) {
    const url = `http://${getIP()}:8080/api/v1/user/cities/add`;
    const device_id = dID
    const headers = {
      'Content-Type': 'application/json',
      'x-device-id': device_id,
    };
    
    fetch(url, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(data),
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
const AddCity = () => {
  const [dID, setdID] = useState('123');
  useEffect(() => {
      const getUsername = async () => {
        var id = await AsyncStorage.getItem('key');
        if(id){
          setdID(id)
        }
        else{
          const newID = uuid.v4();
          await AsyncStorage.setItem('key', newID);
          setdID(newID)
        }
      };
      getUsername();
  }, []);
    const [text, setText] = useState('');
    const [data, setData] = useState([{}]);
    const createCityList = (cities) => {
        return cities.map((item, index)=>(
          <View key={index}>
            <Pressable style={styles.addCityButton} onPress={() => add(item)}>
                <Text style={styles.addCityButtonText}>{item.name}</Text>
            </Pressable>
          </View>
        ));
      };
      const recommendCities = (cities) => {
        return (
            <View style={[styles.addCityView]}>
                <View style={[styles.addCityRow]}>
                    {createCityList(defaultCities)}
                </View>
            </View>);
      };
      const showCitiesCountry = (item) => {
        if(item.country == null){
            return (item.country_code)
        }
        else{
            return (item.country)
        }
      };
      const showCitiesAdmin1 = (item) => {
        if(item.admin1 == null){
            return ('')
        }
        else{
            return (`, ${item.admin1}`)
        }
      };
      const showCities = (object) => {
        if(typeof object['results'] !== 'undefined'){
            if(object['results'].length > 0){
                cities = object['results']
                return cities.map((item, index)=>(
                <View key={index}>
                    <Pressable style={styles.showCityButton} onPress={() => addObject(item)}>
                        <View style={styles.showCityNameBox}>
                            <Text style={styles.showCityName}>{item.name} </Text>
                            <Text style={styles.showCityCountry}>{showCitiesCountry(item)}{showCitiesAdmin1(item)} </Text>
                        </View>
                        <View style={styles.showCityCoordBox}>
                            <Text style={styles.showCityCoordText}>Coordinates:</Text>
                            <Text style={styles.showCityCoord}>({parseFloat(item.latitude).toFixed(3)}, {parseFloat(item.longitude).toFixed(3)})</Text>
                        </View>
                    </Pressable>
                </View>
                ));
            }
        }
        else{
            return(
                <View></View>
            )
        }
      };
      const bottomPage = () => {
        if(text == ''){
        return (
            <View>{recommendCities(defaultCities)}</View>
            );
        }
        else{
            return(
                <KeyboardAvoidingView behavior="padding">
                    <ScrollView style={[styles.ScrollView]} keyboardShouldPersistTaps='handled'>
                        {showCities(data)}
                    </ScrollView>
                </KeyboardAvoidingView>
            )
        }
      };
  const navigation = useNavigation();
  const add = (data) => {
    addCity(data, dID)
    navigation.navigate("LocationScreen")
  }
  const addObject = (data) => {
    if(data.country == null)
      data.country = 'N.A.'
    const city = {
        weather_id: data.id,
        name: data.name,
        country: data.country,
        latitude: data.latitude,
        longitude: data.longitude,
    }
    addCity(city, dID)
    navigation.navigate("LocationScreen")
  }
  useEffect(() => {
    const fetchCities = async () => {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${text}`, {
            method: 'GET',
            }
        );
        const jsonData = await response.json();
        setData(jsonData)
      };
      fetchCities()
    }, [text]);
  return (
     <View style={[styles.locationScreen]}>
        <View style={[styles.topBar]}>
            <View style={[styles.searchbar]}>
                <View style={[styles.inputView]}>
                    <Image
                        style={[styles.magnifier]}
                        resizeMode="cover"
                        source={require("../assets/search.png")}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(newText) => setText(newText)}
                        value={text}
                        placeholder="Enter text here"
                        editable={true} 
                    />
                </View>
                <Pressable style={[styles.cancel]} onPress={() => navigation.navigate("LocationScreen")}><Text style={[styles.cancel]}>Cancel</Text></Pressable>
            </View>
        </View>
        {bottomPage()}
        
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  ScrollView: {
    height: screenHeight - 120,
  },
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth,
  },
  cancel: {
    color: Color.link, 
    marginLeft: 10,
    flex: 1,    
  },
  magnifier: {
    aspectRatio: 1,
    width: 30,
    marginLeft: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 0,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: Color.light_gray,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 20,
    flex: 4
  },
  addCityView:{
  },
  addCityRow:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: screenWidth,
    flexWrap: 'wrap',
  },
  addCityButton:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: Color.light_gray,
    marginVertical: 10,
    marginLeft: 15,
    elevation: 0,
  },
  addCityButtonText:{
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: Color.black,
    fontFamily: FontFamily.Alata_regular,
  },
  showCityButton:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: Color.light_gray,
    marginVertical: 10,
    marginLeft: 15,
    elevation: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  showCityCoordBox: {
    marginRight:5
  },
  showCityCoord: {
    fontSize: 12,
    color: Color.gray_100,
  },
  showCityName:{
    fontSize: 18,
    color: Color.black,
  },
  showCityNameBox:{
    marginLeft: 5
  },
  showCityCountry:{
    fontSize: 14,
    color: Color.gray_100,
  },
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
  topBar: {
    position: "relative",
    marginTop: 40,
    marginBottom: 20,
    height: 25
  },
});

export default AddCity;
