import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getIP } from "../screens/fetchIP" 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setClothing } from "../actions/clothing";

async function setGender(gender, dID) {
  const url = `http://${getIP()}/api/v1/user?gender=${gender}`;
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

const ChangeGender = ({ }) => {
  const clothing = { ...useSelector(state => state.clothing)}
  const dispatch = useDispatch()
  const deviceID = useSelector(state => state.deviceID)
  const navigation = useNavigation();
  const handelFemalePress = () => {
    navigation.pop();
    clothing['Gender'] = 'female'
    dispatch(setClothing(clothing))
    setGender('female', deviceID)
  };

  const handelMalePress = () => {
    navigation.pop()
    clothing['Gender'] = 'male'
    dispatch(setClothing(clothing))
    setGender('male', deviceID)
  };

  return (
    <View style={styles.frameParent}>
      <TouchableOpacity
        style={[
          styles.fahrenheitFWrapper,
          styles.wrapperLayout, styles.buttonPressed,
        ]}
        onPress={handelFemalePress}
      >
        <Text
          style={[
            styles.fahrenheitF,
            styles.celciusCTypo, styles.textPressed,
          ]}
        >
          Female
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.celciusCWrapper,
          styles.wrapperLayout, styles.buttonPressed,
        ]}
        onPress={handelMalePress}
      >
        <Text
          style={[
            styles.celciusC,
            styles.celciusCTypo, styles.textPressed,
          ]}
        >
          Male
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    overflow: "hidden",
    height: 50,
    left: 0,
    position: "absolute",
    width: 198,
  },
  celciusCTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.heading1Medium,
    fontSize: FontSize.heading1Medium_size,
    left: 10,
    position: "absolute",
  },
  fahrenheitF: {
    top: 6,
  },
  fahrenheitFWrapper: {
    top: 50,
    zIndex: 0,
  },
  celciusC: {
    top: 10,
  },
  celciusCWrapper: {
    top: 0,
    zIndex: 1,
    marginTop: 10,
  },
  frameParent: {
    borderRadius: 20,
    backgroundColor: Color.white,
    height: 100,
    padding: 10,
    maxWidth: "100%",
    maxHeight: "100%",
    width: 198,
  },
});

export default ChangeGender;
