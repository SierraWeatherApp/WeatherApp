import { Image, StyleSheet, Text, View, Pressable, Dimensions, PixelRatio} from "react-native";
import { connect } from 'react-redux';

function Counter({ value }) {
    return <Text>Count: {value}</Text>;
  }
  
  const CounterContainer = connect(state => ({ value: state.unit }))(Counter);
  export default CounterContainer;