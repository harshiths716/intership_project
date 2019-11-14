import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  Text,
  View,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//import FadeInView from "./animation";
import {Switch, Image} from 'react-native';
//import LogoTitle from "./headerlogo";
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
var count = '';
var eventId = '';
class EventPlan2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      visible: false,
      eventID: '',
      flag: true,
      data: this.props.navigation.state.params,
      name: '',
    };
  }
  async componentDidMount() {
    try {
      value = await AsyncStorage.getItem('userdata');
      count = JSON.parse(value);
    } catch (e) {}
    data_data = {_id: this.state.data._id, token: count.token};
    this.props.sendUserDetails(count);

    this.props.get_task_api(data_data);
  }

  renderItem = ({item, index}) => {
    return (
      //  <ScrollView>
      <View style={{flex: 1}}>
        <TouchableOpacity>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('taskinfo', {
                  text: item.tName,
                  eventId:item.eventId,
                  id:item._id ,
                  description:item.description,
                  ownership: this.segricate(item.ownership) + '',
                  ownershipId:item.ownership,
                  budget:item.budget,
                  deadline:item.deadline,
                })
              }>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 32,
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                }}>
                {item.tName}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('taskinfo', {
                  text: '',
                  eventId:item.eventId,
                  id:item._id ,
                  description:'',
                  ownership:'',
                  budget:null,
                  deadline:'',
                //  new:null
                })
              }>
              <Image
                style={{width: 25, height: 25}}
                source={require('../resources/add.png')}
              />
            </TouchableOpacity>
          </View>

          <FlatList
            data={this.props.taskdetails[0].eventSubTask[index]}
            renderItem={item => this.item(item)}
          />
        </TouchableOpacity>
      </View>
      //</ScrollView>
    );
  };

  item = ({item}) => {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity
          style={{padding: '2%'}}
          onPress={() =>
            this.props.navigation.navigate('editsubtask', {
              text: item.subTname,
              eventId: eventId,
              ownership: item.ownership,
            })
          }>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Roboto',
              textAlign: 'center',
              borderWidth: 1,
              borderRadius: 6,
              borderColor: '#E91E63',
              width: '100%',
              padding: 5,
              backgroundColor: '#FFEB3B',
              fontWeight: 'bold',
            }}>
            {item.subTname}
          </Text>
         
        </TouchableOpacity>
        <Text style={{backgroundColor: 'green'}}>
            {this.segricate(item.ownership)+''}
          </Text>
      </View>
    );
  };
  upevents = () => {
    return (
      <FlatList
        data={this.props.taskdetails[0].eventTask}
        renderItem={this.renderItem}
      />
      // null
    );
  };

  segricate = obj => {
    console.warn('obj', obj);
    if (this.props.userdetails.length != 0) {
      
      var rebels = this.props.userdetails.filter(function(pilot) {
        /// console.warn(pilot.userDesg)
        return pilot._id === obj;
      });

      // await  this.setState({name:rebels.name})
      // console.warn('name asterr',rebels)
      return rebels[0].email;
      //  return null
    }
    else{
      console.warn("code reached else")
    }
  }
 

  componentWillUnmount() {
    this.props.clear();
  }
  render() {
    if (this.props.taskdetails.length != 0) {
      eventId = this.props.taskdetails[0].eventTask[0].eventId;
    }
    // if(this.props.userdetails){
    //   console.warn(this.props.userdetails)
    // }
    //console.warn(this.props.taskdetails)
    return (
      <ScrollView style={styles.scrollView}>
        <View style={{backgroundColor: 'white'}}>
          {this.props.taskdetails.length != 0 && ( //&& console.warn(this.props.taskdetails[0].eventTask)
            <View style={{flex: 1}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    width: '50%',
                    height: '90%',
                    backgroundColor: 'blue',
                    margin: '1%',
                  }}
                  onPress={() =>
                    this.props.publish({
                      endpoint: '/events/publishEvent',
                      data: {eventId: eventId},
                      token: count.token,
                      method: 'PUT',
                    })
                  }>
                  <Text>Publish</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '50%',
                    height: '90%',
                    backgroundColor: 'blue',
                    margin: '1%',
                  }}
                  onPress={() =>
                    this.props.cancel({
                      endpoint: '/events/cancelEvent',
                      data: {eventId: eventId},
                      token: count.token,
                      method: 'PUT',
                    })
                  }>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('invite')}
                  style={{
                    width: '50%',
                    height: '90%',
                    backgroundColor: 'blue',
                    margin: '1%',
                  }}>
                  <Text>Invite</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '50%',
                    height: '90%',
                    backgroundColor: 'blue',
                    margin: '1%',
                  }}
                  onPress={() => this.props.upload()}>
                  <Text>Poster</Text>
                </TouchableOpacity>

                {this.props.response.message &&
                  alert(this.props.response.message)}
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('taskinfo', {
                      text: '',
                      eventId: eventId,
                      id: '',

                    })
                  }>
                  <Image
                    style={{width: 40, height: 40}}
                    source={require('../resources/add.png')}
                  />
                  <Text>Add Task</Text>
                </TouchableOpacity>
              </View>
              {this.upevents()}
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

import {get_task_api} from '../../../app/Actions/Task_actions';
import {
  cancel,
  publish,
  upload,
  clear_response,
} from '../../../app/Actions/button_action';
import {sendUserDetails} from '../../../app/Actions/create_event_action';

const mapStateToProps = state => ({
  taskdetails: state.Task.taskdetails,
  response: state.Button_reducer.response,
  userdetails: state.CreateEvent.userdetails,
});

const mapDispatchToProps = dispatch => ({
  get_task_api: data => dispatch(get_task_api(data)),
  cancel: data => dispatch(cancel(data)),
  publish: data => dispatch(publish(data)),
  upload: data => dispatch(upload(data)),
  clear: () => dispatch(clear_response()),
  sendUserDetails: data => dispatch(sendUserDetails(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventPlan2);

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
