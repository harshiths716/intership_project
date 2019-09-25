import React from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default class SplashScreen extends React.Component {
  componentDidMount = () => {
    setTimeout(() => {
      
      this.props.navigation.navigate("login");
    }, 2000);
  };

  render() {
    return (
      <View>
        <Text>Test</Text>
      </View>
    );
  }
}
