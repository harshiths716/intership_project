//import {  createAppContainer } from "react-navigation";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
//import App from '../../../app/App'
import {createStackNavigator} from "react-navigation-stack"
import Loginsc from "../login_screen/loginsc";
// import Splash from "./splashscreen";
import Stacknav from "./bottomnav.js";
// import Check from "./attendence";
// import Eventdetail from "./eventdetails";
// import Eventalter from "./eventalter";
// import DrawerNavigator from "./Stacknav";
import GoogleButton from '../login_screen/GoogleButton'
import Notification from '../login_screen/notification'
import User from './SideDrawer'
import React, {Component} from 'react';
import Upcoming from '../view_events/Upcoming'
import {Provider} from 'react-redux';

import store from '../../../app/Reducers/index';
// const Firststack = createStackNavigator(
//   {
//     noti:{screen:Notification},
//    goo:{screen:GoogleButton},
//    login: { screen: Login },
//     stack: { screen: Stacknav },
//   //  alter: { screen: Eventalter }
//   },
//   {
//     initialRouteName: 'noti',

//     headerMode: "none"
//   }
// );
// export default createAppContainer(Firststack);
  


const Firststack = createAppContainer(
  createSwitchNavigator(
    {
    Upcoming,
      Loginsc,
      User,
    //  SideDrawer
    },
    {
      headerMode: 'none',
      initialRouteName: 'Upcoming'
    }
  )
);
//export default Firststack



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Firststack />
      </Provider>
    );
  }
}