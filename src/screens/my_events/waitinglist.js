import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
  FlatList
} from "react-native";
import LogoTitle from "../reuseablecomponents/headerlogo";
import Apicall from "../networking/apicall";



export default class Waiting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.navigation.state.params,
      dataResponse: [],
      token: "",
      username: ""
    };
  }
  static navigationOptions = {
    title: "events",
    headerTitle: <LogoTitle />,
    headerStyle: {
      backgroundColor: "white"
    },
    headerTintColor: "black",
    headerTitleStyle: {
      fontWeight: "bold",
      fontFamily: "Product Sans"
    }
  };

  waitinglist =  () => {



    body = {
      eventID: this.state.item._id
    };
    endpoint = "waitinglist";
    Apicall(endpoint, body, this.state.token).then(responseJson => {
      this.setState({ dataResponse: responseJson });
      //this.waitinglist()
    });
  };

  waitingApprove = (val) => {



    body = {
      userID: this.state.username,
      eventID: val.eventID,
      participantID:val.participantID
    };
    endpoint = "waitingApprove";
    Apicall(endpoint, body, this.state.token).then(responseJson => {
      alert(responseJson.accepted)
      this.waitinglist()
    });

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
    this.waitinglist()
  }


  ren=()=>{
return  this.state.dataResponse.map((val,index) => {
  return (
      <View style={styles.container}>
        <Text style={styles.txt}>{val.users.name}</Text>
        <TouchableOpacity style={styles.image} onPress={()=>this.waitingApprove(val)}>
        <Image  source={require("../../resources/tick.png")} />
        </TouchableOpacity>
      </View>
  );
});
  }
  render() {
    console.warn('waitinglist',this.state.item )

    if(this.state.dataResponse.length==0)
    {
      return(
        <View  style={{flex:1}}>
          <Text style={{fontSize:24,fontFamily:'Roboto',alignSelf:'center',opacity:0.4}}>There are no requests</Text>
        </View>
      )
    }
return(
  <View style={{ flex: 1, alignSelf: "center" }}>
{this.ren()}
</View>

);
 
     
  
  }
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "8%",
    flexDirection: "row",
    borderRadius: 3,

    elevation: 2
  },
  txt: {
    width:'30%',
    marginLeft: 30,
    fontSize: 28,
    marginRight: 180,
    fontFamily: "Roboto",
    opacity: 0.3
  },
  image: {
    elevation: 7,
    width: "8%",
    height: "50%",
    marginTop: 10,
    marginRight: 30
  }
});
