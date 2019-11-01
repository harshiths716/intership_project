import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  TextInput,Button,KeyboardAvoidingView
} from 'react-native';
import {Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FloatingLabelInput from '../reuseablecomponents/Floatinput';
import DateTimePicker from 'react-native-modal-datetime-picker';



// data={
	
//   "eventId": "5da58abe3417b9618f478ba4",
  
//   "createdBy": "5d8b0a75eca6e93fbddae325",
    
//                     "eventTasks" : [{
//                           "tName": "Catering",

//                           "description": "Look after catering services with upmost care",

//                           "ownership": "5d8b7f59ff455232d8307258",

//                           "budget": 12000,
                          
//                           "deadline":"2019-11-09T04:00:00.000Z"
//                           },
//                           {
//                           "tName": "Decoration",

//                           "description": "In charge for Decoration of dias and Rooms",

//                           "ownership": "5d8b7f84ff455232d830725a",

//                           "budget": 9000,
                          
//                           "deadline":"2019-11-10T04:00:00.000Z"
//                           },
//                           {
//                           "tName": "Invitations and Posters",

//                           "description": "Create Posters and Invitations",

//                           "ownership": "5d8b7fa3ff455232d830725b",

//                           "budget": 2000,
                          
//                           "deadline":"2019-11-09T04:00:00.000Z"
//                           }
//                           ]


// }


export default class Edittask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      visible: false,
      eventID: '',
      flag: true,
      // task_id: JSON.stringify(this.props.navigation.getParam('task_id', 'NO-ID')),
      // task: JSON.stringify(this.props.navigation.getParam('task', 0)),
      // subtask: JSON.stringify(this.props.navigation.getParam('subtask', 0)),
      // eventname: JSON.stringify(this.props.navigation.getParam('eventname', 0)),
      data: this.props.navigation.state.params,
    };
  }


  showStartTimePicker = () => {
    this.setState({isStartTimePickerVisible: true});
  };

  hideStartTimePicker = () => {
    this.setState({isStartTimePickerVisible: false});
  };

  handleStartTimePicked = time => {
    this.setState({StartTime: time.toTimeString().substr(0, 8)});
    //this.props.adddeadline( time.toTimeString().substr(0, 8))
    this.hideStartTimePicker();
  };


  render() {
  // console.warn(this.state.data.subtask);
    return (
      <View style={{flex: 1, padding: '5%'}}>
        <KeyboardAvoidingView behavior="padding">
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 24}} numberOfLines={1}>
              Task Name:{this.state.data.text}
            </Text>
          </View>

          <TouchableOpacity
            style={{backgroundColor: 'black', width: '20%', height: '10%'}}
            onPress={() => this.sendtask()}>
            <Text style={{color: 'white', alignSelf: 'center', fontSize: 24}}>
              Done
            </Text>
          </TouchableOpacity>

          {this.state.idarray != null &&
            this.state.idarray.map(item => (
              <Text key={item._id} style={{color: 'blue'}}>
                {item.email}
              </Text>
            ))}

          <FloatingLabelInput
            label="Add organizers"
            value={this.state.search}
            onChangeText={text => {
              this.list(text);
            }}
          />
          {/* <View style={{flex:1}}> */}
          <FlatList data={this.state.listHolder} renderItem={this.renderItem} />
          {/* </View> */}

          <DateTimePicker
            mode="time"
            // is24Hour={true}
            isVisible={this.state.isStartTimePickerVisible}
            onConfirm={this.handleStartTimePicked}
            onCancel={this.hideStartTimePicker}
          />
          <Text> {this.state.StartTime}</Text>
          <Button title=" Select Deadline" onPress={this.showStartTimePicker} />

          <FloatingLabelInput
            label={'Add Description'}
            value={this.state.desc}
            onChangeText={text => this.setState({desc: text})}
          />

          <FloatingLabelInput
            label={'Add Budget'}
            value={this.state.budget}
            onChangeText={text => this.setState({budget: text})}
          />
          {
            //   console.warn('lala',this.state.data)
            /* // {this.addsubtask()}
// {this.subtask()} */
          }
        </KeyboardAvoidingView>
      </View>
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
    // backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  count: {flex: 3},
  stretch: {
    width: 430,
    height: 300,
    resizeMode: 'center',
  },

  stretch: {
    width: 430,
    height: 200,
    resizeMode: 'stretch',
  },

  container: {
    flex: 1,
    // marginVertical: 20
  },

  count: {
    flexDirection: 'column-reverse',
  },
  bottomItem: {
    width: '100%',
    padding: '2%',
  },
  bottomItemInner: {
    backgroundColor: '#4796ae',
    padding: 5,
    borderRadius: 7,
  },
  ScrollView: {
    backgroundColor: 'red',
    marginHorizontal: 30,
  },

  texttask: {
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  imagee: {
    flex: 1,
    flexDirection: 'row',
  },
});
