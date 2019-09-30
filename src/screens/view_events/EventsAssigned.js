import React, { Component, Fragment } from "react";
import { StyleSheet, KeyboardAvoidingView,TouchableOpacity, Button,Text, View, FlatList, Dimensions, TextInput } from "react-native";
//import FadeInView from "./animation";
import { Switch, Image } from "react-native";
//import LogoTitle from "./headerlogo";
import moment from "moment";
import { ScrollView } from "react-native-gesture-handler";
//import Eventinfo from "./Eventinfo";
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import FloatingLabelInput from '../reuseablecomponents/Floatinput'
import {connect} from 'react-redux'
import AsyncStorage from "@react-native-community/async-storage";

var data 

class EventsAssigned extends Component {
        constructor(props) {
          super(props);
          this.state = {
           comment:'',
        visible:false,
          };
        }

accept=()=>{

}
 async componentDidMount(){

  try {
    value = await AsyncStorage.getItem('userdata');
    data = JSON.parse(value);
      } catch (e) {
        console.warn('async error')
        console.warn(e)
      }

  this.props.sendAssignedEvents(data)
}
reject=(obj)=>{
  console.warn('inside')

  this.setState({visible:true})
}

        renderItem = ({ item, index }) => {

          console.warn(item);
          const { navigate } = this.props.navigation;
        
      
          return (
            <ScrollView style={styles.container}>
      
      
              
              <View
      
                style={styles.bottomItem}>
                <TouchableOpacity
                  style={styles.bottomItemInner}
                  onPress={() => {
                    navigate("eventdet", item);
                  }}
                >
      
      
                  <Text
                    style={{ fontFamily: "Roboto", fontSize: 17, color: "#ffffff" }}
                  >
      
                    {item.events.eName}
                  </Text>
                  <Text numberOfLines={1} style={{ fontSize: 17, fontFamily: "Roboto" }}>
                    {item.events.venue}
                  </Text>
                 
                  <Text
                    numberOfLines={1}
                    style={{ color: "white", fontSize: 14, fontFamily: "Roboto" }}
                  >
                    {item.events.description}
                  </Text>
                  <View style={styles.containerr}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                  >
                    <Text> Accept </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button1}
                    onPress={()=>this.reject(item.eventID)}
                  >
                    <Text> Reject</Text>
                  </TouchableOpacity>
                  </View>
      
      
                </TouchableOpacity>
      
              </View>
      
            </ScrollView>
          );
        }
        
        upevents = () => {
          if (this.props.assignedEvents.length<1) {
            return (
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 30,
                    opacity: 0.1,
                    alignSelf: "center"
                  }}>
                  no events
                    </Text>
              </View>
            );
          } else {
            return (
              <FlatList
                // numColumns={3}
                data={this.props.assignedEvents}
                // style={styles.container}
                renderItem={this.renderItem}
              // numColumns={numColumns}
              />
            );
          }
        };

        render() {
          //  console.warn(data.users[0].name)
          return (
      
<KeyboardAvoidingView style={{flex:1}} behavior="padding" >
           
<Dialog
width="80%"
height='20%'
//padding='10%'
visible={this.state.visible}
onTouchOutside={() => {
this.setState({ visible: false });
}}
>
<DialogContent>

<FloatingLabelInput
//style={{width:'100%',height:'100%'}}
        label="comment"
        value={this.props.username}
        onChangeText={this.props.typeusername}
      />
</DialogContent>
</Dialog>




            <ScrollView style={styles.scrollView}>
              <View style={{ backgroundColor: "white" }}>
      
      
              
      
                {this.upevents()}

                </View>

</ScrollView>
</KeyboardAvoidingView>
);
}
}


import {SEND_ASSIGNEDEVENTS} from '../../../app/Actions/eventsAssigned';
const mapStateToProps = state => ({
  assignedEvents: state.TextChanger.assignedEvents,
});

const mapDispatchToProps = dispatch => ({
  sendAssignedEvents: data => dispatch(send_assignedEvents(data)),

});


function send_assignedEvents(data1) {
  console.warn('inside send func');
  return {type:SEND_ASSIGNEDEVENTS,payload:data1};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventsAssigned);



const styles = StyleSheet.create({
  containerr: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
  button: {
    alignItems:'center',
    height:'130%',
    flex: 1,
    backgroundColor:'green',
  },
  button1: {
    alignItems:'center',
    height:'130%',
    flex:1,
     backgroundColor: 'red',
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'green',
  },
  scrollView: {
  //  backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  count:
    { flex: 3, },
  stretch: {
    width: 430,
    height: 300,
    resizeMode: 'center'
  },



  container: {
    flex: 1,
    // marginVertical: 20
  },
  //   item: {
  //     backgroundColor: '#4D243D',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     flex: 1,
  //     margin: 1,
  //     height: Dimensions.get('window').width / numColumns, // approximate a square
  //   },
  //   itemInvisible: {
  //     backgroundColor: 'transparent',
  //   },
  //   itemText: {
  //     color: '#fff',
  //   },
  //   container: {
  //     // width: "93%",

  //    },
  //    flatlist: {
  //    //  flexWrap: 'wrap',
  //   // flexDirection:'column'
  //    },
  //    content: {
  //    // alignItems: 'flex-end'
  //    },
  //   top: {
  //     //height: "45%",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     backgroundColor: "green"
  //   },
  //   profileimage: {
  //     width: 140,
  //     height: 140,
  //     borderRadius: 100,
  //     borderWidth: 4,
  //     borderColor: "black",
  //     backgroundColor: "yellow"
  //   },
  //   center: {
  //    // height: "10%",
  //     backgroundColor: "#7fbcac"
  //   },
  //    bottom: {
  //      //height: "100%",
  //    //  alignSelf:'center',
  //      //backgroundColor: "#7fbcac",
  //     // flexDirection: "row",
  //      //flexWrap: "wrap",
  //     // padding: 5,

  //     // margin:5
  //    },
  count:
  {
    flexDirection: 'column-reverse'


  },
  bottomItem: {
    width: "100%",
    height:'50%',
    padding: '2%'
    //height: "85%",
  },
  bottomItemInner: {
    // flex: 1,
    backgroundColor: "#4796ae",
    //  width:'50%',
    //  height: "200%",
    padding: 5,
    borderRadius: 7,
  },
  ScrollView:
  {
    backgroundColor: 'red',
    marginHorizontal: 30,
  },



});


