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
var count=''
var data=''
 export class Taskinfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.navigation.state.params,
      isStartTimePickerVisible: false,
      text: '',
      listHolder: '',
      search: '',
      idarray1:'',
      StartTime: '',
      desc: '',
      budget: '',
      deleting: 1,
      show: false,
      mode: 'date',
      date: new Date(),
      start: new Date(),
      end: new Date(),
      taskname:''
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
    } catch (e) {
      console.warn('async error');
      console.warn(e);
    }
    
    this.props.sendUserDetails(count);
   console.warn('inside componetdid mount');
    //console.warn('outside map******************');
    this.props.data.map(item => {
    //  console.warn('map***************');
      if (this.state.data.id == item.id && item.flag !== false) {
        // console.warn('inside shit>>>',item)

        if (item === null) {
        //  console.warn('null');
        } else {
       //   console.warn('hiiiiiiiiiiiiiiiiii', item.ownership);
          this.setState({
            desc: item.description,
            budget: item.Budget,
            StartTime: item.deadline,
            idarray1: item.ownership,
          });

          // item.id

          //    this.setState({deleting:0})
          this.props.deletearray(item.id);
        }
      }
    });
    this.setState({taskname:this.state.data.text})
  }

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
    this.setState({idarray1: email});
  //  console.warn('new', this.state.idarray1);
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
    console.warn('unmounting');
  }

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

  setDate = (event, date, v) => {
   // console.warn(event);
    if (event.type == 'set') {
      if (this.state.mode === 'time') {
    //    console.warn('state',this.state[v])
        let dat = new Date(
          this.state[v].toISOString().substr(0, 11) +
            date.toISOString().substr(11),
        );
    //    console.warn('nnnnnnnnnnnnn',dat);
        this.setState(
          {
            [v]: dat,
            mode: 'date',
            show: !this.state.show,
          },
          () => console.warn(v + ' ' + this.state[v]),
        );
      } else {
        console.warn('Selected the date' + date + '');
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
     data = {
       token:count.token,
      id: this.state.data.id,
      eventId:this.state.data.eventId ?this.state.data.eventId :this.props.createEventid.eventId,
      completed: this.state.data.completed,
      ownership: iddata,
      description: this.state.desc,
      tName: this.state.data.eventId ?this.state.taskname:this.state.data.text,
      Budget: this.state.budget,
      deadline: this.state.end,
      createdBy:count.UserID,
      flag: true,
    };
  //  console.warn('inside unmounting....');
    this.props.addorganizer(data);
  };


apihit=()=>{
  this.sendtask()
  this.props.add_task_api(data)
}
  render() {
    const {show, mode, date} = this.state;
// if(this.props.createEventid!=undefined){
//     console.warn('state data',this.state.data,'props data',this.props.createEventid.eventId);
//     }
//     console.warn('state data',this.state.data)
    return (
      <View style={{flex: 1, padding: '5%'}}>
         
        <KeyboardAvoidingView behavior="padding">
          <TouchableOpacity
            style={{backgroundColor: 'black', width: '20%', height: '10%'}}
            onPress={() => this.apihit()}>
            <Text style={{color: 'white', alignSelf: 'center', fontSize: 24}}>
              Done
            </Text>
          </TouchableOpacity>

            <FloatingLabelInput
              label="Task Name"
             // value={this.state.taskname}
              defaultValue={this.state.data.text}
              onChangeText={text => {
               this.setState({taskname:text})
              }}
            />
         

         

          <Text style={{color: 'blue'}}>{this.state.idarray1}</Text>

          <FloatingLabelInput
            label="Add ownership"
            value={this.state.search}
            onChangeText={text => {
              this.list(text);
            }}
          />
          {/* <View style={{flex:1}}> */}
          <FlatList data={this.state.listHolder} renderItem={this.renderItem} />
          {/* </View> */}

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
          {/* <Button
            title="Please select start time"
            onPress={() => this._show('start')}
          /> */}

          <Button
            title="Please select end time"
            onPress={() => this._show('end')}
          />

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
  input: {
    height: 44,
    fontSize: 20,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
});


import {add_task_api} from '../../../../app/Actions/Task_actions'
const mapStateToProps = state => ({
  subtodos: state.subtodos,
tasksent:state.Task.tasksent,
  userdetails: state.CreateEvent.userdetails,
  createEventid:state.CreateEvent.createEventid,

  //   description:state.Taskinfo_reducer.description,
  //   tName:state.Taskinfo_reducer.tName,
  //   ownership:state.Taskinfo_reducer.ownership,
  //   Budget:state.Taskinfo_reducer.Budget,
  //   deadline:state.Taskinfo_reducer.deadline,
  data: state.Taskinfo_reducer,
  createEventid: state.CreateEvent.createEventid,
  // navigateprops:this.props.navigateprops
});

const mapDispatchToProps = dispatch => ({
  subtoggleTodo: id => dispatch(subtoggleTodo(id)),
  addsubTodo: text => dispatch(addsubTodo(text)),
  sendUserDetails: data => dispatch(sendUserDetails(data)),
  addorganizer: data => dispatch(addorganizer(data)),
  // adddesc: data => dispatch(adddesc(data)),
  add_task_api:data=>dispatch(add_task_api(data)),
  // adddeadline: data => dispatch(adddeadline(data)),
  deletearray: data => dispatch(deletearray(data)),
});
console.log('inside VisibleTodos');

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Taskinfo);
