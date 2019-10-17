import Loginsc from '../login_screen/loginsc';
import {
  //createStackNavigator,

  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';
import Eventdetail from '../view_events/eventdetails';
import React,{Component} from 'react';
//import Usercalen from "../view_events/usercalen";
//import Createvent from '../create_event/createvent'
import Myevents from '../my_events/myevents';
import Eventalter from '../my_events/eventalter';
//import Waiting from '../my_events/waitinglist'
import Attendence from '../my_events/attendence';
import Upcoming from '../view_events/Upcoming';
import Createvent from '../create_event/createvent';
import TodoApp from '../Todo/TodoApp';
import Taskinfo from '../Todo/Task/Taskinfo'
// import VisibleTodos from '../Todo/containers/VisibleTodos';
import TodoList from '../Todo/components/TodoList';

export const Eventmy = createStackNavigator(
  {
    myevents: {screen: Myevents},
    eventalter: {screen: Eventalter},
    //  wait:{screen:Waiting},
    attend: {screen: Attendence},
  },
  {
    // initialRouteName: 'noti',

    headerMode: 'none',
  },
);

export const bottomUser = createBottomTabNavigator(
  {
    View: {screen: Upcoming},
    //Create: { screen: Eventcreate },
    'My events': {screen: Eventmy},
    // Delete: { screen: Eventdele },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'View') {
          iconName = 'home'; //${focused ? "" : "-open"};
        } else if (routeName === 'Create') {
          iconName = 'edit';
        } else if (routeName === 'My events') {
          iconName = 'mail';
        }
        return <IconComponent name={iconName} size={40} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#4796ae',
      inactiveTintColor: 'black',
      activeBackgroundColor: 'white',
      inactiveBackgroundColor: 'white',
      //  fontWeight: 'bold',
      //fontSize: 30,
    },
  },
);

export const CreateStack = createStackNavigator(
  {
    Create: {screen: Createvent},
    todo: {screen: TodoApp},
    taskinfo:{screen:Taskinfo},
    // VisibleTodos:{screen:TodoList}
  },
  {
    // initialRouteName: 'noti',

    headerMode: 'none',
  },
);

export const bottomorganizer = createBottomTabNavigator(
  {
    View: {screen: Upcoming},
    Create: {screen: CreateStack},
    'My events': {screen: Eventmy},
    // Delete: { screen: Eventdele },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'View') {
          iconName = 'home'; //${focused ? "" : "-open"};
        } else if (routeName === 'Create') {
          iconName = 'edit';
        } else if (routeName === 'My events') {
          iconName = 'mail';
        }
        return <IconComponent name={iconName} size={40} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#4796ae',
      inactiveTintColor: 'black',
      activeBackgroundColor: 'white',
      inactiveBackgroundColor: 'white',
      //  fontWeight: 'bold',
      //fontSize: 30,
    },
  },
);

// export  const Stacknav = createBottomTabNavigator(
//   {

//     View: { screen: Eventview },
//     Create: { screen: Eventcreate },

//     'My events':{screen:Eventmy},

//    // Delete: { screen: Eventdele },

//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let IconComponent = Icon;
//         let iconName;
//         if (routeName === "View") {
//           iconName = 'home'//${focused ? "" : "-open"};
//         } else if (routeName === "Create") {
//           iconName = 'edit';
//         }
//         else if (routeName === "My events") {
//           iconName = 'mail';
//         }
//         return <IconComponent name={iconName} size={40} color={tintColor} />;
//       }
//     }),
//     tabBarOptions: {

//       activeTintColor: "#4796ae",
//       inactiveTintColor: "black",
//       activeBackgroundColor:'white',
//       inactiveBackgroundColor:'white'
//       //  fontWeight: 'bold',
//       //fontSize: 30,
//     }
//   }
// );

// const DrawerNavigator = createDrawerNavigator({
//   Stacknav
// });

// export default createAppContainer(DrawerNavigator);

//export default createAppContainer(Stacknav);

// export const Eventview = createStackNavigator(
//   {
//     //calen: { screen: Usercalen },
//     create: { screen: Createvent }
//   });

//   Eventview.navigationOptions = ({ navigation }) => {
//     let tabBarVisible;
//     if (navigation.state.routes.length > 1) {
//       navigation.state.routes.map(route => {
//         if (route.routeName === "detail") {
//           tabBarVisible = false;
//         } else {
//           tabBarVisible = true;
//         }
//       });
//     }

//     return {
//       tabBarVisible
//     };
//   };

// export const Eventcreate = createStackNavigator(
//   {
//     create: { screen: Createvent },//{headerLayoutPreset: 'center'},
//    // calen: { screen: Usercalen }

//   },{
//    // headerMode: "none"

//   }

// );
