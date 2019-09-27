import React from "react";
//import Apicall from "../../networking/apicall";


import {sign_in} from '../../../app/Actions/login-actions'

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
import { connect } from 'react-redux';


//var userdata
 class Loginsc extends React.Component {
  constructor(props) {
    super(props);
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

  storeData = async (val) => {
    //const { navigate } = this.props.navigation;

    try {
      console.warn('inside storedata' +JSON.stringify(val))
      await AsyncStorage.setItem("userdata", val);
    //  const value = await AsyncStorage.getItem("userdata");
     // console.warn('new store' +JSON.stringify(value))
     // await AsyncStorage.setItem("token", this.state.dataResponse.token);
    //  await console.warn(this.state.dataResponse.token);

    // let val1 =  JSON.stringify(val)
    // console.warn('code.....',val1)
    // if(val1.success=='true'){
    //   console.warn('Code has reached navigate')
    //   this.props.navigate
    // }
    


    } catch (e) {
      console.warn(e)
    }
  };
// componentWillUpdate(){
//   this.storeData()
// }


// async componentDidUpdate(){
//   try {
//     const value = await AsyncStorage.getItem("userdata");
//    // const value1 = await AsyncStorage.getItem("username");
    // if (value !== null) {
    //   //navigate("stack");
    //   console.warn('component',JSON.stringify(value))
    // }
//   } catch (e) {}

// }
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
    //console.warn("in com "+ this.props.userdata1)
    const value = await AsyncStorage.getItem("userdata");
    if (value !== null) {
      //navigate("stack");
      console.warn('component',JSON.stringify(value))
    }


  //  const data = await this.performTimeConsumingTask();

  //   if (data !== null) {
  //     this.setState({ isLoading: false });
  //   }

  }

  async componentDidUpdate(){
    await this.storeData(this.props.userdata1)

    let res =JSON.stringify(this.props.userdata1)
    if(res !== null ){
      if(res.success === true)
      this.props.navigation.navigate('User')
else
alert('invalid credentials')
    }


    
    // try {
    //   const value = await AsyncStorage.getItem("userdata");
    //   console.warn(value+' new')
    //  // const value1 = await AsyncStorage.getItem("username");
    //   if (value !== null) {
    //     //navigate("stack");
    //     console.warn('component',JSON.stringify(value))
    //   }
    // } catch (e) {
    //   console.warn(e)
    // }
  }

  handleSubmit(obj) {
   // const { user } = this.state;
   console.warn('inside handlesubmit')
   this.props.sign_in( obj);
   
  }

  render() {



  userdata={email:this.props.username,password:this.props.password}
    // if (this.state.isLoading) {
    //   return <SplashScreen />;
    // }
   // console.warn(this.props)
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>{this.props.username}{this.props.password}{JSON.stringify(this.props.userdata1)}</Text>
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
              onPress={()=>
               // this.validateit() || this._onSubmit();
              this.handleSubmit(userdata)
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




import {TYPE_USERNAME,TYPE_PASSWORD,SIGN_IN,RECEIVE_LOGIN_API}  from '../../../app/Actions/Login_ActionTypes'
const mapStateToProps = (state) => ({
    username: state.TextChanger.username,
    password: state.TextChanger.password,
   userdata1:state.TextChanger.userdata
});

const mapDispatchToProps = (dispatch) => ({
   typeusername: (val) => dispatch({type:TYPE_USERNAME,payload:val}),
   typepassword: (val) => dispatch({type:TYPE_PASSWORD,payload:val}),
   sign_in:(userdata)=>dispatch(sign(userdata)),
   navigate:()=>this.props.navigation.navigate('User')
});

//login_api_hit=(val)=>dispatch({type:RECEIVE_LOGIN_API,payload:val})

function sign(userdata) {
  console.warn('inside sign func')
  return {type:SIGN_IN,payload:userdata}
}



export default connect(mapStateToProps,mapDispatchToProps)(Loginsc);


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
