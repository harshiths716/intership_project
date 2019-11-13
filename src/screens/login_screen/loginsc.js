import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
//import Apicall from "../../networking/apicall";
import OfflineNotice from '../reuseablecomponents/error';
// import {sign_in} from '../../../app/Actions/login-actions';
import Notification from './notification';
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
  ImageBackground,
} from 'react-native';
import FloatingLabelInput from '../reuseablecomponents/Floatinput';
import firebase from 'react-native-firebase';
// import {Dimensions} from 'react-native';

import {connect} from 'react-redux';

class SplashScreen extends React.Component {
  render() {
    const viewStyles = [
      //  styles.container,
      {backgroundColor: 'orange'},
    ];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
    };

    return (
      <View style={viewStyles}>
        <Text style={textStyles}>Splash Screen</Text>
      </View>
    );
  }
}

var fcm=''
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
    } catch (e) {}

   

    if (this.props.userdata1.success === true) {
      if (this.props.userdata1.isOrganiser === true) {
        if (this.props.userdata1.isAdmin === false)
          this.props.navigation.navigate('Organizer');
      }
    }

    if (this.props.userdata1.success === true) {
      if (this.props.userdata1.isOrganiser === false) {
        if (this.props.userdata1.isAdmin === false)
          this.props.navigation.navigate('User');
      }
    }

    if (this.props.userdata1.success === true) {
      if (this.props.userdata1.isOrganiser === true) {
        if (this.props.userdata1.isAdmin === true) {
          this.props.navigation.navigate('Admin');
        }
      }
    }
  }

  async handleSubmit(obj) {
    // var endpoint='/users/authenticate'
    // var method = ''

    if (this.props.username && this.props.password) {
     this.props.sign_in(obj);
    } else {
      alert('fiels not filled');
    }

    if (this.props.userdata1.success === false) {
      alert('wrong credetials');
    }

  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId:
        '929636501127-g6oujuoi5uofeh7eilvnv0b2s3jnknoi.apps.googleusercontent.com',
      offlineAcess: true,
    });
  }


  async componentDidMount() {
    this.checkPermission();
    this.createNotificationListeners(); //add this line
    this._configureGoogleSignIn();

  }

  componentWillUnmount() {
    this.notificationListener;
    this.notificationOpenedListener;
    
  }

  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }


  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      this.props.login;
      await GoogleSignin.revokeAccess();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        Alert.alert('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('play services not available or outdated');
      } else {
        Alert.alert('Something went wrong', error.toString());
        this.setState({
          error,
        });
      }
    }
  };



  //3
  async getToken() {
     fcm = await AsyncStorage.getItem('fcmToken');
   // console.warn('my fcm',fcmToken)
    if (!fcm) {
      fcm = await firebase.messaging().getToken();
      if (fcm) {
        // user has a device token
       
        await AsyncStorage.setItem('fcmToken', fcm);

      }
    }
   
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      
    }
  }

  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      const { title, body } = notification;
   
      
        const localNotification = new firebase.notifications.Notification({
          sound: 'sampleaudio',
          show_in_foreground: true,
        })
        .setSound('sampleaudio.wav')
        .setNotificationId(notification.notificationId)
        .setTitle(notification.title)
        .setBody(notification.body)
        .android.setChannelId('fcm_FirebaseNotifiction_default_channel') // e.g. the id you chose above
        // .android.setSmallIcon('@drawable/ic_launcher') // create this icon in Android Studio
        // .android.setColor('#000000') // you can set a color here
        .android.setPriority(firebase.notifications.Android.Priority.High);

        firebase.notifications()
          .displayNotification(localNotification)
          .catch(err => console.error("err"));
    });

    const channel = new firebase.notifications.Android.Channel('fcm_FirebaseNotifiction_default_channel', 'Demo app name', firebase.notifications.Android.Importance.High)
      .setDescription('Demo app description')
      .setSound('sampleaudio.wav');
    firebase.notifications().android.createChannel(channel);

    /*nb
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body } = notificationOpen.notification;
  
      Alert.alert(title, body)
    });

    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      
      Alert.alert(title, body)
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
     
    });
  }








  render() {
    userdata = {email: this.props.username, password: this.props.password,fcmToken:fcm};

    return (
      <ImageBackground
      source={require('../resources/3.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <OfflineNotice />
        {/* <Notification /> */}
        <ScrollView>
          <View style={{flex: 1}}>
            <Image
              source={require('../resources/logo2.png')}
              style={{
                width: '100%',
                height: '9%',
                alignSelf: 'center',
                
              }}
            />


            <FloatingLabelInput
              label="username"
              value={this.props.username}
              style={{width:66,height:44,color:'white'}}
              onChangeText={this.props.typeusername}
            />

            <FloatingLabelInput
              label="password"
              secureTextEntry={true}
              value={this.props.password}
              onChangeText={this.props.typepassword}
            />
<GoogleSigninButton
        style={styles.googlebut}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this.signIn}
        disabled={false}
      />

      <Text style={styles.orr}>
OR

      </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleSubmit(userdata)}>
              <Text style={styles.txt}>SIGN IN</Text>
            </TouchableOpacity>

            
          </View>
         
        </ScrollView>
      </View>
      </ImageBackground>
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
    width:'100%',
    height:'100%',
    padding: '12%'
  
  },
  button: {
    backgroundColor: '#0275d8',
    alignSelf: 'center',
    borderRadius: 19,
    marginBottom: '100%',
    width: '60%',
    height: '7%',
    position:'relative',
    top:22
    //elevation: 7,
  },
  
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7 
  },
  orr:{
    position:'relative',
    top:108,
    left:150,
fontWeight:'bold',
fontSize:15
  },
  googlebut:{
    width: 192,
     height: 48,
     position:'relative',
     top:208,
     left:62,
  },
  txt: {
    paddingTop: 5,
    fontSize: 22,
    color: 'white',
    fontWeight:'bold',
    alignSelf: 'center',
  },
  error: {
    backgroundColor: '#f00',
  },
  img: {
    borderRadius: 45,
  },
  // yo:{
  //   alignContent:"center"

  // }
});
