import React from "react";
//import Apicall from "../../networking/apicall";




//import SplashScreen from './splashscreen'
import AsyncStorage from "@react-native-community/async-storage";
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  Alert,ScrollView,
  TouchableOpacity
} from "react-native";
import FloatingLabelInput from "../reuseablecomponents/Floatinput";

import { Dimensions } from "react-native";


// class SplashScreen extends React.Component {
//   render() {
//     const viewStyles = [
//     //  styles.container,
//       { backgroundColor: 'orange' }
//     ];
//     const textStyles = {
//       color: 'white',
//       fontSize: 40,
//       fontWeight: 'bold'
//     };

//     return (
//       <View style={viewStyles}>
//         <Text style={textStyles}>
//           Splash Screen
//         </Text>
//       </View>
//     );
//   }
// }




export default class Loginsc extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      nameValidate: true,
      password: "",
      passwordValidate: true,
      dataResponse: null,
      // screenWidth: "",
      // screenHeight: "",
      token: "",
      username: "",
      isLoading: true,
    };
  }


  // performTimeConsumingTask = async() => {
  //   return new Promise((resolve) =>
  //     setTimeout(() => { resolve('result') },2000 )
  //   );
  // }
  



  validateit() {
    const { name } = this.state;
    const { password } = this.state;

    var pattern = /^\w+([.]?\w+)*@nineleaps.com$/;
    var pas = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    var ph = /^(\d{10})$/;
    if (name == "") {
      alert("Please enter your username");
      return;
    } else if (password == "") {
      alert("Please enter your password");
      return;
    } else if (!pattern.test(name)) {
      alert("Invalid Email, Please try again");
      return;
    }
  }

  storeData = async () => {
    try {
      await AsyncStorage.setItem("username", this.state.dataResponse.UserID);
      await AsyncStorage.setItem("token", this.state.dataResponse.token);
    //  await console.warn(this.state.dataResponse.token);
    } catch (e) {}
  };

  // _onSubmit = async () => {
  // //  console.warn("inside");

  //   const { navigate } = this.props.navigation;

  //   body = {
  //     email: this.state.name,
  //     password: this.state.password
  //   };
  //   endpoint = "authenticate";

  //   await Apicall(endpoint, body).then(responseJson => {
  //    this.setState({ dataResponse: responseJson });
  //     this.storeData();
  //     if (responseJson.success == true) {
  //       navigate("stack");
  //     } else {
  //       alert("wrong credentials");
  //     }
  //   });
  // };

  async componentDidMount() {
    // const { navigate } = this.props.navigation;

    this.setState({ screenWidth: Math.round(Dimensions.get("window").width) });
    this.setState({
      screenHeight: Math.round(Dimensions.get("window").height)
    });

    // try {
    //   const value = await AsyncStorage.getItem("token");
    //   const value1 = await AsyncStorage.getItem("username");
    //   if (value && value1 !== null) {
    //     navigate("stack");
    //   }
    // } catch (e) {}


   // const data = await this.performTimeConsumingTask();

    // if (data !== null) {
    //   this.setState({ isLoading: false });
    // }

  }

  render() {
    // if (this.state.isLoading) {
    //   return <SplashScreen />;
    // }
   // console.warn(this.props)
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>{this.props.username}{this.props.password}</Text>
          <View style={{ flex: 1 }}>
            <Image
              source={require("../resources/logo2.png")}
              style={{
                width: "100%",
                height: "9%",
                alignSelf: "center",
                marginTop: "8%",
                marginBottom: "10%"
              }}
            />

            <FloatingLabelInput
              label="Username"
              value={this.props.username}
              onChangeText={this.props.typeusername}
            />

            <FloatingLabelInput
              label="password"
              secureTextEntry={true}
             value={this.props.password}
              onChangeText={this.props.typepassword}
            />

           <TouchableOpacity
              style={styles.button}
              onPress={
               // this.validateit() || this._onSubmit();
               this.props.sign_in
              }
            >
              <Text style={styles.txt}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    padding: "8%",
    backgroundColor: "#f5fcff"
  },
  button: {
    backgroundColor: "#278eb0",
    alignSelf: "center",
    borderRadius: 7,
   marginBottom: "100%",
    width: "45%",
    height: "10%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 7
  },
  // inlineImg: {
  //   position: "absolute",
  //   zIndex: 99,
  //   width: "10%",
  //   height: "28%",
  //   right: "2%",
  //   bottom: "19%",
  //   top: "19%"
  // },

  txt: {
    paddingTop: 10,
    fontSize: 22,
    color: "white",

    alignSelf: "center"
  },
  error: {
    backgroundColor: "#f00"
  },
  img: {
    borderRadius: 45
  }
});
