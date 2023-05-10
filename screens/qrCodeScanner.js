import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Text, Image, Button, Dimensions } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { setDeviceID } from '../actions/deviceID';
import { getIP } from "../screens/fetchIP" 
import { getWeather } from "../screens/CodeToWeather";
import { setCities, deleteCity as delC } from '../actions/cities';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Scanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const dispatch = useDispatch();
    const deviceID = useSelector(state => state.deviceID)
    const navigation = useNavigation();
    const fetchCities = async (dID) => {
        const response = await fetch(
          `http://${getIP()}:8080/api/v1/user?temperature=true&weathercode=true&windspeed=true&relativehumidity_2m=true`, {
              method: 'GET',
              headers: {'x-device-id': dID}
            }
        );
        const jsonData = await response.json();
        var cityArray = []
        for(var i = 0; i < jsonData['cities'].length; i++){
          weather = jsonData['cities'][i]['weather']
          //weather = await fetchWeather(jsonData['cities'][i]["latitude"],jsonData['cities'][i]["longitude"] )
          cityArray.push({city_name: jsonData['cities'][i]['city_name'], 
            key: i + 1, 
            country: jsonData['cities'][i]['country'],
            id: jsonData['cities'][i]['id'], 
            temperature: weather['temperature'], 
            weather: getWeather(weather['weathercode']),
            weathercode: weather['weathercode'],
            humidity: weather['relativehumidity_2m'],
            windspeed: weather['windspeed'],
            hat: jsonData['cities'][i]['recommendation'][0],
            shirt: jsonData['cities'][i]['recommendation'][1],
            jacket: jsonData['cities'][i]['recommendation'][2],
            pants: jsonData['cities'][i]['recommendation'][3],
            shoes: jsonData['cities'][i]['recommendation'][4],
            umbrella: jsonData['cities'][i]['recommendation'][5],
          })
        }
        dispatch(setCities(cityArray))
    };
    useEffect(() => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        dispatch(setDeviceID(data))
        AsyncStorage.setItem('key', data);
        fetchCities(deviceID)
    };
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={[styles.page]}>
            <Pressable
                style={[styles.topbar]}
                onPress={() => navigation.pop()}
            >
                <Image
                style={[]}
                resizeMode="cover"
                source={require("../assets/arrow1.png")}
                />
            </Pressable>
            <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.camera}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>
        </View>
      );
}
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
      marginTop: 0,
    },
    camera:{
        height: screenHeight - 100,
    },
    topbar:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 40,
        marginLeft: 20,
      },
  });
export default Scanner;