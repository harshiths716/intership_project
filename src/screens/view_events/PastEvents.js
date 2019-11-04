import React, { Component, Fragment } from "react";
import { StyleSheet, TouchableOpacity, Text, View, FlatList, Dimensions } from "react-native";
//import FadeInView from "./animation";
import { Switch, Image } from "react-native";
import LogoTitle from "../reuseablecomponents/headerlogo";
import moment from "moment";
import { ScrollView } from "react-native-gesture-handler";
import CountDown from 'react-native-countdown-component';
import AsyncStorage from "@react-native-community/async-storage";
import StarRating from 'react-native-star-rating';
 

const data = [
  {
    startTime: '345687',
    venue: 'park',
    description: 'play',
    ename: 'run',
    time: '2019:09-20T19:22:22:022Z',
   
  },
  
  {
    startTime: '345688',
    venue: 'park',
    description: 'play',
    ename: 'run',


  },
  {
    startTime: '345689',
    venue: 'park',
    description: 'play',
    ename: 'run',

  },
  {
    startTime: '345686',
    venue: 'park',
    description: 'play',
    ename: 'run',
   
  },


]

export default class PastEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      username: "",
      date: "",
      dataResponse: "",
      date3: "",
      date: '',
      date5: '',
      date8: '',
      daa: '',
      C: '',
      D: '',
      A: '',
      starCount:3,
    };
    // this.renderItem = this.renderItem.bind(this);
    // this.upevents = this.upevents.bind(this);
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

 
  renderItem = ({ item, index }) => {

   
    const { navigate } = this.props.navigation;
    

    return (
     
      
      
      
      <ScrollView style={styles.container}>

        <View

          style={styles.bottomItem}>
          <TouchableOpacity
            style={styles.bottomItemInner}
            onPress={() => {
              navigate("eventalter", item);
            }}
          >
            <Text
              style={{ fontFamily: "Roboto", fontSize: 17, color: "#ffffff" }}
            >

              {item.startTime}
            </Text>
            <Text numberOfLines={1} style={{ fontSize: 17, fontFamily: "Roboto" }}>
              {item.ename}
            </Text>
            <Text numberOfLines={1} style={{ fontSize: 17, fontFamily: "Roboto" }}>
              {item.venue}
            </Text>
            <Text
              numberOfLines={1}
              style={{ color: "white", fontSize: 14, fontFamily: "Roboto" }}
            >
              {item.description}
            </Text>


          </TouchableOpacity>

        </View>

      </ScrollView>
    );
  }


  _upcoming = () => {

    body = {
      participantID: this.state.username,
      date: this.state.date,
    }
    endpoint = "upcoming"


    Apicall(endpoint, body, this.state.token).then(responseJson => {
      this.setState({ dataResponse: responseJson });
    })

  }
  upevents = () => {
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
          data={data.slice(0, 3)}
          // style={styles.container}
          renderItem={this.renderItem}
        // numColumns={numColumns}
        />
      );
    }
  };

  componentDidMount() {
    //     var date = new Date().getDate();
    // var hours = new Date().getHours(); //Current Hours
    // var min = new Date().getMinutes(); //Current Minutes
    // var sec = new Date().getSeconds(); //Current Seconds
    //  await this.setState({date8:(hours*60*60) + (min*60) +sec});
    //  await this.setState({

    //     date:
    //       hours + ':' + min + ':' + sec,
    //   });


    const A = moment(data[0].time);
    var dateobj = new Date();

    // Contents of above date object is 
    // converted into a string using toISOString() function. 
    var B = dateobj.toISOString();
    // await this.setState({C:B});


    var diffInMinutes = A.diff(B, 'minutes');
    this.setState({ D: diffInMinutes });
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
 
  render() {
 
    return (

      <ScrollView style={styles.scrollView}>
        <View style={{ backgroundColor: "white" }}>
        <View>
          
    <Image
    style={styles.stretch}
    source={require('../resources/img.jpg')}
  />
  
</View>

          <View
            style={{
              // flexDirection: "row",
              //flexWrap}}: "wrap-reverse",
              alignSelf: "center"
            }}
          >

          </View>


          {this.upevents()}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              Current Date Time
        </Text>
            <Text
              style={{
                fontSize: 20,
                marginTop: 16,
              }}>: null
              {this.state.D}
            </Text>

          </View>

          <CountDown
            style={styles.count}
            until={2222222}
            onFinish={() => alert('finished')}
            onPress={() => alert('hello')}
            size={30}
          />



        </View>
        <View>
        <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
      </View>
      </ScrollView>
    );
  }
}


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
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  count:
    { flex: 3, },
  stretch: {
    width: 430,
    height: 300,
    resizeMode: 'center'
  },

  stretch: {
    width: 430,
    height: 200,
    resizeMode: 'stretch'
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


