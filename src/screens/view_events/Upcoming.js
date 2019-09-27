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
import Apicall from '../networking/apicall2';
import { connect } from 'react-redux';
// data=[ { _id: '5d8bd664826c65560c243366',
//  eName: 'Hackathon 2k19',
//   venue: 'Pasta Street, Koramangala',
//   description: '4th year of Hackathon Event',
//   isOpen: true,
//   msgs: ' ',
//   startTime: '2019-10-10T09:30:00.000Z',
//   endTime: '2019-10-10T09:30:00.000Z',
//   __v: 0 },
//   { _id: '5d8bd94711c20f5994e1b051',
//   eName: 'World\'s Men\'s Day',
//   venue: 'Pasta Street, Koramangala',
//   description: 'Celebrating and Appreciating the Men\'s for being the strong pillar',
//   isOpen: true,
//   msgs: ' ',
//   startTime: '2019-10-15T09:30:00.000Z',
//   endTime: '2019-10-15T09:30:00.000Z',
//   __v: 0 } ]
class Upcoming extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      username: "",
      date: "",
      dataResponse: [],
      date3: "",
      date: '',
      date5: '',
      date8: '',
      daa: '',
      data: [],
      C: '',
      D: '',
      A: '',
      
      // starCount:3,
    };
    //this.renderItem = this.renderItem.bind(this);
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


  renderItem = ({ item }) => {

    // console.warn(item);
    //const { navigate } = this.props.navigation;


    return (



      <ScrollView style={styles.container}>

        <View style={styles.bottomItem}>
          <TouchableOpacity
            style={styles.bottomItemInner}
          >

            <Text numberOfLines={1} style={{ fontSize: 17, fontFamily: "Roboto" }}>
              {item.eName}
            </Text>
            <Text style={{ fontFamily: "Roboto", fontSize: 17, color: "#ffffff" }}>

              {item.startTime.substr(0, 10)}
            </Text>
            <Text numberOfLines={1} style={{ fontSize: 17, fontFamily: "Roboto" }}>
              {item.venue}
            </Text>
            <Text
              numberOfLines={1}
              style={{ color: "white", fontSize: 14, fontFamily: "Roboto" }}
            >
              {item.description}
            </Text>
        </TouchableOpacity>

        </View>

      </ScrollView>

    );
  }


  // _upcoming = () => {

  //   // body = {
  //   //   participantID: this.state.eventID,
  //   //   // date: this.state.date,
  //   // }
  //   endpoint = "/events/upcoming"


  //   Apicall(endpoint, this.state.token).then(responseJson => {
  //     this.setState({ dataResponse: responseJson });
  //   })

  // }


  upevents = () => {
    if (this.props.upcoming.result) {
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
          data={this.props.upcoming}
          renderItem={this.renderItem}

        />
      );
    }
  };

  // componentDidMount() {
  //   //     var date = new Date().getDate();
  //   // var hours = new Date().getHours(); //Current Hours
  //   // var min = new Date().getMinutes(); //Current Minutes
  //   // var sec = new Date().getSeconds(); //Current Seconds
  //   //  await this.setState({date8:(hours*60*60) + (min*60) +sec});
  //   //  await this.setState({

  //   //     date:
  //   //       hours + ':' + min + ':' + sec,
  //   //   });


  // //   const A = moment(data[0].time);
  // //   var dateobj = new Date();

  // //   // Contents of above date object is 
  // //   // converted into a string using toISOString() function. 
  // //   var B = dateobj.toISOString();
  // //   // await this.setState({C:B});


  // //   var diffInMinutes = A.diff(B, 'minutes');
  // //   this.setState({ D: diffInMinutes });
  // }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  //asmitha1@nineleaps.com
  //password123

  // upcomcall = async () => {





  // //    await Apicall().then(res => {
  // //       this.setState({ dataResponse: res });
  // //     });

  // // console.warn(this.state.dataResponse)
  // };

  componentDidMount() {
    this.props.sendUpcoming(data_data)
  }

  componentDidUpdate() {
    console.warn('update', JSON.stringify(this.props.upcoming))
  }

  render() {


    var dddd = new Date();
    //   //  console.warn("@new Date  ", dddd.toISOString());
    let date = dddd.toISOString()
    //  //   await this.setState({ date3: dddd.toISOString().substr(0, 10) });

    //     endpoint = "events/upcoming"+"/"+date;
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiNWQ4YjBhNzVlY2E2ZTkzZmJkZGFlMzI1IEFzbWl0aGEgUyBhc21pdGhhMUBuaW5lbGVhcHMuY29tIiwiaWF0IjoxNTY5NDkxODU2LCJleHAiOjE1NzIwODM4NTZ9.0zNP_EycHuPdJ2YbJLcxMlGJxtgKzXOcNM5PYgy37JE"

    data_data = { date: date, token: token }

    //  console.warn(data.users[0].name)
    return (

      <ScrollView style={styles.scrollView}>
        <View style={{ backgroundColor: "white" }}>
          <View>

            <Image
              style={styles.stretch}
              source={require('../resources/img.jpg')}
            />

          </View>
          {this.upevents()}


          <CountDown
            style={styles.count}
            until={2222222}
            onFinish={() => alert('finished')}
            onPress={() => alert('hello')}
            size={30}
          />



        </View>
        {/* <View>
        <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
      </View> */}
      </ScrollView>
    );
  }
}


import { SEND_UPCOMING, RECEIVE_UPCOMING } from '../../../app/Actions/upcoming'
const mapStateToProps = (state) => ({
  upcoming: state.TextChanger.upcoming,

});

const mapDispatchToProps = (dispatch) => ({
  sendUpcoming: (data) => dispatch(send_Upcoming(data)),
  //sendUpcoming:()=>dispatch({type:SEND_UPCOMING}),
  //  typeusername: (val) => dispatch({type:TYPE_USERNAME,payload:val}),
  //  typepassword: (val) => dispatch({type:TYPE_PASSWORD,payload:val}),
  //  sign_in:(userdata)=>dispatch(sign(userdata)),
  // navigate:()=>this.props.navigation.navigate('User')
});

//login_api_hit=(val)=>dispatch({type:RECEIVE_LOGIN_API,payload:val})

function send_Upcoming(data) {
  console.warn('inside send func')
  return { type: SEND_UPCOMING, payload: data }
}



export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);




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

  count:
  {
    flexDirection: 'column-reverse'


  },
  bottomItem: {
    width: "100%",
    padding: '2%'
  },
  bottomItemInner: {
    backgroundColor: "#4796ae",
    padding: 5,
    borderRadius: 7,
  },
  ScrollView:
  {
    backgroundColor: 'red',
    marginHorizontal: 30,
  },



});

