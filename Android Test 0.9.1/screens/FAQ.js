import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily, Padding } from "../GlobalStyles";

const FAQ = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.faq}>
      <Pressable
        style={styles.arrow}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow.png")}
        />
      </Pressable>
      <View style={styles.faqInner}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-8.png")}
          />
          <View style={styles.accordionParent}>
            <View style={styles.accordion}>
              <View style={styles.headlineAndIcon}>
                <Text style={styles.question1}>Test</Text>
                <Text style={[styles.text, styles.textTypo]}>+</Text>
              </View>
              <Text style={[styles.ipsumMethodSomething, styles.textTypo]}>
                Ipsum Method something something
              </Text>
            </View>
            <View style={styles.accordion}>
              <View style={styles.headlineAndIcon}>
                <Text style={styles.question1}>Test</Text>
                <Text style={[styles.text, styles.textTypo]}>+</Text>
              </View>
              <Text style={[styles.ipsumMethodSomething, styles.textTypo]}>
                Ipsum Method something something
              </Text>
            </View>
            <View style={styles.frameItem} />
            <View style={styles.frameItem} />
            <View style={styles.frameItem} />
            <View style={styles.frameItem} />
            <View style={styles.frameItem} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontSize: FontSize.heading1Medium_size,
    color: Color.black,
    alignSelf: "stretch",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrow: {
    left: 27,
    top: 45,
    width: 49,
    height: 40,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_4xl,
    width: 320,
    height: 484,
    position: "absolute",
  },
  question1: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    flex: 1,
  },
  text: {
    textAlign: "right",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.heading1Medium_size,
    flex: 1,
  },
  headlineAndIcon: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  ipsumMethodSomething: {
    fontFamily: FontFamily.heading1Medium,
    height: 65,
    display: "none",
    marginTop: 20,
    textAlign: "left",
  },
  accordion: {
    width: 299,
    padding: Padding.p_xl,
    alignItems: "flex-end",
  },
  frameItem: {
    backgroundColor: Color.red,
    width: 142,
    height: 130,
  },
  accordionParent: {
    top: 14,
    left: 10,
    height: 465,
    position: "absolute",
  },
  vectorParent: {
    width: 319,
    height: 484,
    overflow: "hidden",
  },
  faqInner: {
    top: 93,
    left: 21,
    alignItems: "center",
    position: "absolute",
  },
  faq: {
    backgroundColor: Color.gainsboro_100,
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default FAQ;
