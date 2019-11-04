import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import LogoTitle from "../reuseablecomponents/headerlogo";

import moment from "moment";
//import { Icon } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";
import Apicall from "../networking/apicall";

export default class Eventalter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.navigation.state.params,
      token: "",
      username: ""
    };
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

  withdraw = () => {
    body = {
      participantID: this.state.username,
      eventID: this.state.item.events._id
    };
    endpoint = "withdraw";

    Apicall(endpoint, body, this.state.token).then(responseJson => {
      alert(responseJson);
    });
  };

  cancel = () => {
    body = {
      organiser: this.state.username,
      eventID: this.state.item._id
    };
    endpoint = "cancel";

    Apicall(endpoint, body, this.state.token).then(responseJson => {
      alert(responseJson.message);
    });
  };

  twotypes = () => {
    if (this.state.item.eventID) {
      return (
        <View>
          <Text
            style={{ fontSize: 30, fontFamily: "Roboto", paddingLeft: "5%" }}
          >
            {" "}
            {this.state.item.events.ename}
          </Text>
          <Text
            style={styles.item2}
          >
            {this.datetime(this.state.item.events.startTime)}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={styles.item}
            >
              venue:{this.state.item.events.venue}
            </Text>
          </View>

          <Text
            style={styles.item}
          >
            
            {this.state.item.events.description}
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text
            style={{ fontSize: 30, fontFamily: "Roboto", paddingLeft: "5%" }}
          >
           
            {this.state.item.ename}
          </Text>
          <Text
            style={styles.item2}
          >
            {this.datetime(this.state.item.startTime)}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={styles.item}
            >
              venue:{this.state.item.venue}
            </Text>
            <Text
              style={styles.item}
            >
              |
            </Text>
            <Text
              style={styles.item}
            >
              seats: {this.state.item.capacity}
            </Text>
          </View>

          <Text
            style={styles.item}
          >
            {" "}
            {this.state.item.description}
          </Text>
        
        </View>
      );
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
    }
  }

  datetime = e => {
    var dateTime = moment(e, moment.ISO_8601, true).format("MMM DD");

    return dateTime;
  };

  year = e => {
    var y = moment(e, moment.ISO_8601, true).format("YYYY");
    return y;
  };

  user = () => {
    return (
      <View style={styles.bottom}>
        <View style={styles.bottomItem}>
          <TouchableOpacity
            style={[
              styles.bottomItemInner,
              {
                alignSelf: "center",
                width: "100%",
                marginLeft: 200,
                borderRadius: 8
              }
            ]}
            onPress={() => this.withdraw()}
          >
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Roboto",
                alignSelf: "center",
                color: "white"
              }}
            >
              Withdraw
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  organiser = () => {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.bottom}>
        <View style={styles.bottomItem}>
          <TouchableOpacity
            style={styles.bottomItemInner}
            onPress={() => this.cancel()}
          >
            <Text
              style={styles.txt}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomItem}>
          <TouchableOpacity
            style={styles.bottomItemInner}
            onPress={() =>
              this.props.navigation.navigate("attend", this.state.item)
            }
          >
            <Text
              style={styles.txt}
            >
              Attendence
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.bottomItem]}>
          <TouchableOpacity
            style={[
              styles.bottomItemInner,
              {
                alignSelf: "center",
                width: "100%",
                marginLeft: 200,
                borderRadius: 8
              }
            ]}
            onPress={() =>
              this.props.navigation.navigate("wait", this.state.item)
            }
          >
            <Text
              style={styles.txt}
            >
              Waiting list
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  selector = () => {
    if (this.state.item.organiser == this.state.username) {
      return this.organiser();
    } else {
      return this.user();
    }
  };

  render() {
 

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: "white" }}>
          {this.twotypes()}
        </ScrollView>

        {this.selector()}
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
