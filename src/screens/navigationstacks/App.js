import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack"
import Loginsc from "../login_screen/loginsc";
import Stacknav from "./bottomnav.js";
import GoogleButton from '../login_screen/GoogleButton'
import Notification from '../login_screen/notification'
import {User,Organizer,Admin} from './SideDrawer'
import React, {Component} from 'react';
import Upcoming from '../view_events/Upcoming'
import {Provider} from 'react-redux';
import TodoApp from '../Todo/TodoApp'
import store from '../../../app/Reducers/index';
import EventPlan2 from '../view_events/eventplan2'
import Designation from '../view_events/invites'
import Myeventinfo from '../view_events/Myeventinfo';
import Upcomingeventinfo from '../view_events/Upcomingeventinfo';
import UploadFile from '../view_events/upload_file'
import FirebaseStorageUploader from '../view_events/FirebaseStorageUploader'
import new_firebase from '../view_events/new_firebase'
const Firststack = createAppContainer(
  createSwitchNavigator(
    {
   // Upcoming,
   TodoApp,
      Loginsc,
     User,
    Organizer,
Notification,
GoogleButton,
Admin,
UploadFile,
new_firebase,
FirebaseStorageUploader
   },
    {
      headerMode: 'none',
      initialRouteName: 'new_firebase'
      //initialRouteName: 'Organizer'

    }
  )
);



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Firststack />
      </Provider>
    );
  }
}