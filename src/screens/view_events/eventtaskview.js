import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import {Switch, Image} from 'react-native';
import LogoTitle from '../reuseablecomponents/headerlogo';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';
import {send_accepted_task_events} from '../../../app/Actions/Task_actions'
import {connect} from 'react-redux';


var count =''
var value = 0
class Eventtaskview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     

    };

  }
  static navigationOptions = {
    title: 'upcoming events',
    headerLeft: <LogoTitle />,
    headerRight: <View style={{flexDirection: 'row'}}></View>,
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      textAlign: 'center',
      color: 'black',
      // fontWeight: "bold"
      fontFamily: 'Roboto',
    },
  };

  renderItem = ({item}) => {


    return (
    //  <ScrollView style={styles.container}>
        <View style={{flex:1}}>
          <TouchableOpacity style={styles.bottomItemInner} onPress={()=>this.props.navigation.navigate('eventplan',item)}>
            <Text
              numberOfLines={1}
              style={{fontSize: 17, fontFamily: 'Roboto'}}>
              {item.eName}
            </Text>
            <Text
              style={{fontFamily: 'Roboto', fontSize: 17, color: '#ffffff'}}>
              {item.startTime.substr(0, 10)}
            </Text>
            <Text
              numberOfLines={1}
              style={{fontSize: 17, fontFamily: 'Roboto'}}>
              {item.venue}
            </Text>
            <Text
              numberOfLines={1}
              style={{color: 'white', fontSize: 14, fontFamily: 'Roboto'}}>
              {item.description}
            </Text>
          </TouchableOpacity>
        </View>
   //   </ScrollView>
    );
  };


  upevents = () => {
    if (this.props.acceptedevents.length<1) {
      return (
        <View style={{flex: 1}}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 30,
              opacity: 0.1,
              alignSelf: 'center',
            }}>
            no events
          </Text>
        </View>
      );
    } else {
      return (
        <FlatList data={this.props.acceptedevents} renderItem={this.renderItem}
        

        />
      );
    }
  };


 async componentDidMount() {
  try {
    value = await AsyncStorage.getItem('userdata');
    count = JSON.parse(value);
      } catch (e) {
       
      }
     data_data = {token: count.token};
    this.props.send_accepted_task_events(data_data);
  }


  render() {

    return (
      <ScrollView style={styles.scrollView}>
        <View style={{backgroundColor: 'white'}}>
          <View style={{flex:1}}>
           
          </View>
          {this.props.acceptedevents!=null && this.upevents()}

        
        </View>
       
      </ScrollView>
    );
  }
}

import {SEND_UPCOMING, RECEIVE_UPCOMING} from '../../../app/Actions/upcoming';
const mapStateToProps = state => ({
  acceptedevents: state.Task.acceptedevents,
});

const mapDispatchToProps = dispatch => ({
  send_accepted_task_events: data => dispatch(send_accepted_task_events(data)),

});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Eventtaskview);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
  button1: {
    alignItems: 'center',
    backgroundColor: 'red',
  },
  scrollView: {
   // backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  count: {flex: 3},
  stretch: {
    width: 430,
    height: 300,
    resizeMode: 'center',
  },

  stretch: {
    width: 430,
    height: 200,
    resizeMode: 'stretch',
  },

  container: {
    flex: 1,
    // marginVertical: 20
  },

  count: {
    flexDirection: 'column-reverse',
  },
  bottomItem: {
    width: '100%',
    padding: '2%',
  },
  bottomItemInner: {
    backgroundColor: '#4796ae',
    margin:10,
    padding:10,
    borderRadius: 7,
  },
  ScrollView: {
    backgroundColor: 'red',
    marginHorizontal: 30,
  },
});
