import React, { Component, Fragment } from "react";
import { StyleSheet, TouchableOpacity, Text, View, FlatList, Dimensions } from "react-native";
import FadeInView from "./animation";
import { Switch, Image } from "react-native";
import LogoTitle from "./headerlogo";
import moment from "moment";
import { ScrollView } from "react-native-gesture-handler";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
var radio_props = 
[
  { label: 'assign to organizer', value: 0 },
  { label: 'assign to user', value: 1 }
];
export default class Eventinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.navigation.state.params,
      token: "",
      username: "",
      radio_props : [
        { label: 'assign to organizer', value: 0 },
        { label: 'assign to user', value: 1 }
      ]
    };
  }
  static navigationOptions = {

    title: 'Event details',
    headerLeft: <LogoTitle />,
    headerRight: (
      <View style={{ flexDirection: "row" }}>

      </View>
    ),
    headerStyle: {
      backgroundColor: "white"
    },
    headerTintColor: "white",
    headerTitleStyle: {
      textAlign: 'center',
      color: 'black',
      // fontWeight: "bold",
      fontFamily: "Roboto"
    }
  };

  twotypes = (item) => {
    if (this.state.item) {
      return (
        <View>
            <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Myeventinfo',item)}
          >
          <Text
            style={{ fontSize: 40, fontFamily: "Roboto", paddingLeft: "5%", fontWeight: "bold" }}
          >
            {" "}
            {this.state.item.eName}
          </Text>
          <Text
            style={styles.item}
          >
            description:
                {this.state.item.description}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={styles.item}
            >
              venue:{this.state.item.venue}
            </Text>
          </View>

          <Text
            style={styles.item}
          >

            organizer:    {this.state.item.organizer}
          </Text>
          <Text
            style={styles.item}
          >

            startime:    {this.state.item.startTime}
          </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }




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
        <FlatList data={this.props.upcoming.data} renderItem={this.twotypes} />
      );
    }
  };



  render() {
    console.warn("props,eventalter", this.state.item);

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: "white" }}>
          {this.twotypes()}
          <RadioForm
            radio_props={this.state.radio_props}
            initial={0}
            onPress={(value) => { this.setState({ value: value }) }}
            buttonSize={20}
        buttonOuterSize={30}
          />


        </ScrollView>

        {/* {this.selector()} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  txt: {

    fontSize: 25,
    fontFamily: "Roboto",
    alignSelf: "center",
    color: "white"

  },
  button: {
    height: "45%",
    backgroundColor: "#212121",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  green: {
    fontSize: 20,
    color: "green"
  },
  item2: {

    fontSize: 20,
    fontFamily: "Roboto",
    paddingTop: "2%",
    paddingLeft: "5%",
    color: "#4d4f49"

  },
  item: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Roboto",
    paddingTop: "4%",
    paddingLeft: "5%",
    color: "#4d4f49"

  },

  bottom: {
    height: "30%",
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5
  },
  bottomItem: {
    width: "50%",
    height: "30%",
    padding: 5
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: "#42A5F5",
    borderRadius: 8
  }
});