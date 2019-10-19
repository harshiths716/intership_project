import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import {Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FloatingLabelInput from '../../screens/reuseablecomponents/Floatinput';

Item = ({title}) => {
  return (
    <View>
      <Text>hai hello</Text>
      <Text>{title}</Text>
    </View>
  );
};
export default class Editsubtask extends Component {
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
  render() {
    console.warn(this.state.data.subtask);
    return (
      <ScrollView style={styles.scrollView}>
        <View style={{backgroundColor: 'white'}}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 32,
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Event name:{this.state.data.eventname}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 24,
                }}>
                Task name:{this.state.data.task}
              </Text>
            </View>
            {
              ((obj = this.state.data.subtask),
              obj.map(item => (
                <View>
                  <FloatingLabelInput
                    label={'uj'}
                    defaultValue={item.subtask1}
                    onChangeText={text => this.setState({budget: text})}
                  />

                  <FloatingLabelInput
                    label={'Add Budget'}
                    defaultValue={item.subtask1}
                    onChangeText={text => this.setState({budget: text})}
                  />
                  <FloatingLabelInput
                    label={'Add Budget'}
                    defaultValue={item.subtask1}
                    onChangeText={text => this.setState({budget: text})}
                  />
                </View>
              )))
            }

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View>
                <TouchableOpacity>
                  <Image
                    style={{width: 35, height: 35}}
                    source={require('../resources/add.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={{left: 20}}>
                <TouchableOpacity>
                  <Image
                    style={{width: 35, height: 35}}
                    source={require('../resources/edit.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={{left: 40}}>
                <TouchableOpacity>
                  <Image
                    style={{width: 35, height: 35}}
                    source={require('../resources/remove.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('EventPlan2')}
          style={{backgroundColor: 'black', width: '30%', height: '100%'}}>
          <Text style={{color: 'white', alignSelf: 'center'}}>BACK</Text>
        </TouchableOpacity>
      </ScrollView>
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
