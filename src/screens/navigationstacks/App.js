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

const Firststack = createAppContainer(
  createSwitchNavigator(
    {
   // Upcoming,
   TodoApp,
      Loginsc,
     User,
    Organizer,
Notification,
Admin,
    EventPlan2,
   // Editsubtask
    //GoogleButton   
   },
    {
      headerMode: 'none',
      initialRouteName: 'Organizer'
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