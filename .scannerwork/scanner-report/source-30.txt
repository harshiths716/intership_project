import React, {Component} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import {noEvent} from '../reuseablecomponents/noEvent'
import {getUserData} from '../reuseablecomponents/asyncStorage';
import Dialog, {DialogContent} from 'react-native-popup-dialog';
import {connect} from 'react-redux';
import {acceptEvents, rejectEvents} from '../../app/Actions/eventsAssigned';
var data = '';

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
    getUserData().then(id => {
      data = id;
    });
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

  renderItem = ({item}) => {

    return (
      //  <ScrollView style={styles.container}>
      <View style={styles.bottomItemInner}>
        <Text style={{fontFamily: 'Roboto', fontSize: 17, color: '#ffffff'}}>
          {item.events.eName}
        </Text>
        <Text numberOfLines={1} style={{fontSize: 17, fontFamily: 'Roboto'}}>
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
      </View>
      // </ScrollView>
    );
  };

  upevents = () => {
    return (
      <FlatList
        data={this.props.assignedEvents}
        renderItem={item => this.renderItem(item)}
        keyExtractor={item => item._id}
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
              : noEvent()}
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
} from '../../app/Actions/eventsAssigned';
const mapStateToProps = state => ({
  assignedEvents: state.TextChanger.assignedEvents,
  apicall: state.AssignedEvents.apicall,
});

const mapDispatchToProps = dispatch => ({
  sendAssignedEvents: load => dispatch(send_assignedEvents(load)),
  acceptEvents: load => dispatch(acceptEvents(load)),
  rejectEvent: load => dispatch(rejectEvents(load)),
  sendUserDetails: load => dispatch(sendUserDetails(load)),
});

function send_assignedEvents(load) {
  return {type: SEND_ASSIGNEDEVENTS, payload: load};
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsAssigned);

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
  },
  bottomItem: {
    width: '100%',
    height: '50%',
    padding: '2%',
  },
  bottomItemInner: {
    backgroundColor: '#4796ae',
    margin: 10,
    padding: 10,
    borderRadius: 7,
  },
  ScrollView: {
    backgroundColor: 'red',
    marginHorizontal: 30,
  },
});
