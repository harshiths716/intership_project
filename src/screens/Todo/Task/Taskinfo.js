import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import FloatingLabelInput from "../../reuseablecomponents/Floatinput";
import AddTodo from '../containers/AddTodo'
import VisibleTodos from '../containers/VisibleTodos'
export default class Taskinfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.navigation.state.params,
      isStartTimePickerVisible:false,

    };
  }


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

  render() {
      console.warn('.',this.state.data)
    return (
    <View style={{flex: 1,padding:"5%"}}>
<Text style={{fontSize:24}} >Task Name:{this.state.data.text}</Text>
<FloatingLabelInput
      label = {'Add Organizers'}
      value={this.state.selectedtype}
      onChangeText={text =>{
        this.setState({
          selectedtype: text
        });      
    }}
    />


<DateTimePicker
            mode="time"
            // is24Hour={true}
            isVisible={this.state.isStartTimePickerVisible}
            onConfirm={this.handleStartTimePicked}
            onCancel={this.hideStartTimePicker}
          />
          <Text> {this.state.StartTime}</Text>
          <Button title=" Select Deadline" onPress={this.showEndTimePicker} />


          <FloatingLabelInput
      label = {'Add Description'}
      value={this.state.selectedtype}
      onChangeText={text =>{
        this.setState({
          selectedtype: text
        });      
    }}
    />

<FloatingLabelInput
      label = {'Add Budget'}
      value={this.state.selectedtype}
      onChangeText={text =>{
        this.setState({
          selectedtype: text
        });      
    }}
    />
        <AddTodo />
<View>
<VisibleTodos/>
</View>
    </View>
    );
  }
}
