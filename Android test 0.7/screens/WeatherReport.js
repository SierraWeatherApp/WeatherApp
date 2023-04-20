import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const WeatherReport = () => {
  return (
    <View style={styles.weatherReport}>
      <View style={[styles.hourReport, styles.hourLayout]}>
        <Image
          style={[styles.hourReportChild, styles.hourLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-81.png")}
        />
        <Text style={styles.hourReport1}>
          <Text style={styles.hourReport2}>{`24 Hour Report
`}</Text>
          <Text style={styles.text}>{`

`}</Text>
        </Text>
        <Image
          style={styles.cloudyIcon}
          resizeMode="cover"
          source={require("../assets/cloudy1.png")}
        />
        <View style={styles.temperature}>
          <Text style={[styles.cloudy, styles.cClr]}>Cloudy</Text>
          <View style={[styles.parent, styles.text1Position]}>
            <Text style={[styles.text1, styles.cClr]}>21</Text>
            <Text style={[styles.c, styles.cClr]}>°C</Text>
          </View>
        </View>
      </View>
      <View style={[styles.hourReport3, styles.hourLayout]}>
        <Image
          style={[styles.hourReportChild, styles.hourLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-81.png")}
        />
        <View style={[styles.today, styles.todayLayout]}>
          <View style={styles.parentShadowBox}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/1.png")}
            />
            <Text style={[styles.today19CContainer, styles.containerTypo]}>
              <Text style={styles.today19}>{`Today
19 `}</Text>
              <Text style={styles.c1}>C</Text>
              <Text style={styles.text2}>°</Text>
            </Text>
            <Text style={[styles.c2, styles.containerTypo]}>
              <Text style={styles.today19}>{`19 `}</Text>
              <Text style={styles.c1}>C</Text>
              <Text style={styles.text2}>°</Text>
            </Text>
            <Image
              style={styles.cloudsIcon}
              resizeMode="cover"
              source={require("../assets/clouds.png")}
            />
          </View>
        </View>
        <View style={[styles.today1, styles.todayLayout]}>
          <View style={styles.parentShadowBox}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/1.png")}
            />
            <Text style={[styles.wed19CContainer, styles.containerTypo]}>
              <Text style={styles.today19}>{`Wed
19 `}</Text>
              <Text style={styles.c1}>C</Text>
              <Text style={styles.text2}>°</Text>
            </Text>
            <Text style={[styles.c2, styles.containerTypo]}>
              <Text style={styles.today19}>{`19 `}</Text>
              <Text style={styles.c1}>C</Text>
              <Text style={styles.text2}>°</Text>
            </Text>
            <Image
              style={styles.cloudsIcon}
              resizeMode="cover"
              source={require("../assets/clouds.png")}
            />
          </View>
        </View>
        <View style={[styles.today2, styles.todayLayout]}>
          <View style={styles.parentShadowBox}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/1.png")}
            />
            <Text style={[styles.today19CContainer, styles.containerTypo]}>
              <Text style={styles.today19}>{`Today
19 `}</Text>
              <Text style={styles.c1}>C</Text>
              <Text style={styles.text2}>°</Text>
            </Text>
            <Text style={[styles.c2, styles.containerTypo]}>
              <Text style={styles.today19}>{`19 `}</Text>
              <Text style={styles.c1}>C</Text>
              <Text style={styles.text2}>°</Text>
            </Text>
            <Image
              style={styles.cloudsIcon}
              resizeMode="cover"
              source={require("../assets/clouds.png")}
            />
          </View>
        </View>
        <View style={[styles.today3, styles.todayLayout]}>
          <View style={styles.parentShadowBox}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/1.png")}
            />
            <Text style={[styles.today19CContainer, styles.containerTypo]}>
              <Text style={styles.today19}>{`Today
19 `}</Text>
              <Text style={styles.c1}>C</Text>
              <Text style={styles.text2}>°</Text>
            </Text>
            <Text style={[styles.c2, styles.containerTypo]}>
              <Text style={styles.today19}>{`19 `}</Text>
              <Text style={styles.c1}>C</Text>
              <Text style={styles.text2}>°</Text>
            </Text>
            <Image
              style={styles.cloudsIcon}
              resizeMode="cover"
              source={require("../assets/clouds.png")}
            />
          </View>
        </View>
        <Text style={styles.hourReport1}>
          <Text style={styles.hourReport2}>{`15 Day Report
`}</Text>
          <Text style={styles.text}>{`

`}</Text>
        </Text>
      </View>
      <View style={[styles.today4, styles.todayLayout]}>
        <View style={styles.parentShadowBox}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/1.png")}
          />
          <Text style={[styles.tue19CContainer, styles.containerTypo]}>
            <Text style={styles.today19}>{`Tue
19 `}</Text>
            <Text style={styles.c1}>C</Text>
            <Text style={styles.text2}>°</Text>
          </Text>
          <Text style={[styles.c2, styles.containerTypo]}>
            <Text style={styles.today19}>{`19 `}</Text>
            <Text style={styles.c1}>C</Text>
            <Text style={styles.text2}>°</Text>
          </Text>
          <Image
            style={styles.cloudsIcon}
            resizeMode="cover"
            source={require("../assets/clouds.png")}
          />
        </View>
      </View>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hourLayout: {
    height: 315,
    width: 358,
    left: 0,
    position: "absolute",
  },
  cClr: {
    color: Color.gray_200,
    position: "absolute",
  },
  text1Position: {
    left: 0,
    height: 62,
    top: 0,
  },
  todayLayout: {
    height: 149,
    width: 40,
    position: "absolute",
  },
  containerTypo: {
    fontFamily: FontFamily.alegreyaSansRegular,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  hourReportChild: {
    top: 0,
  },
  hourReport2: {
    fontSize: FontSize.size_base,
  },
  text: {
    fontSize: FontSize.size_5xs,
  },
  hourReport1: {
    top: 3,
    left: 22,
    letterSpacing: "25%",
    fontFamily: FontFamily.heading1Medium,
    width: 257,
    height: 25,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  cloudyIcon: {
    top: 28,
    left: 9,
    width: 79,
    height: 66,
    position: "absolute",
  },
  cloudy: {
    left: 91,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.alegreyaSansBold,
    width: 109,
    height: 47,
    top: 4,
    color: Color.gray_200,
    textAlign: "left",
  },
  text1: {
    fontSize: FontSize.heading1Medium_size,
    fontWeight: "100",
    fontFamily: FontFamily.alegreyaSansThin,
    textAlign: "center",
    width: 91,
    height: 62,
    top: 0,
    left: 0,
  },
  c: {
    left: 67,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.alegreyaSansMedium,
    height: 38,
    width: 26,
    top: 4,
    color: Color.gray_200,
    textAlign: "left",
  },
  parent: {
    width: 93,
    height: 62,
    top: 0,
    position: "absolute",
  },
  temperature: {
    top: 40,
    left: 60,
    width: 199,
    height: 62,
    position: "absolute",
  },
  hourReport: {
    top: 6,
  },
  icon: {
    top: 26,
    left: 8,
    width: 19,
    height: 18,
    position: "absolute",
  },
  today19: {
    fontSize: FontSize.size_2xs,
  },
  c1: {
    fontSize: FontSize.size_7xs,
  },
  text2: {
    fontSize: FontSize.size_6xs,
  },
  today19CContainer: {
    height: 24,
    left: 4,
    width: 26,
    top: 0,
  },
  c2: {
    top: 77,
    width: 20,
    height: 8,
    left: 4,
  },
  cloudsIcon: {
    top: 93,
    width: 29,
    height: 17,
    left: 4,
    position: "absolute",
  },
  parentShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_7xs,
    height: 149,
    width: 40,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  today: {
    left: 29,
    top: 66,
    height: 149,
    width: 40,
  },
  wed19CContainer: {
    width: 35,
    left: 4,
    height: 18,
    top: 0,
  },
  today1: {
    left: 155,
    top: 66,
    height: 149,
    width: 40,
  },
  today2: {
    left: 281,
    top: 66,
    height: 149,
    width: 40,
  },
  today3: {
    left: 218,
    top: 66,
    height: 149,
    width: 40,
  },
  hourReport3: {
    top: 333,
  },
  tue19CContainer: {
    left: 3,
    width: 46,
    height: 22,
    top: 0,
  },
  today4: {
    top: 399,
    left: 95,
  },
  image1Icon: {
    top: 152,
    left: 27,
    width: 297,
    height: 94,
    position: "absolute",
  },
  weatherReport: {
    backgroundColor: Color.gainsboro_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default WeatherReport;
