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
import {Switch, Image} from 'react-native';
//import LogoTitle from "./headerlogo";
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
//import Eventinfo from "./Eventinfo";
import Dialog, {DialogContent} from 'react-native-popup-dialog';
import FloatingLabelInput from '../reuseablecomponents/Floatinput';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {acceptEvents, rejectEvents} from '../../../app/Actions/eventsAssigned';

var data;

class EventsAssigned extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      visible: false,
      eventID: '',
    };
  }
  async componentDidMount() {
getUserData().then((d)=>{
data=d
})
    this.props.sendAssignedEvents(data);
  }

  reject = () => {
  

    var rejectdata = {
      token: data.token,
      comment: this.state.comment,
      eventID: this.state.eventID,
    };
    this.props.rejectEvent(rejectdata);
    this.setState({visible: false});

    this.props.sendAssignedEvents(data);
  };

  accept = obj => {
    
    var aceptdata = {token: data.token, eventID: obj};
  

    this.props.acceptEvents(aceptdata);

    this.props.sendAssignedEvents(data);
  };

  renderItem = ({item, index}) => {
  
    const {navigate} = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.bottomItem}>
          <TouchableOpacity
            style={styles.bottomItemInner}
            onPress={() => {
              navigate('eventdet', item);
            }}>
            <Text
              style={{fontFamily: 'Roboto', fontSize: 17, color: '#ffffff'}}>
              {item.events.eName}
            </Text>
            <Text
              numberOfLines={1}
              style={{fontSize: 17, fontFamily: 'Roboto'}}>
              {item.events.venue}
            </Text>

            <Text
              numberOfLines={1}
              style={{color: 'white', fontSize: 14, fontFamily: 'Roboto'}}>
              {item.events.description}
            </Text>
            <View style={styles.containerr}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.accept(item.events._id)}>
                <Text> Accept </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button1}
                onPress={() =>
                  this.setState({visible: true, eventID: item.events._id})
                }>
                <Text> Reject</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  upevents = () => {
    return (
      <FlatList
        // numColumns={3}
        data={this.props.assignedEvents}
        // style={styles.container}
        renderItem={this.renderItem}
        // numColumns={numColumns}
      />
    );
  };


  render() {
 
    return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.scrollView}>
          <View style={{backgroundColor: 'white'}}>
            {this.props.assignedEvents != null
              ? this.upevents()
              : NoEvent()}
          </View>
        </ScrollView>

        {/* {this.state.visible?this.dialog():null} */}

        <Dialog
          width="80%"
          height="40%"
          //padding='10%'
          visible={this.state.visible}
          onTouchOutside={() => {
            this.setState({visible: false});
          }}>
          <DialogContent>
            <KeyboardAvoidingView behavior="padding">
              <View style={{width: '100%', height: '100%'}}>
                <TextInput
                  style={{fontSize: 24}}
                  placeholder="comment"
                  value={this.state.comment}
                  onChangeText={text => {
                    this.setState({comment: text});
                  }}
                />

                <TouchableOpacity
                  style={{
                    margin: 20,
                    alignSelf: 'center',
                    width: '60%',
                    height: '30%',
                    backgroundColor: 'green',
                  }}
                  onPress={() => this.reject()}>
                  <Text
                    style={{
                      fontSize: 24,
                      alignSelf: 'center',
                      paddingTop: 10,
                    }}>
                    SEND
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </DialogContent>
        </Dialog>
      </View>
    );
  }
}

import {
  SEND_ASSIGNEDEVENTS,
  ACCEPT_EVENT,
} from '../../../app/Actions/eventsAssigned';
import { NoEvent } from '../reuseablecomponents/noEvent';
import { getUserData } from '../reuseablecomponents/asyncStorage';
const mapStateToProps = state => ({
  assignedEvents: state.TextChanger.assignedEvents,
  apicall: state.AssignedEvents.apicall,
});

const mapDispatchToProps = dispatch => ({
  sendAssignedEvents: data => dispatch(send_assignedEvents(data)),
  acceptEvents: data => dispatch(acceptEvents(data)),
  rejectEvent: data => dispatch(rejectEvents(data)),
  sendUserDetails: data => dispatch(sendUserDetails(data)),
});

function send_assignedEvents(data1) {

  return {type: SEND_ASSIGNEDEVENTS, payload: data1};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventsAssigned);

const styles = StyleSheet.create({
  containerr: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    height: '130%',
    flex: 1,
    backgroundColor: 'green',
  },
  button1: {
    alignItems: 'center',
    height: '130%',
    flex: 1,
    backgroundColor: 'red',
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'green',
  },
  scrollView: {
    //  backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  count: {flex: 3},
  stretch: {
    width: 430,
    height: 300,
    resizeMode: 'center',
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
    height: '50%',
    padding: '2%',
    //height: "85%",
  },
  bottomItemInner: {
    // flex: 1,
    backgroundColor: '#4796ae',
    //  width:'50%',
    //  height: "200%",
    padding: 5,
    borderRadius: 7,
  },
  ScrollView: {
    backgroundColor: 'red',
    marginHorizontal: 30,
  },
});
