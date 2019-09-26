import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Button } from 'react-native'
import React, { Component, Fragment } from "react";
import { StyleSheet, TouchableOpacity, Text, View, FlatList, Dimensions } from "react-native";
import FadeInView from "./animation";
import { Switch, Image } from "react-native";
import LogoTitle from "./headerlogo";
import moment from "moment";
import { ScrollView } from "react-native-gesture-handler";
import CountDown from 'react-native-countdown-component';
import AsyncStorage from "@react-native-community/async-storage";
import StarRating from 'react-native-star-rating';


export default class popup extends Component{
    constructor(props) {
        super(props);
        this.state={
          starCount:3,


        };
}

static navigationOptions = {

    title: 'upcoming events',
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

  render() {
    //  console.warn(data.users[0].name)
    return (

        <View style={{flex:1 ,
        flexDirection:"row-reverse",}}>
  <Button
    title="Show Dialog"
    onPress={() => {
      this.setState({ visible: true });
    }}
  />
  <Dialog
    visible={this.state.visible}
    onTouchOutside={() => {
      this.setState({ visible: false });
    }}
  >
    <DialogContent>
    
    <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
    </DialogContent>
  </Dialog>
</View>

    );
}}