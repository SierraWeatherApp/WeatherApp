import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily, Padding } from "../GlobalStyles";

import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  LayoutAnimation,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={{flex : 1}}>
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', padding: 12 }}>
        <Text style={styles.titleText}>Forecast</Text>
      </View>
      <View style={styles.separator} />
      <View style={{ flexDirection: 'row', padding: 12 }}>
        <Text style={styles.titleText}>24 hours</Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.box}>
          <Image
            style={{
              resizeMode: "contain",
              height: 40,
              width: 80,
              alignSelf: "center",
            }}
            source={require("../assets/weatherIcons/cloudy.png")}
          />
          <Text style={styles.text}>9am</Text>
          <Text style={styles.text}> 10</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Item 2</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Item 3</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Item 4</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Item 5</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Item 6</Text>
        </View>
      </ScrollView>
      <View style={styles.separator} />
      <View style={{ flexDirection: 'row', padding: 12 }}>
        <Text style={styles.titleText}>7 days</Text>
      </View>
      <ScrollView>
        <View style={styles.box2}>
         <Image
            style={{
              resizeMode: "contain",
              height: 40,
              width: 80,
              alignSelf: "center",
            }}
            source={require("../assets/weatherIcons/cloudy.png")}
          />
          <Text style={styles.text}>Monday</Text>
          <Text style={styles.text}> 20 - 25</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Item 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Item 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Item 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Item 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Item 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Item 1</Text>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'gray',
    margin: 5,
    padding: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box2: {
    backgroundColor: 'gray',
    margin: 5,
    padding: 30,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: FontFamily.heading1Medium,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '90%',
    alignSelf: 'center',
  },
});
