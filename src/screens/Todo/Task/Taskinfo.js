import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,KeyboardAvoidingView,
  TextInput,FlatList,ScrollView
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import FloatingLabelInput from '../../reuseablecomponents/Floatinput';
// import AddTodo from '../containers/AddTodo'
// import TodoList from '../components/TodoList';
// import VisibleTodos from '../containers/VisibleTodos';
import {connect} from 'react-redux';
import {subtoggleTodo, addsubTodo} from '../../../../app/Actions/Todo_actions';
import {sendUserDetails} from '../../../../app/Actions/create_event_action';
iddata = [];

class Taskinfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.navigation.state.params,
      isStartTimePickerVisible: false,
      text: '',
      listHolder: '',
      search: '',
      idarray: [],
      StartTime:'',
      desc:'',
      budget:'',
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

    this.hideStartTimePicker();
  };

  async componentDidMount() {
    try {
      value = await AsyncStorage.getItem('userdata');
      count = JSON.parse(value);
    } catch (e) {
      console.warn('async error');
      console.warn(e);
    }

    this.props.sendUserDetails(count);
  }


  subtask = () => {
    return (
      <View style={{flex: 1, padding: 20}}>
        {/* <TodoList todos={this.props.todos} toggleTodo={this.props.toggleTodo}  navigateprops={this.props.navigateprops}/> */}

        {this.props.subtodos.map(todo => (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              key={todo.subid}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}
              onPress={() => this.navi(todo)}>
              <Text
                style={{
                  fontSize: 24,
                  textDecorationLine: todo.completed ? 'line-through' : 'none',
                }}>
                {todo.subtext}
              </Text>
            </TouchableOpacity>

            <Button
              title="DONE"
              onPress={() => this.props.subtoggleTodo(todo.id)}
            />
          </View>
        ))}
      </View>
    );
  };

  list(text) {
    const newData = this.props.userdetails.filter(function(item) {
      const itemData = item.email
        .substring(0, item.email.indexOf('@'))
        .toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({listHolder: newData, search: text});
    if (text == '') {
      this.setState({listHolder: ''});
    }
  }

  addname = (id, email) => {
    iddata.push({id: id, email: email});
    this.setState({idarray: iddata});
    console.warn('new', this.state.idarray);
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
            {/* <Text
            style={{fontFamily: 'Roboto', fontSize: 17, color: '#ffffff'}}>
            {item.email}
          </Text>
          <Text
            numberOfLines={1}
            style={{fontSize: 17, fontFamily: 'Roboto'}}>
            {item.dpName}
          </Text> */}
            {/* <Text
          numberOfLines={1}
          style={{color: 'white', fontSize: 14, fontFamily: 'Roboto'}}>
          {item.description}
        </Text> */}
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
            {/* <Text
          style={{fontFamily: 'Roboto', fontSize: 17, color: '#ffffff'}}>
          {item.email}
        </Text>
        <Text
          numberOfLines={1}
          style={{fontSize: 17, fontFamily: 'Roboto'}}>
          {item.dpName}
        </Text> */}
            {/* <Text
        numberOfLines={1}
        style={{color: 'white', fontSize: 14, fontFamily: 'Roboto'}}>
        {item.description}
      </Text> */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  addsubtask = () => {
    return (
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <TextInput
          onChangeText={text => this.setState({text})}
          value={this.state.text}
          placeholder="Eg. Create New task"
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
          onPress={() =>
            this.props.addsubTodo(this.state.text) && this.setState({text: ''})
          }>
          <Text style={{fontSize: 35}}>+</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    // console.warn('.',this.state.data)
    return (

      <View style={{flex: 1, padding: '5%'}}>
                <KeyboardAvoidingView behavior='padding'>

<Text style={{fontSize: 24}}>Task Name:{this.state.data.text}</Text>


          {this.state.idarray.map(item => (
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
          onChangeText={text => {
            this.setState({
              desc: text,
            });
          }}
        />

        <FloatingLabelInput
          label={'Add Budget'}
          value={this.state.budget}
          onChangeText={text => {
            this.setState({
              budget: text,
            });
          }}
        />
        {/* // {this.addsubtask()}
// {this.subtask()} */}
</KeyboardAvoidingView>

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
  subtodos: state.subtodos,
  userdetails: state.CreateEvent.userdetails,

  // navigateprops:this.props.navigateprops
});

const mapDispatchToProps = dispatch => ({
  subtoggleTodo: id => dispatch(subtoggleTodo(id)),
  addsubTodo: text => dispatch(addsubTodo(text)),
  sendUserDetails: data => dispatch(sendUserDetails(data)),

});
console.log('inside VisibleTodos');

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Taskinfo);
