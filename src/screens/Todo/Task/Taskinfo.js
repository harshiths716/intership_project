import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import FloatingLabelInput from "../../reuseablecomponents/Floatinput";
// import AddTodo from '../containers/AddTodo'
// import TodoList from '../components/TodoList';
// import VisibleTodos from '../containers/VisibleTodos';
import {connect} from 'react-redux';
 class Taskinfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.navigation.state.params,
      isStartTimePickerVisible:false,
text:'',
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


subtask=()=>{
  return(

    <View style={{ flex:1,padding: 20 }}>
    {/* <TodoList todos={this.props.todos} toggleTodo={this.props.toggleTodo}  navigateprops={this.props.navigateprops}/> */}
 
    { this.props.todos.map(todo =>
     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
     <TouchableOpacity
       key={todo.id}
       style={{flexDirection: 'row', justifyContent: 'space-between'}}
       onPress={() => this.navi(todo)}>
       <Text
         style={{
           fontSize: 24,
           textDecorationLine: todo.completed ? 'line-through' : 'none',
         }}>
         {todo.text}
       </Text>
     </TouchableOpacity>

     <Button title="DONE" onPress={() => this.props.toggleTodo(todo.id)} />
   </View>
         
     )}
 </View>


  );
}

addsubtask=()=>{
return(
  <View style={{flexDirection: 'row', marginHorizontal: 20}}>
  <TextInput
    onChangeText={text => this.setState({text})}
    value={this.state.text}
    placeholder="Eg. Create New Video"
    style={{
      borderWidth: 1,
      borderColor: '#f2f2e1',
      backgroundColor: '#eaeaea',
      height: 50,
      flex: 1,
      padding: 5,
    }}
  />
  <TouchableOpacity
    style={{justifyContent: 'center'}}
    onPress={() => this.addTodo(this.state.text)}>
    <Text style={{fontSize: 35}}>+</Text>
  </TouchableOpacity>
</View>
);
}



  render() {
      // console.warn('.',this.state.data)
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
{      this.addsubtask()
}{this.subtask()}
    </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  // navigateprops:this.props.navigateprops
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});
console.log('inside VisibleTodos');

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Taskinfo);