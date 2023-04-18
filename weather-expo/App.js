import * as React from "react";
import { Button, View, Text, useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { TabView, SceneMap } from "react-native-tab-view";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to swipe"
        onPress={() => navigation.navigate("Swipe")}
      />
    </View>
  );
}

const FirstRoute = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
    <Button title="Go home" onPress={() => navigation.navigate("Home")} />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

function SwipeScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

const Stack = createNativeStackNavigator();

<Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{ title: "Overview" }}
/>;
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Swipe" component={SwipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
