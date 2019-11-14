import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Button,
  Dimensions,
  Picker,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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
import CheckBox from '@react-native-community/checkbox';
// import { CheckBox } from 'react-native-elements'
var data = [
  {
    eName: 'veni',
  },
  {
    eName: 'vidi',
  },
  {
    eName: 'vici',
  },
];
var count=''
//var data =''
 class Designation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedtype: '',
     
      istypepicker: true,
      ename: '',
      venue: '',
      check:new Array(this.props.userdetails!=undefined?this.props.userdetails.length:data.length).fill(false),
      listHolder: '',
      search: '',
      idarray:[],
      data:[]
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
  onValueChangetype(value) {
    if (value == 'other') {
      this.setState({
        istypepicker: false,
      });
    } else {
      this.setState({
        selectedtype: value,
      });
this.segricate(value)

    }
  }
async componentDidMount(){
    try {
        value = await AsyncStorage.getItem('userdata');
        count = JSON.parse(value);
      } catch (e) {
        
      }
      
      this.props.sendUserDetails(count);
}

  _onChange(i){
      
      let arr=this.state.check;
      arr[i]=!arr[i];
      this.setState({check:arr},()=>console.log(this.state.check))
  }


  segricate = (obj) => {

    var rebels = this.props.userdetails.filter(function (pilot) {
        return pilot.desgs.dName === obj;
      });

      this.setState({data:rebels},console.warn(this.state.data))
  };

  render() {

    return (
      <ScrollView style={styles.scrollView}>
        <View style={{backgroundColor: 'white'}}>
          <View style={{flexDirection: 'row'}}>
            <Picker
              note
              mode="dropdown"
              style={{width: 250}}
              selectedValue={this.state.selectedtype}
              onValueChange={this.onValueChangetype.bind(this)}>
              <Picker.Item label="SD1" value="SDE - 1" />
              <Picker.Item label="MTS - 1" value="MTS - 1" />
              <Picker.Item label="PE" value="PE" />
              <Picker.Item label="HR" value="HR" />
              <Picker.Item label="HR Head" value="HR Head" />
              <Picker.Item label="other" value="other" />
            </Picker>

            <TouchableOpacity style={{backgroundColor: 'blue', width: '60%'}}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>DONE</Text>
            </TouchableOpacity>
          </View>

          {  this.state.data.map((item,index)=>{
      
        return(
            <View style={styles.container}>
            <View style={styles.containerr}>
              <View style={styles.containerrr}>
                <Text
                  style={{
                    fontSize: 22,
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {item.name}
                </Text>
                <CheckBox value={this.state.check[index]} disabled={false} onValueChange={()=>{this._onChange(index)}} />
              </View>
            </View>
          </View>
        ) }  
    )
  }
</View>
 </ScrollView>
 );
  }
}
import {sendUserDetails} from '../../../app/Actions/create_event_action'

const mapStateToProps = state => ({
    userdetails: state.CreateEvent.userdetails,
  });
  
const mapDispatchToProps = dispatch => ({
sendUserDetails: data => dispatch(sendUserDetails(data)),
   });
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Designation);



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
    width: 330,
    height: 300,
    alignSelf: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: 'black',
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
  rectangle: {
    width: 180 * 2,
    height: 320,
    // backgroundColor: '#4796ae',
    borderColor: '#0275d8',
    borderWidth: 3,
  },
  buttonStyle: {
    height: 40,
    width: 160,
    borderRadius: 10,
    backgroundColor: 'yellow',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
  },
  textdesign: {
    fontSize: 22,
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: '#0275d8',
  },
  containerr: {
    flex: 1,
    flexDirection: 'column',
  },
  containerrr: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
  },
});
