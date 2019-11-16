import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Loginsc from '../login_screen/loginsc';
import {User, Organizer, Admin} from './SideDrawer';
import React from 'react';
import {Provider} from 'react-redux';
import store from '../../app/Reducers/index';
import new_firebase from '../view_events/new_firebase';

const Firststack = createAppContainer(
  createSwitchNavigator(
    {
      Loginsc,
      User,
      Organizer,
      Admin,
      new_firebase,
    },
    {
      headerMode: 'none',
      // initialRouteName: 'Loginsc'
      initialRouteName: 'Organizer',

      // initialRouteName: 'new_firebase'
      //initialRouteName: 'Organizer'
    },
  ),
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Firststack />
      </Provider>
    );
  }
}
