import React, { Component, Fragment } from "react";
import {
  Alert,
  Button,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import FadeInView from "../reuseablecomponents/animation";
import moment from "moment";
import LogoTitle from "../reuseablecomponents/headerlogo";
import Apicall from "../networking/apicall";
export default class Usercalen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      isTimePickerVisible: false,
      date: "gggg",
      date1: "",
      dataResponse: "",
      date2: "",
      date3: "",
      token: "",
      time: "",
      startTime: "",
      endTime: ""
    };


    this.logout = this.logout.bind(this)
  }

 
  static navigationOptions = {
    // title: 'Center Title',
    title: "Events",
    // headerTitleStyle: {  textAlign:"center", flex:1 ,color:'black'},
    headerLeft: <LogoTitle />,
     headerRight: (


      <Button
      onPress={() => this.logout.bind(this)}
      title="Info"
      color="#fff"
    />

      //  <TouchableOpacity onPress={()=>this.logout()}>
      //    <Text>logout</Text>
      //  </TouchableOpacity>
     ),
    headerStyle: {
      backgroundColor: "white"
    },
    headerTintColor: "white",
    headerTitleStyle: {
      textAlign: "center",
      color: "black",
      // fontWeight: "bold",
      fontFamily: "Roboto"
    }
  };


  logout = async () => {
    console.warn("inside");
    try {
      await AsyncStorage.removeItem("token");
      this.props.navigation.navigate("login");
    } catch (exception) {
      return false;
    }
  };


  _onpress(obj) {
    console.warn(obj._id);

    this.props.navigation.navigate("detail", obj);
  }

  checkAge = () => {
    body = {
      startTime: this.state.date + "T00:00:00Z",
      endTime: this.state.date + "T23:59:00Z"
    };
    endpoint = "notes";

    if (this.state.date !== "gggg") {
      Apicall(endpoint, body, this.state.token).then(res => {
        this.setState({ dataResponse: res });
      });

      //
    } else {
      alert("no");
    }
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this._onpress(item);
        }}
        style={styles.container}
      >
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 17, color: "#ffffff" }}> {item.ename}</Text>
          <Text
            numberOfLines={1}
            style={{ color: "white", fontSize: 14, fontFamily: "Roboto" }}
          >
            {item.venue}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        await this.setState({ token: value });
      }
    } catch (e) {
    }
    var dddd = new Date();
    console.log("@new Date  ", dddd.toISOString().substr(0, 10));
   
    await this.setState({ date3: dddd.toISOString().substr(0, 10) });
    

    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    await this.setState({ time: time });
  }

  render() {
    console.disableYellowBox = true;
    const events = [
      {
        ename: "Event App launch",
        venue: " Masha Hall",
        description: "Event",
        totalseats: 5000,
        organiser: "Harshith S",
        date: "2019-10-02",
        time: "10:20:00"
      },
      {
        ename: "Event App launch",
        venue: " Masha Hall",
        description: "Event",
        totalseats: 5000,
        organiser: "Harshith S",
        date: "2019-10-02",
        time: "10:20:00"
      }
    ];
    console.log("date", this.state.date3);

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView>
          <Calendar
            // Initially visible month. Default = Date()
            current={this.state.date3}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={this.state.date3}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={"2020-01-01"}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={day => {
              this.setState({ date: day.dateString }, this.checkAge);
            }}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={day => {
              this.setState({ date1: day.dateString }, this.checkAge);
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={" MMM yyyy"}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            //onMonthChange = {(month) => {this.setState({month:month})}}
            // Hide month navigation arrows. Default = false
            hideArrows={false}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            //renderArrow = {(direction) => (<Arrow />)}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={false}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
            firstDay={1}
            // Hide day names. Default = false
            hideDayNames={false}
            // Show week numbers to the left. Default = false
            showWeekNumbers={true}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={substractMonth => substractMonth()}
            // Handler which gets executed when press arrow icon left. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            markedDates={{
              current: {
                selected: true,
                marked: true,
                selectedColor: "blue",
                dotColor: "blue"
              },
              "2019-08-31": { marked: true },
              "2019-08-31": { marked: true, dotColor: "red", activeOpacity: 0 },
              "2012-05-19": { disabled: true, disableTouchEvent: true }
            }}
          />
          <View>
            <FadeInView>
              <FlatList
                data={this.state.dataResponse}
                renderItem={this.renderItem}
              />
            </FadeInView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    width: "93%",
    backgroundColor: "rgba(0,0,0,0.3)",
   
    alignSelf: "center",
    borderRadius: 2,
    margin: 10
   
  },
  btn: {
    width: "95%",
    justifyContent: "center",
    borderRadius: 10

  },
  txt: {
    fontSize: 17,
    color: "#ffffff"
  
  }
});
