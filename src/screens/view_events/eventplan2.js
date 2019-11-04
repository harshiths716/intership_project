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
class EventPlan2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      visible: false,
      eventID: '',
      flag: true,
      data: this.props.navigation.state.params,
    };
  }
  async componentDidMount() {
    try {
      value = await AsyncStorage.getItem('userdata');
      count = JSON.parse(value);
      console.warn('my details', count);
    } catch (e) {
      console.warn('async error');
      console.warn(e);
    }
    data_data = {_id: this.state.data._id, token: count.token};

    this.props.get_task_api(data_data);
  }
 renderitem2 = ({item}) => {
    return (
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{padding: '2%'}}
            onPress={() =>
              this.props.navigation.navigate('editsubtask', {
                text: '',
                eventId: this.props.taskdetails[0].eventId._id,
                id: '',
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
              {item.asd}
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity >
                              
                                </TouchableOpacity> */}
        </View>
      </ScrollView>
    );
  };
  renderItem = ({item}) => {
    return (
      //  <ScrollView>
      <View style={{flex: 1}}>
        <TouchableOpacity>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('taskinfo', {
                  text: item.tName,
                  eventId: this.props.taskdetails[0].eventId._id,
                  id: '',
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
                this.props.navigation.navigate('editsubtask', {
                  text: '',
                  eventId: this.props.taskdetails[0].eventId._id,
                  id: item._id,
                })
              }>
              <Image
                style={{width: 25, height: 25}}
                source={require('../resources/add.png')}
              />
            </TouchableOpacity>
          </View>
          {item.subtName && (
            <FlatList data={item.subtName} renderItem={this.renderitem2} />
          )}
        </TouchableOpacity>
      </View>
      //</ScrollView>
    );
  };
  upevents = () => {
    return (
      <FlatList data={this.props.taskdetails} renderItem={this.renderItem} />
    );
  };
  render() {
    console.warn('tasks', this.props.taskdetails);
    return (
      <ScrollView style={styles.scrollView}>
        <View style={{backgroundColor: 'white'}}>
          {this.props.taskdetails != '' && (
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 32,
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                event name: {this.props.taskdetails[0].eventId.eName}
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    width: '50%',
                    height: '90%',
                    backgroundColor: 'blue',
                    margin: '1%',
                  }}>
                  <Text>Publish</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '50%',
                    height: '90%',
                    backgroundColor: 'blue',
                    margin: '1%',
                  }}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('invite')}
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
                  }}>
                  <Text>Poster</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('taskinfo', {
                      text: '',
                      eventId: this.props.taskdetails[0].eventId._id,
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
            </View>
          )}
          {this.upevents()}
        </View>
      </ScrollView>
    );
  }
}

import {get_task_api} from '../../../app/Actions/Task_actions';

const mapStateToProps = state => ({
  taskdetails: state.Task.taskdetails,
});

const mapDispatchToProps = dispatch => ({
  get_task_api: data => dispatch(get_task_api(data)),
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
