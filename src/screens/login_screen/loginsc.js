import React from 'react';
//import Apicall from "../../networking/apicall";
import OfflineNotice from '../reuseablecomponents/error'
// import {sign_in} from '../../../app/Actions/login-actions';

import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FloatingLabelInput from '../reuseablecomponents/Floatinput';

// import {Dimensions} from 'react-native';

import {connect} from 'react-redux';



class SplashScreen extends React.Component {
  render() {
    const viewStyles = [
    //  styles.container,
      { backgroundColor: 'orange' }
    ];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold'
    };

    return (
      <View style={viewStyles}>
        <Text style={textStyles}>
          Splash Screen
        </Text>
      </View>
    );
  }
}





class Loginsc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameValidate: true,
      password: '',
      passwordValidate: true,
      dataResponse: null,

      token: '',
      username: '',
      isLoading: true,
    };
  }

  validateit() {
    const {name} = this.state;
    const {password} = this.state;

    var pattern = /^\w+([.]?\w+)*@nineleaps.com$/;
    var pas = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    var ph = /^(\d{10})$/;
    if (name == '') {
      alert('Please enter your username');
      return;
    } else if (password == '') {
      alert('Please enter your password');
      return;
    } else if (!pattern.test(name)) {
      alert('Invalid Email, Please try again');
      return;
    }
  }

  async componentDidUpdate() {
    try {
      await AsyncStorage.setItem(
        'userdata',
        JSON.stringify(this.props.userdata1),
      );
    } catch (e) {
      console.warn('async error');
    }

if(this.props.userdata1.success === false){
  alert('wrong credetials')
}

    if (this.props.userdata1.success === true) {
      if (this.props.userdata1.isOrganiser === true) {
                if(this.props.userdata1.isAdmin === false)

        this.props.navigation.navigate('Organizer');
      }
    }



    if (this.props.userdata1.success === true) {
      if (this.props.userdata1.isOrganiser === false) {
        if(this.props.userdata1.isAdmin === false )
        this.props.navigation.navigate('User');
      }
    }


 if (this.props.userdata1.success === true) {
      if (this.props.userdata1.isOrganiser === true) {
        if(this.props.userdata1.isAdmin === true){
        console.warn('admin')
        this.props.navigation.navigate('Admin');}
      }
    }


  }

  handleSubmit(obj) {
    // var endpoint='/users/authenticate'
    // var method = ''

if(this.props.username && this.props.password){
  this.props.sign_in(obj);

}

else{
  alert('fiels not filled')
}


  }

  render() {
    userdata = {email: this.props.username, password: this.props.password};

    return (
      <View style={styles.container}>
                <OfflineNotice/>

        <ScrollView>

          <View style={{flex: 1}}>
            <Image
              source={require('../resources/logo2.png')}
              style={{
                width: '100%',
                height: '9%',
                alignSelf: 'center',
                marginTop: '8%',
                marginBottom: '10%',
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
              onPress={() => this.handleSubmit(userdata)}>
              <Text style={styles.txt}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

import {
  TYPE_USERNAME,
  TYPE_PASSWORD,
  SIGN_IN,
  RECEIVE_LOGIN_API,
} from '../../../app/Actions/Login_ActionTypes';

import {sign} from '../../../app/Actions/login-actions';
const mapStateToProps = state => ({
  username: state.TextChanger.username,
  password: state.TextChanger.password,
  userdata1: state.TextChanger.userdata,
});

const mapDispatchToProps = dispatch => ({
  typeusername: val => dispatch({type: TYPE_USERNAME, payload: val}),
  typepassword: val => dispatch({type: TYPE_PASSWORD, payload: val}),
  sign_in: userdata => dispatch(sign(userdata)),
  navigate: () => this.props.navigation.navigate('User'),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Loginsc);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '8%',
    backgroundColor: '#f5fcff',
  },
  button: {
    backgroundColor: '#278eb0',
    alignSelf: 'center',
    borderRadius: 7,
    marginBottom: '100%',
    width: '45%',
    height: '10%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 7,
  },

  txt: {
    paddingTop: 10,
    fontSize: 22,
    color: 'white',

    alignSelf: 'center',
  },
  error: {
    backgroundColor: '#f00',
  },
  img: {
    borderRadius: 45,
  },
});
