import AsyncStorage from '@react-native-community/async-storage';
import imagepicker from 'react-native-image-picker';
import React, {Component} from 'react';
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
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Apicall from '../networking/apicall';
import LogoTitle from '../reuseablecomponents/headerlogo';
import DateTimePicker from '@react-native-community/datetimepicker';
// import DateTimePicker from 'react-native-modal-datetime-picker';
import FloatingLabelInput from '../reuseablecomponents/Floatinput';

import {connect} from 'react-redux';

import {
  sendUserDetails,
  create_event,
} from '../../../app/Actions/create_event_action';
import { State } from 'react-native-gesture-handler';

var iddata = [];
var idarray = [];
var count =''
class Createvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      token: '',
      userdata: '',
      chosenDate: '',
      StartTime: '',
      EndTime: '',
      selected: '',
      selectedtype: 'Employee Engagement',
      selectedvenue: 'NL:Main Building',
      isStartTimePickerVisible: false,
      isEndTimePickerVisible: false,
      istypepicker: true,
      isvenuepicker: true,
      ename: '',
      venue: '',
      capacity: 0,
      otherinput: '',
      etype: '',
      desc: '',
      capacityValidate: true,
      value: '',
      isDateTimePickerVisible: false,
      image: '',
      iscapacity: false,
      listHolder: '',
      search: '',
      idarray:[],
      // dataResponse:'',
      //id:[]
      show: false,
      mode: 'date',
      date: new Date(),
      start:new Date('2020-06-12T14:42:42'),
      end: new Date('2020-06-12T14:42:42'),
    };
  }

  static navigationOptions = {
    title: ' Create Event',
    headerLeft: <LogoTitle />,

    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      textAlign: 'center',
      color: 'black',
      fontFamily: 'Roboto',
    },
  };

  onValueChangetype(value) {
    if (value == 'other') {
      this.setState({
        istypepicker: false,
      });
    } else {
      this.setState({
        selectedtype: value,
      });
    }
  }

  onValueChangevenue(value) {
    if (value == 'other') {
      this.setState({
        isvenuepicker: false,
      });
    } else {
      this.setState({
        selectedvenue: value,
      });
    }
  }

  onValueChangecapacity(value) {
    if (value == 'other') {
      this.setState({
        iscapacity: true,
      });
    } else {
      this.setState({
        iscapacity: value,
      });
    }
  }

  setDate = (event, date, v) => {
    if (event.type == 'set') {
      if (this.state.mode === 'time') {
        let dat = new Date(
          this.state[v].toISOString().substr(0, 11) +
            date.toISOString().substr(11),
        );
      
        this.setState(
          {
            [v]: dat,
            mode: 'date',
            show: !this.state.show,
          },
          () => console.log(v + ' ' + this.state[v]),
        );
      } else {
     
        this.setState({
          [v]: date,
          mode: 'time',
        });
      }
    } else {
      this.setState({
        show: false,
      });
    }
  };
  _show = variable => {
    this.setState({
      show: !this.state.show,
      type: variable,
    });
  };

  async componentDidMount() {
    try {
      value = await AsyncStorage.getItem('userdata');
      count = JSON.parse(value);
   
      this.setState({userdata: count});
    } catch (e) {
  
    }

    this.props.sendUserDetails(count);
  }

  list(text) {
    const newData = this.props.userdetails.filter(function(item) {
      const itemData = item.email.substring(0, item.email.indexOf('@')).toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1 && item.desgs.isOrganiser ===true;
    });
    this.setState({listHolder:newData,search:text});
    if (text == '') {
      this.setState({listHolder: ''});
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
      this.state.selectedvenue !== ''
    ) {
     
    }

  };

  typepicker = () => {
    return (
      <Picker
        note
        mode="dropdown"
        style={{width: 250}}
        selectedValue={this.state.selectedtype}
        onValueChange={this.onValueChangetype.bind(this)}>
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
        style={{width: 250}}
        selectedValue={this.state.selectedvenue}
        onValueChange={this.onValueChangevenue.bind(this)}>
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
  capacitypicker = () => {
    return (
      <View style={{flex: 1, flexDirection: 'row',position:'relative',top:27}}>
        <Text style={{fontSize: 18,position:'relative',top:10}}>capacity</Text>
        <Picker
          //label='capacity'
          mode="dropdown"
          style={{width: 250}}
          selectedValue={this.state.capacity}
          onValueChange={this.onValueChangecapacity.bind(this)}>
          <Picker.Item label="open" value="open" />
          <Picker.Item label="other" value="other" />
        </Picker>
      </View>
    );
  };
  inputbox = (obj, obj2) => {
    if (obj2 == 'type') {
      return (
        <FloatingLabelInput
          label={obj}
          value={this.state.selectedtype}
          onChangeText={text => {
            this.setState({
              selectedtype: text,
            });
          }}
          // this.setState({ capacity: text });
        />
      );
    }
    if (obj2 == 'venue') {
      return (
        <FloatingLabelInput
          label={obj}
          value={this.state.selectedvenue}
          onChangeText={text => {
            this.setState({
              selectedvenue: text,
            });
          }}
          // this.setState({ capacity: text });
        />
      );
    }
    if (obj2 == 'capacity') {
      return (
        <FloatingLabelInput
          label={obj}
          value={this.state.capacity}
          onChangeText={text => {
            this.setState({
              capacity: text,
            });
          }}
          // this.setState({ capacity: text });
        />
      );
    }
  };
  handleposter = () => {
    imagepicker.showImagePicker(
      {
        title: 'Upload Image',
        // noData: true,
      },
      response => {
        if (response.didCancel) {
       
        } else if (response.error) {
      
        } else {
          this.setState({});
        }
      },
    );
  };

  addname = (id, email) => {
    iddata.push({id: id, email: email});
    idarray.push(id);
    this.setState({idarray: iddata});

  };
  renderItem = ({item}) => {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.bottomItem}>
          <TouchableOpacity
            style={styles.bottomItemInner}
            onPress={() => this.addname(item._id, item.email)}>
            <Text
              numberOfLines={1}
              style={{fontSize: 17, fontFamily: 'Roboto'}}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  renderItem1 = ({item}) => {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.bottomItem}>
          <TouchableOpacity
            style={styles.bottomItemInner}
            //  onPress={() => this.addname(item._id, item.email)}
          >
            <Text
              numberOfLines={1}
              style={{fontSize: 17, fontFamily: 'Roboto'}}>
              {item.email}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  apihit = () => {
idarray.unshift(this.state.userdata.UserID)
    body = {
      eName: this.state.ename,
      venue: this.state.selectedvenue,
      description: this.state.desc,
      isOpen: !this.state.iscapacity,
      capacity: this.state.capacity,
      startTime: this.state.start,
      endTime: this.state.end,
      createdBy: this.state.userdata.UserID,
      organisers: idarray,
      token: this.state.userdata.token

    };
 //   this.props.create_event(body);
    this.props.navigation.navigate('todo');

  };

  render() {

    const {show, mode, date} = this.state;
    return (
      <View style={{flex: 1, padding: 30, backgroundColor: '#f5fcff'}}>
        <ScrollView>
          <FloatingLabelInput
            label="Event Name"
            value={this.state.ename}
            onChangeText={text => {
              this.setState({ename: text});
            }}
          />

          <FloatingLabelInput
            label="Event Description"
            value={this.state.desc}
            onChangeText={text => {
              this.setState({desc: text});
            }}
          />
          <View style={{flex: 1}}>
            {this.state.idarray != null &&
              this.state.idarray.map(item => (
                <Text key={item._id} style={{color: 'blue'}}>
                  {item.email}
                </Text>
              ))}
          </View>
          <FloatingLabelInput
            label="Add organizers"
            value={this.state.search}
            onChangeText={text => {
              this.list(text);
            }}
          />
          <FlatList data={this.state.listHolder} renderItem={this.renderItem} />

          {this.state.iscapacity
            ? this.inputbox('enter the capacity', 'capacity')
            : this.capacitypicker()}


          {this.state.isvenuepicker
            ? this.venuepicker()
            : this.inputbox('enter event venue', 'venue')}

          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              is24Hour={false}
              display="default"
              minimumDate={date}
              onChange={(e, d) => this.setDate(e, d, this.state.type)}
            />
          )}
         {/* <Text>{this.state.start!=typeof([]) ? this.state.start:null }</Text>  */}
          <Button
            title="Please select start time"
            onPress={() => this._show('start')}
          />
         {/* <Text>{this.state.end }</Text>  */}

          <Button
            title="Please select end time"
            onPress={() => this._show('end')}
          />

          {/* <Button title="choose poster" onPress={this.handleposter} /> */}

          <TouchableOpacity
            style={{
              marginTop: '5%',
              alignSelf: 'center',
              width: '150%',
              borderRadius: 5,
              backgroundColor: '#4287f5',
            }}
            onPress={() =>this.apihit()}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'Roboto',
                alignSelf: 'center',
                color: 'white',
              }}>
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
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
});

const mapStateToProps = state => ({
  userdetails: state.CreateEvent.userdetails,
  createEventid:state.CreateEvent.createEventid
});

const mapDispatchToProps = dispatch => ({
  sendUserDetails: data => dispatch(sendUserDetails(data)),
  create_event: data => dispatch(create_event(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Createvent);
