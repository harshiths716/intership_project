import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {bottomUser,bottomorganizer} from './bottomnav';
import EventsAssigned from '../view_events/EventsAssigned'
import PastEvents from '../view_events/PastEvents'
//import  from './bottomnav'
class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image
                        source={{ uri: 'https://i.stack.imgur.com/Fw96Z.png' }}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
const bottomUser_StackNavigator = createStackNavigator({
    First: {
        screen: bottomUser,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Screen',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF7F5B',
            },
            headerTintColor: '#fff',
        }),
    },
});



const Events_Assigned = createStackNavigator({
    Second: {
        screen: EventsAssigned,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Screen',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF7F5B',
            },
            headerTintColor: '#fff',
        }),
    },
});

const Past_Events = createStackNavigator({
    Third: {
        screen: PastEvents,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Screen',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF7F5B',
            },
            headerTintColor: '#fff',
        }),
    },
});

const User = createDrawerNavigator({
  Home: {screen: bottomUser_StackNavigator},
  'Events Assigned':{screen:Events_Assigned},
  'Past Events':{screen:Past_Events}

});


//export default createAppContainer(User);




const bottomOrganizer_StackNavigator = createStackNavigator({
    First: {
        screen: bottomorganizer,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Screen',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF7F5B',
            },
            headerTintColor: '#fff',
        }),
    },
});


const Organizer = createDrawerNavigator(
    {
Home:{screen:bottomOrganizer_StackNavigator}
    }
);

export default createAppContainer(Organizer);


// const Admin = createDrawerNavigator(
//     {

//     }
// );
