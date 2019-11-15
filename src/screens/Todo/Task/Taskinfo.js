import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import FloatingLabelInput from '../../reuseablecomponents/Floatinput';
// import AddTodo from '../containers/AddTodo'
// import TodoList from '../components/TodoList';
// import VisibleTodos from '../containers/VisibleTodos';
import {connect} from 'react-redux';
import {subtoggleTodo, addsubTodo} from '../../../../app/Actions/Todo_actions';
import {sendUserDetails} from '../../../../app/Actions/create_event_action';
import {
  addbudget,
  // adddeadline,
  //adddesc,
  addorganizer,
  deletearray,
} from '../../../../app/Actions/taskinfo_actions';

var iddata = '';
var count = '';
var data = '';

export class Taskinfo extends React.Component {
  constructor(props) {
    super(props);
    //  console.log('in constructor');
    this.state = {
      data: this.props.navigation.state.params,
      isStartTimePickerVisible: false,
      ownership: '',
      text: '',
      listHolder: '',
      search: '',
      idarray1: this.props.navigation.state.params.ownership,
      StartTime: '',
      desc: this.props.navigation.state.params.description
        ? this.props.navigation.state.params.description
        : '',
      budget: this.props.navigation.state.params.budget
        ? this.props.navigation.state.params.budget
        : '',
      deleting: 1,
      show: false,
      mode: 'date',
      date: new Date(),
      start: new Date(),
      end: this.props.navigation.state.params.deadline
        ? this.props.navigation.state.params.deadline
        : new Date(),
      taskname: this.props.navigation.state.params.text
        ? this.props.navigation.state.params.text
        : '',
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

  async componentDidMount() {
    try {
      value = await AsyncStorage.getItem('userdata');
      count = JSON.parse(value);
    } catch (e) {}

    this.props.sendUserDetails(count);

    this.props.data.map(item => {
      if (this.state.data.id == item.id && item.flag !== false) {
        if (item === null) {
        } else {
          this.setState({
            desc: item.description,
            budget: item.Budget,
            end: item.deadline,
            idarray1: item.ownership,
          });

          // item.id

          //    this.setState({deleting:0})
          this.props.deletearray(item.id);
        }
      }
    });
    this.setState({taskname: this.state.data.text});

    this.state.data.type &&
      this.setState(
        {
          data: this.props.navigation.state.params,
          idarray1: this.props.navigation.state.params.type
            ? this.state.data.ownership
            : '',
        },
        //console.warn('in component did mount'),
      );
  }

  segricate = obj => {
    //console.warn('obj', obj);
    if (this.props.userdetails.length != 0) {
      var rebels = this.props.userdetails.filter(function(pilot) {
        /// console.warn(pilot.userDesg)
        return pilot._id === obj;
      });

      // await  this.setState({name:rebels.name})
      // console.warn('name asterr',rebels)
      return rebels[0].email;
      //  return null
    } else {
      console.warn('code reached else');
    }
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
    // if(iddata.len>1){
    //   alert('only one ownership')
    // }else{
    iddata = id;
    this.setState({idarray1: {email: email, id: id}});
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

  componentWillUnmount() {
    this.sendtask();
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
          () => console.warn(v + ' ' + this.state[v]),
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

  sendtask = () => {
    const {type,completed}=this.state.data
    data = {
      taskEndpoint:
      type === 'ADD_TASK' || type === 'EDIT_TASK' || completed != undefined
          ? '/eventTasks/createTask'
          : '/eventSubTasks/createSubTask',
      token: count.token,
      id: this.state.data.id,
      eventId: this.state.data.eventId
        ? this.state.data.eventId
        : this.props.createEventid.eventId,
      completed: this.state.data.eventId ? null : this.state.data.completed,
      ownership: this.state.idarray1,
      description: this.state.desc,
      tName: this.state.taskname,
      Budget: this.state.budget,
      deadline: this.state.end,
      createdBy: count.UserID,
      flag: true,
    };

    this.props.addorganizer(data);
  };

  apihit = () => {
    this.sendtask();
    this.props.add_task_api(data);
  };
  render() {
    const {show, mode, date} = this.state;
  //   console.warn('yy', this.state.data.type);
  //  const {type} = this.state.data;
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{padding: '4%'}}>
          <TouchableOpacity
            style={{backgroundColor: 'black', width: '20%', height: '9%'}}
            onPress={() => this.apihit(this.state.data.type, this.state.data.completed)}>
            <Text style={{color: 'white', alignSelf: 'center', fontSize: 24}}>
              Done
            </Text>
          </TouchableOpacity>

          <FloatingLabelInput
            label="Task Name"
            // style={{margin:"5%"}}           // value={this.state.taskname}
            value={this.state.taskname}
            onChangeText={text => {
              this.setState({taskname: text});
            }}
          />

          <Text style={{color: 'blue', margin: '2%'}}>
            Ownership:
            {this.state.idarray1 != undefined
              ? this.state.idarray1.email
              : null}
          </Text>

          <FloatingLabelInput
            label="Add ownership"
            defaultValue={this.state.ownership}
            onChangeText={text => {
              this.list(text);
            }}
          />

          <FlatList data={this.state.listHolder} renderItem={this.renderItem} />

          <Text style={{color: 'green', margin: '2%'}}>
            Date:{this.state.end.toString().substring(0, 10)}{' '}
          </Text>
          <Text style={{color: 'green', margin: '2%'}}>
            Time{this.state.end.toString().substring(15, 21)}
          </Text>

          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              minimumDate={date}
              onChange={(e, d) => this.setDate(e, d, this.state.type)}
            />
          )}

          <Button
            title="Please select end time"
            onPress={() => this._show('end')}
          />

          <FloatingLabelInput
            label={'Add Description'}
            value={this.state.desc}
            onChangeText={text => this.setState({desc: text})}
          />

          {this.state.data.type == 'ADD_TASK' ||
          this.state.data.type == 'EDIT_TASK' ||
          this.state.data.completed != undefined ? (
            <FloatingLabelInput
              label={'Add Budget'}
              value={this.state.budget + ''}
              onChangeText={text => this.setState({budget: text})}
            />
          ) : (
            <View style={{flex: 1}}>
              <Text>hi</Text>
            </View>
          )}
          <View style={{flex: 1, marginTop: 10}}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

import {add_task_api} from '../../../../app/Actions/Task_actions';
const mapStateToProps = state => ({
  subtodos: state.subtodos,
  tasksent: state.Task.tasksent,
  userdetails: state.CreateEvent.userdetails,
  createEventid: state.CreateEvent.createEventid,
  data: state.Taskinfo_reducer,
  createEventid: state.CreateEvent.createEventid,
});

const mapDispatchToProps = dispatch => ({
  subtoggleTodo: id => dispatch(subtoggleTodo(id)),
  addsubTodo: text => dispatch(addsubTodo(text)),
  sendUserDetails: data => dispatch(sendUserDetails(data)),
  addorganizer: data => dispatch(addorganizer(data)),
  add_task_api: data => dispatch(add_task_api(data)),
  deletearray: data => dispatch(deletearray(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Taskinfo);
