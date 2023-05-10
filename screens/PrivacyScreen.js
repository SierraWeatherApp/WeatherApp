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

const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);    
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
        <Text style={styles.headerText}>{item.category_name}</Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
            >
            <Text style={styles.text}>
              {item.val}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const AboutScreen = () => {
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(true);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false)
      );
    }
    setListDataSource(array);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', padding: 12 }}>
          <Text style={styles.titleText}>Privacy</Text>
        </View>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    marginTop: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: FontFamily.heading1Medium,
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
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
    fontFamily: FontFamily.heading1Medium,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  arrowContainer: {
    flexDirection: 'row',
    marginTop:50,
    paddingVertical: 0,
    paddingHorizontal: 16,
  },
});

const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Privacy Policy for Weather It App',
    subcategory: [
      { id: 0, val: 'This Privacy Policy explains how Weather It App collects, uses, and shares your personal information when you use the app. By using the app, you agree to the terms of this Privacy Policy.' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Information We Collect',
    subcategory: [
      { id: 1, val: 'We collect information that you provide to us when you use the app, such as your location and the type of weather you are experiencing. We also collect information about your device, such as your device ID. In addition, we may collect information about your use of the app, such as the pages you visit and your interactions with the app.      ' }

    ],
  },
  {
    isExpanded: false,
    category_name: 'How We Use Your Information    ',
    subcategory: [
      { id: 0, val: 'We use your personal information to provide you with the services you request, such as weather information and clothing suggestions. We may also use your information to improve the app and to personalize your experience.      ' },
    ],
  },  {
    isExpanded: false,
    category_name: 'Sharing Your Information',
    subcategory: [
      { id: 0, val: 'We do not share your personal information with third parties except as necessary to provide you with the services you request, to comply with applicable laws, or to protect our rights or the rights of others.' },
    ],
  }, {
    isExpanded: false,
    category_name: 'Security',
    subcategory: [
      { id: 0, val: 'We take reasonable measures to protect your personal information from unauthorized access and disclosure. However, no security system is perfect and we cannot guarantee the security of your information.' },
    ],
  },
  {
    isExpanded: false,
category_name: 'Children\s Privacy ',
    subcategory: [
      { id: 0, val: 'The app is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under the age of 13.      ' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Changes to this Privacy Policy    ',
    subcategory: [
      { id: 0, val: 'We may update this Privacy Policy from time to time. If we make material changes to this Privacy Policy, we will notify you by email or by posting a notice in the app.' },
    ],
  }
];


export default AboutScreen;
