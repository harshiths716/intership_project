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

//import FadeInView from "./animation";
import {Switch, Image} from 'react-native';
import LogoTitle from '../reuseablecomponents/headerlogo';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';
//import AsyncStorage from '@react-native-community/async-storage';
import StarRating from 'react-native-star-rating';
import Apicall from '../networking/apicall2';
import {connect} from 'react-redux';


var count =0
var value = 0
class Upcoming extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      username: '',
      date: '',
      dataResponse: [],
      date3: '',
      date: '',
      date5: '',
      date8: '',
      daa: '',
      data: [],
      C: '',
      D: '',
      A: '',

    };





    //this.renderItem = this.renderItem.bind(this);
    // this.upevents = this.upevents.bind(this);
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
      // fontWeight: "bold",
      fontFamily: 'Roboto',
    },
  };

  renderItem = ({item}) => {


    return (
      <ScrollView style={styles.container}
      >
        <View style={styles.bottomItem}>
          <TouchableOpacity style={styles.bottomItemInner}
          onPress={() => this.props.navigation.navigate('Upcomingeventinfo',item)}>
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
      </ScrollView>
    );
  };


  upevents = () => {
    if (this.props.upcoming.length<1) {
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
        <FlatList data={this.props.upcoming.data} renderItem={this.renderItem} />
      );
    }
  };

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }


 async componentDidMount() {

   var dddd = new Date();
   let date = dddd.toISOString();


   try {
    value = await AsyncStorage.getItem('userdata');
    count = JSON.parse(value);
      } catch (e) {
        console.warn('async error')
        console.warn(e)
      }


     data_data = {date:date,token: count.token};



    this.props.sendUpcoming(data_data);


  }

  componentDidUpdate() {
  }

  render() {


    return (
      <ScrollView style={styles.scrollView}>
        <View style={{backgroundColor: 'white'}}>
          <View style={{flex:1}}>
            <Image
              style={styles.stretch}
              source={require('../resources/img.jpg')}
            />
          </View>
          {this.props.upcoming!=null && this.upevents()}

          <CountDown
            style={styles.count}
            until={this.props.upcoming.timediff}
            onFinish={() => alert('finished')}
            onPress={() => alert('hello')}
            size={30}
          />
        </View>
       
      </ScrollView>
    );
  }
}

import {SEND_UPCOMING, RECEIVE_UPCOMING} from '../../../app/Actions/upcoming';
const mapStateToProps = state => ({
  upcoming: state.TextChanger.upcoming,
});

const mapDispatchToProps = dispatch => ({
  sendUpcoming: data => dispatch(send_Upcoming(data)),

});


function send_Upcoming(data) {
  console.warn('inside send func');
  return {type: SEND_UPCOMING, payload: data};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Upcoming);

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
    padding: 5,
    borderRadius: 7,
  },
  ScrollView: {
    backgroundColor: 'red',
    marginHorizontal: 30,
  },
});
