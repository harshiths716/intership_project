import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Button,
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
var data=''
var count=''
class Upcomingeventinfo extends React.Component {
constructor(props) {
    super(props);
    this.state = {
     data:this.props.navigation.state.params
    };
  }




  async componentDidMount() {
    try {
      value = await AsyncStorage.getItem('userdata');
      count = JSON.parse(value);
  
    } catch (e) {
    
    }
  }


  renderItem = (item) => {


    return (
      <ScrollView style={styles.container}>
        <View style={styles.bottomItem}>
          <TouchableOpacity>
             
            <Text
            
              style={{fontSize: 32, fontFamily: 'Roboto',fontWeight:'bold',textAlign:'center'}}>
             {item.eName}       
            </Text>
            <View style={styles.rectangle} >
            <Text
            
            style={{fontSize: 22, fontFamily: 'Roboto',fontWeight:'bold',textAlign:'center'}}>
           Venue      
          </Text>
            <Text
             
              style={styles.textdesign}>
              
                      {item.venue}
            </Text>
            <Text
            
            style={{fontSize: 22, fontFamily: 'Roboto',fontWeight:'bold',textAlign:'center'}}>
           description     
          </Text>
            <Text
             
              style={styles.textdesign}>
           
            {item.description}
            </Text>
            <Text
            
            style={{fontSize: 22, fontFamily: 'Roboto',fontWeight:'bold',textAlign:'center'}}>
           startTime   
          </Text>
            <Text
             
              style={styles.textdesign}>
           
            {item.startTime.substr(0,10)}
            </Text>
            <Text
            
            style={{fontSize: 22, fontFamily: 'Roboto',fontWeight:'bold',textAlign:'center'}}>
           endTime   
          </Text>
            <Text
             
              style={styles.textdesign}>
            
            {item.endTime.substr(0,10)}
            </Text>
            <Text
            
            style={{fontSize: 22, fontFamily: 'Roboto',fontWeight:'bold',textAlign:'center'}}>
           capacity 
          </Text>
            <Text
             
              style={styles.textdesign}>
            
            {item.capacity}
            </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  
  componentWillUnmount(){
    this.props.clear()
  }

handle_join(){
  data={endpoint:'/eventParticipant/joinEvent',method:'POST',data:{eventId:this.state.data._id},token:count.token}
  this.props.join(data)
}

  render() {    
    return (
      <ScrollView style={styles.scrollView}>
        <View style={{backgroundColor: 'white'}}>
          <View style={{flex:1}}>
            <Image
              style={styles.stretch}
              source={require('../resources/music-event-flyer-template-design-b3623b78ff92c7f3c17e76815c52cc43.jpg')}
            />
          </View>
          {this.renderItem(this.state.data)}
       
        </View>
        <TouchableOpacity style={{width:'100%',height:40,backgroundColor:"blue",alignItems:'center'}}
        onPress={()=>this.handle_join()}>
       <Text style={{fontFamily:'Roboto',fontSize:24,color:'white'}}>Join</Text>
</TouchableOpacity>
       
{this.props.response.message && alert(this.props.response.message)}

      </ScrollView>
    );
  }
}


import {join,clear_response} from '../../../app/Actions/button_action'
const mapStateToProps = state => ({
  response:state.Button_reducer.response
});

const mapDispatchToProps = dispatch => ({

join:(data)=>dispatch(join(data)),
clear: ()=>dispatch(clear_response())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Upcomingeventinfo);




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


}
});
