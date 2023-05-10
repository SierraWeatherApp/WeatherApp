import React from 'react';
import { View, StyleSheet, Pressable, Text, Image, Dimensions } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const QrCodeGen = () => {
  const qrCodeString = 'https://example.com'; // the string you want to encode as a QR code
  const deviceID = useSelector(state => state.deviceID)
  const navigation = useNavigation();
  return (
    <View style={[styles.page]}>
      <Pressable
        style={[styles.topbar]}
        onPress={() => navigation.navigate("0")}
      >
        <Image
          style={[]}
          resizeMode="cover"
          source={require("../assets/arrow1.png")}
        />
      </Pressable>
      <View style={[styles.qrCode]}>
        <SvgQRCode 
          value={deviceID}
          size={250}
         />
      </View>
      <View style={[styles.goToScanner]}>
        <Pressable
          onPress={() => navigation.navigate("QrCodeScanner")}
        >
          <Text style={[styles.goToScannerText]}>Click here to synch to another device</Text>
        </Pressable>
      </View>
    </View>
  );
};
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  qrCode:{
    marginTop: 30,
    alignSelf: 'center',
  },
  page:{
    alignContent: 'center',
    width: screenWidth - 40,
    marginHorizontal: 20,
    marginTop: 40,
  },
  body:{
    backgroundColor: 'red',
  },
  goToScannerText:{
    fontFamily: FontFamily.alataRegular,
    fontSize: 20,
  },
  goToScanner:{
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: Color.light_gray,
    borderRadius: 7,
    padding: 5,
    justifyContent: 'center',
  },
  topbar:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
});
export default QrCodeGen;