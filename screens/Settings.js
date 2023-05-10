import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Text, View, Modal, Alert, AsyncStorage, Dimensions } from "react-native";
import { useNavigation, useRoute  } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import ChangeGender from "../components/ChangeGender";
import { useDispatch, useSelector } from 'react-redux';
import { getIP } from "../screens/fetchIP" 
import { resetCities } from "../actions/cities";
import { resetClothing } from "../actions/clothing";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
async function deleteUserAPI(dID) {
  const url = `http://${getIP()}:8080/api/v1/user`;
  const device_id = dID
  const headers = {
    'Content-Type': 'application/json',
    'x-device-id': device_id,
  };
  
  fetch(url, {
    method: 'DELETE',
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
const Settings = () => {
  const dispatch = useDispatch()
  const deviceID = useSelector(state => state.deviceID)
  const gender = useSelector(state => state.clothing).Gender
  const unit = useSelector(state => state.unit)
  const [temperatureCelciusCVisible, setTemperatureCelciusCVisible] = useState(false);
  const [genderVisible, setGenderVisible] = useState(false);
  const navigation = useNavigation();
  const deleteUser = () =>{
    deleteUserAPI(deviceID)
    console.log()
    dispatch(resetCities())
    dispatch(resetClothing())
  }
  const getTempUnit = () =>{
    if(unit === 'celcius'){
      return "Celcius °C"
    }
    else{
      return "Fahrenheit °F"
    }
  }
  const getGender= () =>{
    if(gender === 'male'){
      return "Male"
    }
    else{
      return "Female"
    }
  }
  const route = useRoute();
  const deleteAlert = () => {
    Alert.alert(
      'Warning!',
      'All settings and values will be lost forever. ',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => deleteUser(deviceID) },
      ],
      { cancelable: false }
    );
  };
  
  const openTemperatureCelciusC = useCallback(() => {
    setTemperatureCelciusCVisible(true);
  }, []);

  const closeTemperatureCelciusC = useCallback(() => {
    setTemperatureCelciusCVisible(false);
  }, []);
  const openGender = useCallback(() => {
    setGenderVisible(true);
  }, []);

  const closeGender = useCallback(() => {
    setGenderVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.settings]}>
        <View style={styles.topbar}> 
          <Pressable
            style={styles.x}
            onPress={() => navigation.pop()}
          >
            <Image
              style={[styles.icon]}
              resizeMode="cover"
              source={require("../assets/x1.png")}
            />
          </Pressable>

        </View>
        <View style={[styles.settingsBox]}>
          <Pressable
            style={[styles.settingsPressable]}
            onPress={() => openTemperatureCelciusC()}

          >
            <Text style={[styles.settingsText]}>Temperature Unit</Text>
            <Text style={[styles.tempUnit]}>{getTempUnit()}</Text>
          </Pressable>
          <Pressable
            style={[styles.settingsPressable]}
            onPress={() => navigation.navigate("QrCode")}
          >
            <Text style={[styles.settingsText]}>Transfer Settings</Text>
          </Pressable>
          <Pressable
            style={[styles.settingsPressable]}
            onPress={() => deleteAlert()}
          >
            <Text style={[styles.settingsText]}>Reset Profile</Text>
          </Pressable>
    
          <Pressable
            style={[styles.settingsPressable]}
            onPress={() => openGender()}
          >
            <Text style={[styles.settingsText]}>Change Gender</Text>
            <Text style={[styles.tempUnit]}>{getGender()}</Text>
          </Pressable>
        </View>
        <View style={[styles.settingsBox]}>
          <Pressable
            style={[styles.settingsPressable]}
            onPress={() =>  navigation.navigate("PrivacyScreen")}
          >
            <Text style={[styles.settingsText]}>Privacy</Text>
          </Pressable>
          <Pressable
            style={[styles.settingsPressable]}
            onPress={() =>  navigation.navigate("AboutScreen")}
          >
            <Text style={[styles.settingsText]}>About Us</Text>
          </Pressable>
          <Pressable
            style={[styles.settingsPressable]}
            onPress={() => navigation.navigate("ContactUs")}            
          >
            <Text style={[styles.settingsText]}>Contact Us</Text>
          </Pressable>
          <Pressable
            style={[styles.settingsPressable]}
            onPress={() => navigation.navigate("FAQ")}
          >
            <Text style={[styles.settingsText]}>FAQ</Text>
          </Pressable>
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent
        visible={temperatureCelciusCVisible}
      >
        <View style={styles.temperatureCelciusCOverlay}>
          <Pressable
            style={styles.temperatureCelciusCBg}
            onPress={closeTemperatureCelciusC}
          />
          <FrameComponent onClose={closeTemperatureCelciusC} />
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent
        visible={genderVisible}
      >
        <View style={styles.temperatureCelciusCOverlay}>
          <Pressable
            style={styles.temperatureCelciusCBg}
            onPress={closeGender}
          />
          <ChangeGender onClose={closeGender} />
        </View>
      </Modal>
    </>
  );
};
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  tempUnit:{
    fontSize: FontSize.size_sm,
    color: "#2c7900",
  },
  settingsText:{
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.heading1Medium,
    fontSize: FontSize.size_xl,
  },
  settingsPressable:{
    paddingVertical: 10,
  },
  x: {
    width: 40,
    height: 40,
  },
  topbar:{
    flexDirection: 'row',
    justifyContent:'flex-end',
    marginTop: 40,
  },
  settings: {
    backgroundColor: Color.white,
    flex: 1,
    height: screenHeight,
    paddingHorizontal: 20,
  },
  settingsBox:{
    marginVertical: 20,
    backgroundColor: Color.light_gray,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginHorizontal: 5,
  },


  SettingsBox1:{
    flexDirection: 'column',
    marginTop:0,
    justifyContent:'space-around',
    marginLeft: 0
    },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  frameChildLayout: {
    height: 310,
    position: "absolute",
  },
  frameLayout1: {
    borderRadius: Border.br_4xl,
    top: 0,
    left: 0,
    width: 320,
  },
  frameLayout: {
    height: 50,
    width: 319,
    position: "absolute",
    overflow: "hidden",
  },
  faqTypo: {
    height: 30,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.heading1Medium,
    fontSize: FontSize.size_xl,
  },
  framePosition1: {
    height: 60,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameItemLayout: {
    height: 180,
    position: "absolute",
  },
  framePosition: {
    left: -1,
    height: 60,
    width: 319,
    position: "absolute",
    overflow: "hidden",
  },
  privacyTypo: {
    height: 34,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.heading1Medium,
    fontSize: FontSize.size_xl,
    left: 12,
    top: 15,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  
  frameChild: {
    height: 310,
    position: "absolute",
  },
  faq: {
    width: 45,
    left: 12,
    top: 15,
    position: "absolute",
  },
  faqFrame: {
    top: 210,
    left: 1,
    height: 50,
  },
  recommendationsFeedback1: {
    width: 297,
  },
  faqPosition: {
    left: 12,
    top: 15,
    position: "absolute",
  },
  recommendationsFrame: {
    top: 260,
    left: 0,
    height: 50,
  },
  reset: {
    width: 58,
    left: 12,
    top: 15,
    position: "absolute",
  },
  resetFrame: {
    top: 110,
    left: 0,
    height: 50,
  },
  transferSettings: {
    right: 2,
    width: 305,
    top: 15,
    height: 30,
    position: "absolute",
  },
  transferFrame: {
    top: 60,
    left: 1,
    height: 50,
  },
  contactUs: {
    width: 110,
    left: 12,
    top: 15,
    position: "absolute",
  },
  contanctUsFrame: {
    top: 160,
    left: 1,
    height: 50,
  },
  temperatureCelciusCOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  temperatureCelciusCBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  temperature: {
    color: Color.black,
    fontSize: FontSize.size_xl,
  },
  celciusC: {
    fontSize: FontSize.size_sm,
    color: "#2c7900",
  },
  text: {
    width: 133,
    height: 48,
    textAlign: "left",
    fontFamily: FontFamily.heading1Medium,
  },
  temperatureCelciusCContainer: {
    left: 8,
    top: 6,
    position: "absolute",
  },
  temperatureFrame: {
    left: 5,
    width: 315,
  },
  vectorParent: {
    top: 93,
    left: 15,
    width: 320,
    height: 310,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  frameItem: {
    borderRadius: Border.br_4xl,
    top: 0,
    left: 0,
    width: 320,
  },
  helpSupport: {
    width: 156,
  },
  helpFrame: {
    top: 120,
  },
  aboutWeatherApp: {
    width: 202,
  },
  aboutWeatherFrame: {
    width: 319,
    height: 60,
    left: 0,
  },
  privacy: {
    width: 73,
  },
  privacyFrame: {
    top: 60,
  },
  vectorGroup: {
    top: 442,
    left: 16,
    width: 318,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 180,
    overflow: "hidden",
  },
});

export default Settings;
