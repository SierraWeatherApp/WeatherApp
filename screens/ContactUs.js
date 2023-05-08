import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";

const ContactUs = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Contact us</Text>
        </View>
        <ScrollView>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.header}>
            <Text style={styles.headerText}>Email: sierra@gmail.com</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.header}>
            <Text style={styles.headerText}>Phone: 87654321</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flexDirection: 'row', 
    padding: 12,
  },
  titleText: {
    fontFamily: FontFamily.heading1Medium,
    flex: 1,
    fontSize: 22,
    textAlign: 'center',
    alignSelf: 'center',
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FontFamily.montserratBold,
    fontWeight: 'bold',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '90%',
    alignSelf: 'center',
  },
});

export default ContactUs;
