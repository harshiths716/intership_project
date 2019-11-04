import React from "react";
import { StyleSheet, TouchableOpacity,Text, View, FlatList, Dimensions } from "react-native";
//import FadeInView from "./animation";
import { Switch } from "react-native";
import LogoTitle from "../reuseablecomponents/headerlogo";
import moment from "moment";
//import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import {organized_events,participated_events} from '../../../app/Actions/myevents_actions'
import {connect} from 'react-redux'

const numColumns = 2;
var data_data=''
class Myevents extends React.Component {
  state = {
    switchValue: false,
    token: "",
    username: "",
    dataResponse: ""
  };


  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
    //state changes according to switch
    if (value === true) {
      this._enroll(data_data)
        } else {
          this._onSubmit(data_data)
        }
    //which will result in re-render the text
  };

  datetime = e => {
    var dateTime = moment(e, moment.ISO_8601, true).format("MMM DD");

    return dateTime;
  };

  year = e => {
    var y = moment(e, moment.ISO_8601, true).format("YYYY");
    return y;
  };



  //////////////edit this for enrolled events

  renderItem = ({item}) => {
   
      return (
        <View style={{flex:1}}>
          <TouchableOpacity
            style={styles.bottomItemInner}
            onPress={() => this.props.navigation.navigate('Myeventinfo',item)}>
            <Text style={{ fontSize: 17, fontFamily: "Roboto" }}>
              {item.events.venue}
            </Text>
            <Text numberOfLines={1} style={{ fontSize: 17, fontFamily: "Roboto" }}>
              {item.events.eName}
            </Text>
            <Text
              numberOfLines={1}
              style={{ color: "white", fontSize: 14, fontFamily: "Roboto" }}
            >
              {item.events.description}
            </Text>
          </TouchableOpacity>
        </View>
      );
    
  }

  _onSubmit = (obj) => {
console.warn('inside on submit')
this.props.organized_events(obj)
  };

  _enroll = (obj) => {
    console.warn('inside enroll')

this.props.participated_events(obj)
  };
  noevents = () => {
    if (this.props.organizedapi.result) {
      return (
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 30,
              opacity: 0.1,
              alignSelf: "center"
            }}
          >
            no events
          </Text>
        </View>
      );
    } else {
     // console.log(this.props.organizedapi)
      return (
        
        <FlatList
          // numColumns={3}
          data={this.props.organizedapi}
         // style={styles.container}
         renderItem={(item)=>this.renderItem(item)}
         //numColumns={numColumns}
         keyExtractor={item => item._id}

        />
      );
    }
  };

  async componentDidMount() {
try{
    value = await AsyncStorage.getItem('userdata');
    count = JSON.parse(value);
      } catch (e) {
        console.warn('async error')
        console.warn(e)
      }


     data_data = {token: count.token}

    this._onSubmit(data_data);
  }

  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            alignSelf: "center"
          }}
        >
          <Text
            style={{ fontSize: 19, fontFamily: "Roboto", fontWeight: "300" }}
          >
            Organized Events
          </Text>
          <Switch
            style={{ marginTop: 30 }}
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />

          <Text style={{ fontSize: 19, fontFamily: "Roboto" }}>
            Enrolled Events
          </Text>
        </View>
        {this.noevents()}
      </View>
    );
  }
}


const mapStateToProps = state => ({
  organizedapi: state.Myevents.organizedapi,
});

const mapDispatchToProps = dispatch => ({
  participated_events: data => dispatch(participated_events(data)),
  organized_events:data=>dispatch(organized_events(data))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Myevents);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  },

  bottomItem: {
    width: "47%",
    height: "85%",

    margin: 5

  },
  bottomItemInner: {
    backgroundColor: '#4796ae',
    margin:10,
    padding:10,
    borderRadius: 7,
  }
});
