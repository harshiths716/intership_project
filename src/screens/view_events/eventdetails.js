import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Button
} from "react-native";
import LogoTitle from "../reuseablecomponents/headerlogo";
import Apicall from "../networking/apicall";

// import Blur from "./blurtest_remove";
import moment from "moment";
import AsyncStorage from "@react-native-community/async-storage";

export default class Eventdetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      username: "",
      parm: this.props.navigation.state.params
    };

    // this.setState({parm : [this.props.navigation.state.params]});
  }

  static navigationOptions = {
   
    headerStyle: {
      backgroundColor: "white"
    },
    headerTitle: <LogoTitle />,

   
    headerTintColor: "black",
    headerTitleStyle: {
      fontWeight: "bold",
      fontFamily: "Roboto"
    }
  };
  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem("token");
      const value1 = await AsyncStorage.getItem("username");
      if (value && value1 !== null) {
        await this.setState({ token: value });
        await this.setState({ username: value1 });
        
      }
    } catch (e) {
      // error reading value
    }
  }

  on_Submit = () => {


    body = {
      eventID: this.state.parm._id,
      participantID: this.state.username
    }
    endpoint = "joinevent";
    Apicall(endpoint, body, this.state.token).then(responseJson => {
      this.setState({ dataResponse: responseJson });
   
        if (responseJson.message) {
          alert(responseJson.message);
        } else {
          alert(responseJson.message);
        }
    });



  };
  datetime =( e) => {
    var dateTime = moment(e, moment.ISO_8601, true).format("MMM DD HH");

    return dateTime;
  };

  year = (e) => {
    var y = moment(e, moment.ISO_8601, true).format("YYYY");
    return y;
  };
  render() {
    item = this.state.parm
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: "white" }}>
       
              <View>
                <Text style={{fontSize: 30,fontFamily: "Roboto",paddingLeft: "5%"}}>{item.ename} </Text>
                <Text style={{fontSize: 20,fontFamily: "Roboto",paddingTop: "2%",paddingLeft: "5%",color: "#4d4f49"}}>
                  start:{this.datetime(item.startTime)}|end:{this.datetime(item.endTime)}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "Roboto",
                      paddingTop: "4%",
                      paddingLeft: "5%",
                      color: "#4d4f49"
                    }}
                  >
                    venue:{item.venue}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "Roboto",
                      paddingTop: "4%",
                      paddingLeft: "5%",
                      color: "#4d4f49"
                    }}
                  >
                    |
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "Roboto",
                      paddingTop: "4%",
                      paddingLeft: "5%",
                      color: "#4d4f49"
                    }}
                  >
                    seats: {item.capacity}
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Roboto",
                    paddingTop: "4%",
                    paddingLeft: "5%",
                    color: "#4d4f49"
                  }}
                >
                  {" "}
                  {item.time}
                </Text>

                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Roboto",
                    paddingTop: "4%",
                    paddingLeft: "5%",
                    color: "#4d4f49"
                  }}
                >
                  {" "}
                  {item.description}
                </Text>
               
              </View>
      
        </ScrollView>
        <View style={{ backgroundColor: "#4796ae", height: "8%" }}>
          <TouchableOpacity style={styles.button} onPress={this.on_Submit}>
            <Text
              style={{ fontSize: 29, color: "white", fontFamily: "Roboto" }}
            >
              Join event ->
            </Text>
          </TouchableOpacity>
        </View>
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
    // paddingTop: 50,
  },
  txt: {
    fontSize: 24,
    color: "white",
    backgroundColor: "#185b6e",
    padding: 7,
    width: 340,
    paddingLeft: 17,
    // paddingBottom:70,
    paddingRight: 17,
    borderRadius: 5,
    marginTop: 20
  },
  button: {
    //backgroundColor: "#212121",
    alignSelf: "center"
 
  },
  green: {
    fontSize: 20,
    color: "green"
  }
});
