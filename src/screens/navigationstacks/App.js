import { React } from "react-native";
//import {  createAppContainer } from "react-navigation";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

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
      Loginsc,
      User,
    //  SideDrawer
    },
    {
      headerMode: 'none',
      initialRouteName: 'Loginsc'
    }
  )
);
export default Firststack