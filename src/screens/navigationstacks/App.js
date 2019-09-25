import { React } from "react-native";
import {  createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"
import Login from "../../../app/Containers/Login";
// import Splash from "./splashscreen";
import Stacknav from "./bottomnav.js";
// import Check from "./attendence";
// import Eventdetail from "./eventdetails";
// import Eventalter from "./eventalter";
// import DrawerNavigator from "./Stacknav";
//import GoogleButton from '../screens/login_screen/GoogleButton'
const Firststack = createStackNavigator(
  {
   // goo:{screen:Login},
   login: { screen: Login },
    stack: { screen: Stacknav },
  //  alter: { screen: Eventalter }
  },
  {
    initialRouteName: 'stack',

    headerMode: "none"
  }
);
export default createAppContainer(Firststack);
  