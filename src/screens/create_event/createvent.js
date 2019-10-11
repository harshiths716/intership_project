import AsyncStorage from "@react-native-community/async-storage";
import imagepicker from 'react-native-image-picker'
import React, { Component } from "react";
import {
  View,
  StatusBar,
  TextInput,
  Animated,
  Picker,
  Button,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Apicall from "../networking/apicall";
import LogoTitle from "../reuseablecomponents/headerlogo";

import DateTimePicker from "react-native-modal-datetime-picker";
import FloatingLabelInput from "../reuseablecomponents/Floatinput";








emaildata=[{}]


export default class Createvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      token: "",
      chosenDate: "",
      StartTime: "",
      EndTime: "",
      selected: "",
      selectedtype: "Employee Engagement",
      selectedvenue: "NL:Main Building",
      isStartTimePickerVisible: false,
      isEndTimePickerVisible: false,
      istypepicker: true,
      isvenuepicker: true,
      ename: "",
      venue: "",
      capacity: "",
      otherinput:'',
      etype: "",
      desc: "",
      capacityValidate: true,
      value: "",
      isDateTimePickerVisible: false,
      image:'',
      iscapacity:false,
      // dataResponse:'',
    };
  }

  static navigationOptions = {
    title: " Create Event",
    headerLeft: <LogoTitle />,

    headerStyle: {
      backgroundColor: "white"
    },
    headerTintColor: "white",
    headerTitleStyle: {
      textAlign: "center",
      color: "black",
      fontFamily: "Roboto"
    }
  };

  validateit() {
    // if (this.state.ename == "") {
    //   alert("Please enter the  event name");
    // }
    // if (this.state.selectedvenue == "") {
    //   alert("Please enter the venue");
    // }
    // if (this.state.desc == "") {
    //   alert("Please enter the desc");
    // }
    // if (this.state.capacity == "") {
    //   alert("Please enter the capacity");
    // }
    // if (this.state.selectedtype == "") {
    //   alert("Please enter type of event");
    // }
    // if (this.state.StartTime == "") {
    //   alert("Please enter your password");
    // }
    // if (this.state.chosenDate == "") {
    //   alert("Please enter your password");
    // }
    // if (this.state.EndTime == "") {
    //   alert("Please enter your password");
    // }
  }

  onValueChangetype(value) {
    if(value == 'other')
    {
      this.setState({
        istypepicker: false
      });  
    }else{
    this.setState({
      selectedtype: value
    });
  }
  }

  onValueChangevenue(value) {
    if(value == 'other')
    {
      this.setState({
        isvenuepicker: false
      });  
    }else{
    this.setState({
      selectedvenue: value
    });
  }
  }

  onValueChangecapacity(value) {
    if(value == 'other')
    {
      this.setState({
        iscapacity: true
      });  
    }else{
    this.setState({
      iscapacity: value
    });
  }
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({ chosenDate: date.toISOString().substr(0, 10) });
    this.hideDateTimePicker();
  };

  showStartTimePicker = () => {
    this.setState({ isStartTimePickerVisible: true });
  };

  hideStartTimePicker = () => {
    this.setState({ isStartTimePickerVisible: false });
  };

  handleStartTimePicked = time => {
    this.setState({ StartTime: time.toTimeString().substr(0, 8) });
    this.hideStartTimePicker();
  };

  showEndTimePicker = () => {
    this.setState({ isEndTimePickerVisible: true });
  };

  hideEndTimePicker = () => {
    this.setState({ isEndTimePickerVisible: false });
  };

  handleEndTimePicked = time => {
    this.setState({ EndTime: time.toTimeString().substr(0, 8) });
    this.hideEndTimePicker();
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
  }


  list(text) {
    const newData = this.state.listHolder.filter(function (item) {
        const itemData = item.substring(0, item.indexOf("@")).toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
    });
    this.setState({ search: newData, email: text, });
    if (text == '') {
        this.setState({ search: '' })
    }
}


  _onSubmit = () => {
    if (
      this.state.ename &&
      this.state.selectedvenue &&
      this.state.EndTime &&
      this.state.StartTime &&
      this.state.capacity &&
      this.state.desc &&
      this.state.selectedtype &&
      this.state.chosenDate &&
      this.state.selectedvenue !== ""
    ) {
    //   body = {
    //     ename: this.state.ename,
    //     venue: this.state.selectedvenue,
    //     description: this.state.desc,
    //     capacity: this.state.capacity,
    //     organiser: this.state.username,
    //     typeofEvent: this.state.selectedtype,
    //     startTime: this.state.chosenDate + "T" + this.state.StartTime + "Z",
    //     endTime: this.state.chosenDate + "T" + this.state.EndTime + "Z"
    //   };
    //   endpoint = "newnotes";
    //   //  console.warn(body)
    //   Apicall(endpoint, body, this.state.token).then(responseJson => {
    //     this.setState({
    //       ename: null,
    //       selectedvenue: null,
    //       capacity: null,
    //       desc: null,
    //       selectedtype: null,
    //       chosenDate: null,
    //       StartTime: null,
    //       EndTime: null
    //     });
    //     alert(responseJson.message);
    //   });
    // } else {
    //   alert("fields not field");
     }
     this.props.navigation.navigate('todo')

  };

  typepicker = () => {
    return (
      <Picker
        note
        mode="dropdown"
        style={{ width: 250 }}
        selectedValue={this.state.selectedtype}
        onValueChange={this.onValueChangetype.bind(this)}
      >
        <Picker.Item label="Employee Engagement" value="Employee Engagement" />
        <Picker.Item label="Technical Training " value="Technical Training" />
        <Picker.Item label="Meeting" value="Meeting" />
        <Picker.Item label="Induction Program" value="Induction Program" />
        <Picker.Item label="HR Meet" value="HR Meet" />
        <Picker.Item label="other" value="other" />
      </Picker>
    );
  };

  venuepicker = () => {
    return (
      <Picker
        note
        mode="dropdown"
        style={{ width: 250 }}
        selectedValue={this.state.selectedvenue}
        onValueChange={this.onValueChangevenue.bind(this)}
      >
        <Picker.Item label="NL:Main Building" value="NL:Main Building" />
        <Picker.Item label="NL:Roush Building " value="NL:Roush Building" />
        <Picker.Item label="NL:SVC Building" value="NL:SVC Building" />
        <Picker.Item
          label="NL:Pasta Street Building"
          value="NL:Pasta Street Building"
        />
        <Picker.Item
          label="NL:Whitefield Building"
          value="NL:Whitefield Building"
        />
      <Picker.Item label="other" value="other" />

      </Picker>
    );
  };
capacitypicker=()=>{
  return (
  <View style={{flex:1,flexDirection:"row"}}>
    <Text style={{fontSize:18}}>capacity</Text>
    <Picker
      //label='capacity'
      mode="dropdown"
      style={{ width: 250 }}
      selectedValue={this.state.capacity}
      onValueChange={this.onValueChangecapacity.bind(this)}
    >

      <Picker.Item
        label="open"
        value="open"
      />
      <Picker.Item
        label="other"
        value="other"
      />

    </Picker>
    </View>
  );
}
  inputbox=(obj,obj2)=>{
    if(obj2=='type'){
    return(
      <FloatingLabelInput
      label = {obj}
      value={this.state.selectedtype}
      onChangeText={text =>{
        this.setState({
          selectedtype: text
        });      }}
       // this.setState({ capacity: text });

    />
    );
      }
      if(obj2=='venue'){
    return(
      <FloatingLabelInput
      label = {obj}
      value={this.state.selectedvenue}
      onChangeText={text =>{
        this.setState({
          selectedvenue: text
        });      }}
       // this.setState({ capacity: text });

    />
    );
  }
  if(obj2=='capacity'){
    return(
      <FloatingLabelInput
      label = {obj}
      value={this.state.capacity}
      onChangeText={text =>{
        this.setState({
          capacity: text
        });      }}
       // this.setState({ capacity: text });

    />
    );
  }
}
handleposter=()=>{
  imagepicker.showImagePicker({
    title: 'Upload Image',
    noData:true,

  }, response => {
    if (response.didCancel) {
      console.warn('Really ??')
    } else if (response.error) {
      console.warn(response.error)
    } else {

console.warn(response)
      // let source = { uri: response.uri };
      // this.setState({

      // //   imageSource: source,
      // //   issueimage: response.data,

      // // });

    }
  });

}


renderItem = ({item}) => {


  return (
    <ScrollView style={styles.container}>
      <View style={styles.bottomItem}>
        <TouchableOpacity style={styles.bottomItemInner}>
          <Text
            numberOfLines={1}
            style={{fontSize: 17, fontFamily: 'Roboto'}}>
            {item.eName}
          </Text>
          <Text
            style={{fontFamily: 'Roboto', fontSize: 17, color: '#ffffff'}}>
            {item.startTime.substr(0, 10)}
          </Text>
          <Text
            numberOfLines={1}
            style={{fontSize: 17, fontFamily: 'Roboto'}}>
            {item.venue}
          </Text>
          <Text
            numberOfLines={1}
            style={{color: 'white', fontSize: 14, fontFamily: 'Roboto'}}>
            {item.description}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

  render() {
    return (
      <View style={{ flex: 1, padding: 30, backgroundColor: "#f5fcff" }}>
        <ScrollView>
          <FloatingLabelInput
            label="Event Name"
            value={this.state.ename}
            onChangeText={text => {
              this.setState({ ename: text });
            }}
          />
          {/* <FloatingLabelInput
            label="Event Venue"
            value={this.state.venue}
            onChangeText={text => {
              this.setState({ venue: text });
            }}
          /> */}
          <FloatingLabelInput
            label="Event Description"
            value={this.state.desc}
            onChangeText={text => {
              this.setState({ desc: text });
            }}
          />
          <FloatingLabelInput
            label="Add organizers"
            value={this.state.capacity}
            onChangeText={text => {
              this.setState({ capacity: text });
            }}
          />
     <FlatList data={emaildata} renderItem={this.renderItem} />



{this.state.iscapacity ? this.inputbox('enter the capacity','capacity'): this.capacitypicker()}

{this.state.istypepicker ? this.typepicker() : this.inputbox('enter event type','type')}


{this.state.isvenuepicker ? this.venuepicker() : this.inputbox('enter event venue','venue')}

          <Button title="Show DatePicker" onPress={this.showDateTimePicker} />
          <DateTimePicker
            mode="date"
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
          <Text> {this.state.chosenDate}</Text>

          <Button title="Start Time" onPress={this.showStartTimePicker} />

          <DateTimePicker
            mode="time"
            // is24Hour={true}
            isVisible={this.state.isStartTimePickerVisible}
            onConfirm={this.handleStartTimePicked}
            onCancel={this.hideStartTimePicker}
          />
          <Text> {this.state.StartTime}</Text>
          <Button title="End Time" onPress={this.showEndTimePicker} />

          <DateTimePicker
            mode="time"
            // is24Hour={true}
            isVisible={this.state.isEndTimePickerVisible}
            onConfirm={this.handleEndTimePicked}
            onCancel={this.hideEndTimePicker}
          />
          <Text> {this.state.EndTime}</Text>

<Button title='choose poster' onPress={this.handleposter} />
 


          <TouchableOpacity
            style={{
              marginTop:'5%',
              alignSelf: "center",
              width: "150%",
              borderRadius: 5,
              backgroundColor: "#4287f5"
            }}
            onPress={() => this.validateit() || this._onSubmit()}
          >
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Roboto",
                alignSelf: "center",
                color: "white"
              }}
            >
              NEXT
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    height: 44,
    fontSize: 20,
    color: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#555"
  }
});

