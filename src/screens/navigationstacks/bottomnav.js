
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';
import React from 'react';
import Myevents from '../my_events/myevents';
import Upcoming from '../view_events/Upcoming';
import Createvent from '../create_event/createvent';
import TodoApp from '../Todo/TodoApp';
import Taskinfo from '../Todo/Task/Taskinfo'
import Upcomingeventinfo from '../view_events/Upcomingeventinfo';
import Myeventinfo from '../view_events/Myeventinfo'
export const Eventmy = createStackNavigator(
  {

    myevents: {screen: Myevents},



    Myeventinfo:{screen:Myeventinfo}

  },
  {
    headerMode: 'none',
  },
);




export const Upcomming_stack = createStackNavigator(
  
  {
    Upcoming: {screen: Upcoming},
    Upcomingeventinfo :{screen:Upcomingeventinfo}
  },
  {
    headerMode: 'none',
  },
);



export const bottomUser = createBottomTabNavigator(
  {
    View: {screen:Upcomming_stack },
    'My events': {screen: Eventmy},
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
    },
  },
);
//create stack same for organizer and admin
export const CreateStack = createStackNavigator(
  {
    Create: {screen: Createvent},
    todo: {screen: TodoApp},
    taskinfo:{screen:Taskinfo},
    // VisibleTodos:{screen:TodoList}
  },
  {

    headerMode: 'none',
 //initialRouteName: 'todo'

  },
);

export const bottomorganizer = createBottomTabNavigator(
  {
    View: {screen: Upcomming_stack},
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
