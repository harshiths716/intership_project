import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

//import FadeInView from "./animation";
import {Switch} from 'react-native';
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
              style={{fontSize: 17, fontFamily: 'Roboto', fontWeight:'bold',textAlign:'center',color:'white'}}>
              {item.eName}
            </Text>
            <Text
              style={{fontFamily: 'Roboto', fontSize: 17, fontWeight:'17',textAlign:'center',color:'white'}}>
              {item.startTime.substr(0, 10)}
            </Text>
            <Text
              numberOfLines={1}
              style={{fontSize: 17, fontFamily: 'Roboto', fontWeight:'17',textAlign:'center',color:'white'}}>
              {item.venue}
            </Text>
            <Text
              numberOfLines={1}
              style={{ fontWeight:'17', fontSize: 17, fontFamily: 'Roboto',textAlign:'center',color:'white'}}>
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
     
      }
     data_data = {date:date,token: count.token};
    this.props.sendUpcoming(data_data);


  }

  componentDidUpdate() {
  }

  render() {


    return (
      <ImageBackground
      source={require('../resources/3.jpg')}
      style={styles.backgroundImage}
    >
      <ScrollView >
      <View style={{flex:1}}>
      <CountDown
            style={styles.count}

            until={this.props.upcoming.timediff}
           // onFinish={() => alert('finished')}
            onPress={() => alert('hello')}
            size={30}
          />
          <Text style={styles.yellow}>
            TILL NEXT EVENT
            {this.props.upcoming.data.eName}
                     </Text>
            {/* <Image
              style={styles.stretch}
              source={require('../resources/img.jpg')}
            /> */}
         
          {this.props.upcoming!=null && this.upevents()}

          
        </View>
       
      </ScrollView>
      </ImageBackground>
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
  // scrollView: {
  //  // backgroundColor: 'pink',
  //   marginHorizontal: 20,
  // },
  count: {flex: 3},
  stretch: {
    width: 430,
    height: 300,
    resizeMode: 'fit',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 1.2
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
  yellow:{
    fontWeight:'bold',
    position:'relative',
    left:70,
    fontSize:22
  },

  count: {
    flexDirection: 'column-reverse',
  },
  bottomItem: {
    width: '100%',
    
    padding: '2%',
  },
  bottomItemInner: {
    backgroundColor: '#3F729B',
    padding: 7,
    borderColor:'black',
    borderRadius:11,
    width:'100%',
    
    
  },
  ScrollView: {
    backgroundColor: 'red',
    marginHorizontal: 30,
  },
});
