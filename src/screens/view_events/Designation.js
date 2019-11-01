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
import { CheckBox } from 'react-native';
var data=[
    {
        eName: "veni",
        
    },
    {
        eName: "vidi",
        
    },
    {
        eName: "vici",
        
    }
    
]
 export default class Designation extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        selectedtype: 'Employee Engagement',
        selectedvenue: 'NL:Main Building',
        isStartTimePickerVisible: false,
        isEndTimePickerVisible: false,
        istypepicker: true,
        isvenuepicker: true,
        ename: '',
        venue: '',
     
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
    }
  }

  renderItem = ({item}) => {
    return (
        <View style={styles.container}>
       
        

        <View style={styles.containerr}>
        <View style={styles.containerrr}>
        <Text style={{fontSize: 22, fontFamily: 'Roboto',fontWeight:'bold',textAlign:'center'}}>
            {item.eName}
        </Text>
<CheckBox
    value={true}
    disabled={false}
  />
  </View>
  {/* <View style={styles.containerrr}>
       <Text style={{fontSize: 22, fontFamily: 'Roboto',fontWeight:'bold',textAlign:'center'}}>
            yesterday
        </Text>
<CheckBox
    value={true}
    disabled={false}
  />
  </View>
  <View style={styles.containerrr}>
       <Text style={{fontSize: 22, fontFamily: 'Roboto',fontWeight:'bold',textAlign:'center'}}>
            tommarow
        </Text>
<CheckBox
    value={true}
    disabled={false}
  />
  </View> */}
</View>
        </View>
      );

    };

  
    upevents = () => {
        
        return (
          <FlatList
            data={data}
            renderItem={this.renderItem}
          />
        );
      };

  render() {


    return (
      <ScrollView style={styles.scrollView}>

        <View style={{backgroundColor: 'white'}}>
            <View style={{flexDirection:'row'}}>
                        <Picker
          note
          mode="dropdown"
          style={{width: 250}}
          selectedValue={this.state.selectedtype}
          onValueChange={this.onValueChangetype.bind(this)}>
          <Picker.Item label="SD1" value="Employee Engagement" />
          <Picker.Item label="SD2" value="Technical Training" />
          <Picker.Item label="SD3" value="Meeting" />
          <Picker.Item label="HR" value="Induction Program" />
          <Picker.Item label="HR2" value="HR Meet" />
          <Picker.Item label="other" value="other" />
        </Picker>

        <TouchableOpacity style={{backgroundColor:'blue',width:'60%',}}>
       <Text style={{fontWeight:'bold',color:'white'}}>
           DONE
       </Text>

</TouchableOpacity>
</View>

        {this.upevents()}
       
        </View>
       
       
      </ScrollView>
    );
  }
}



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
    alignSelf:'center',
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "black"
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
    borderColor:'#0275d8',
    borderWidth:3
    
},
buttonStyle: {
  height: 40,
                    width:160,
                    borderRadius:10,
                    backgroundColor : "yellow",
                    marginLeft :50,
                    marginRight:50,
                    marginTop :20
},
textdesign:{
  fontSize: 22, 
  fontFamily: 'Roboto',
  textAlign:'center',
  color:'#0275d8'


},
containerr:{
    flex:1,
flexDirection:'column'
},
containerrr:{
    flex:1,
    flexDirection:'row',
  textAlign:'center'
}
});
