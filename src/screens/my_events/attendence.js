import React, { Component } from "react";
import { Button, View, Text, CheckBox } from "react-native";
import LogoTitle from "../reuseablecomponents/headerlogo";
//import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";
import Apicall from "../networking/apicall";
import Apicall2 from "../networking/apicall2";
import { TouchableOpacity } from "react-native-gesture-handler";
var tempCheckValues = [];
var tempCheckValues2 = [];

export default class Attendence extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attendance: "",
      checkBoxChecked: [],
      data: [this.props.navigation.state.params],
      dataResponse: []
    };
  }



  static navigationOptions = {
    title: "Attendance",
  
    headerStyle: {
      backgroundColor: "white"
    },
    headerTitle: <LogoTitle />,

   
    headerTintColor: "black",
    headerTitleStyle: {
      textAlign: "center",
      fontWeight: "bold",
     // color:'black',
      fontFamily: "Roboto"
    }
  };


  async checkBoxChanged(participantID, eventID, value, index) {
    tempCheckValues2[index] = { participantID, eventID };

    var temp = tempCheckValues2.filter(function(el) {
      return el != null;
    });

    console.log("temp", temp);
    var tempCheckBoxChecked = this.state.checkBoxChecked;
    tempCheckBoxChecked[participantID] = !value;
    await this.setState({ attendance: temp });
    // await console.warn(this.state.attendance);
    await this.setState({
      checkBoxChecked: tempCheckBoxChecked
    });
  }
  _onSubmit = () => {
    body = {
      eventID: this.state.data[0]._id
    };
    endpoint = "attendees";
    Apicall(endpoint, body, this.state.token).then(responseJson => {
      this.setState({ dataResponse: responseJson });
    });
  };

  _onSubmit2 = () => {
    console.log("inside");
    return fetch("http://ef69aaaf.ngrok.io/attendance", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.state.token
      },
      body: {data:this.state.attendance}
    })
      .then(response => response.json())
      .then(responseJson => {
        alert(responseJson.message);
        this._onSubmit();
      })

      .catch(error => {
        console.error(error);
      });

    //   alert(responseJson.message);
    // });
  };

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem("token");
      const value1 = await AsyncStorage.getItem("username");
      if (value && value1 !== null) {
        await this.setState({ token: value });
        await this.setState({ username: value1 });
      }
    } catch (e) {}

    this._onSubmit();
  }
  _checkbox = () => {
    return this.state.dataResponse.map((val, index) => {
      {
        tempCheckValues[val.participantID] = false;
      }
      console.log("val", val);

      return (
        <View key={val.participantID} style={{ flexDirection: "column" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontFamily: "Roboto", fontSize: 20 }}>
              {val.name}
            </Text>
            <CheckBox
              value={this.state.checkBoxChecked[val.participantID]}
              onValueChange={() =>
                this.checkBoxChanged(
                  val.participantID,
                  val.eventID,
                  this.state.checkBoxChecked[val.participantID],
                  index
                )
              }
            />
          </View>
        </View>
      );
    });
  };
  render() {
    if (
      this.state.dataResponse.length == 0 ||
      this.state.dataResponse.length === undefined
    ) {
      return (
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "Roboto",
              alignSelf: "center",
              opacity: 0.4
            }}
          >
            There are no participants
          </Text>
        </View>
      );
    } else {
      console.log("checkBoxChecked", this.state.checkBoxChecked);
      return (
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {this._onSubmit2()}}
            style={{
              width: "80%",
              height: "25%",
              alignSelf: "center",
              backgroundColor: "#4796ae"
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 24,
                fontFamily: "Roboto"
              }}
            >
              done
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: "80%",
              flexDirection: "column",
              alignSelf: "center",
              borderWidth: 1
            }}
          >
            {this.state.dataResponse != undefined && this._checkbox()}
          </View>
        </View>
      );
    }
  }
}
