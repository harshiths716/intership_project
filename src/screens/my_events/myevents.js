import React from "react";
import { StyleSheet, TouchableOpacity,Text, View, FlatList, Dimensions } from "react-native";
//import FadeInView from "./animation";
import { Switch } from "react-native";
import LogoTitle from "../reuseablecomponents/headerlogo";
import moment from "moment";
//import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import Apicall from "../networking/apicall";

const numColumns = 2;
export default class Myevents extends React.Component {
  state = {
    switchValue: false,
    token: "",
    username: "",
    dataResponse: ""
  };

  static navigationOptions = {
    
     title: 'My events',
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
       textAlign:'center',
       color:'black',
      // fontWeight: "bold",
       fontFamily: "Roboto"
     }
   };

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
    //state changes according to switch
    if (value == true) {
      this.truecall();
    } else {
      this.falsecall();
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

  truecall = () => {
    this._enroll();
  };
  falsecall = () => {
    this._onSubmit();
  };

  //////////////edit this for enrolled events

  renderItem = ({ item, index }) => {
    console.warn(item);
    const { navigate } = this.props.navigation;
    if (item.eventID) {
      return (
        <View style={styles.bottomItem}>
          <TouchableOpacity
            style={styles.bottomItemInner}
            onPress={() => {
              navigate("eventalter", item);
            }}
          >
            <Text
              style={{ fontFamily: "Roboto", fontSize: 17, color: "#ffffff" }}
            >
              {this.datetime(item.events.startTime)}
            </Text>
            <Text  numberOfLines={1} style={{ fontSize: 17, fontFamily: "Roboto" }}>
              {item.events.ename}
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
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.bottomItem}>
          <TouchableOpacity
            style={styles.bottomItemInner}
            onPress={() => {
              navigate("eventalter", item);
            }}
          >
            <Text
              style={{ fontFamily: "Roboto", fontSize: 17, color: "#ffffff" }}
            >
              {this.datetime(item.startTime)}
            </Text>
            <Text style={{ fontSize: 17, fontFamily: "Roboto" }}>
              {this.year(item.endTime)}
            </Text>
            <Text numberOfLines={1} style={{ fontSize: 17, fontFamily: "Roboto" }}>
              {item.ename}
            </Text>
            <Text
              numberOfLines={1}
              style={{ color: "white", fontSize: 14, fontFamily: "Roboto" }}
            >
              {item.description}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  _onSubmit = () => {




    body={
      userID: this.state.username
    }
    endpoint="organisedEvents"

    
     Apicall(endpoint,body,this.state.token).then(responseJson => {
      this.setState({ dataResponse: responseJson });
    })

    // //console.warn('sad',this.state.token)
    // return fetch("http://192.168.1.151:8000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + this.state.token
    //   },
    //   body: JSON.stringify()
    // })
    //   .then(response => response.json())
    //   .then(responseText => {
    //     this.setState({ dataResponse: responseText });
    //     // console.log('response',responseText )
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };

  _enroll = () => {

    body={
      participantID: this.state.username
    }
    endpoint="eventenrolled"

    
     Apicall(endpoint,body,this.state.token).then(responseJson => {
      this.setState({ dataResponse: responseJson });
    })
    //console.warn('sad',this.state.token)
    // return fetch("http://192.168.1.151:8000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + this.state.token
    //   },
    //   body: JSON.stringify()
    // })
    //   .then(response => response.json())
    //   .then(responseText => {
    //     this.setState({ dataResponse: responseText });

    //     console.log("response12 enroll", responseText);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };
  noevents = () => {
    if (this.state.dataResponse.result) {
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
      return (
        <FlatList
          // numColumns={3}
          data={this.state.dataResponse}
         // style={styles.container}
          renderItem={this.renderItem}
          numColumns={numColumns}
        />
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
        //   console.log(value)
      }
    } catch (e) {
      // error reading value
    }
    this._onSubmit();
  }

  render() {
    //  console.warn(data.users[0].name)
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
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
  bottomItem: {
    width: "47%",
    height: "85%",
    //padding: 5,
    // borderWidth:1,
    margin: 5

    //width: "93%",
    // backgroundColor: 'rgba(0,0,0,0.5)',
    //height:'60%',
    //padding:80,
    //  alignSelf: "center",
    //  borderRadius: 40,
    // marginTop: 20,
    //  margin: 10,
  },
  bottomItemInner: {
    // flex: 1,
    backgroundColor: "#4796ae",
    //  width:'50%',
  //  height: "200%",
    padding: 5,
    borderRadius: 10,
  }
});
