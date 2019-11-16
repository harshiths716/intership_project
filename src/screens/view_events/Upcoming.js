

import React from 'react';
import {UPCOMMING_API} from '../../app/apiConstant'  
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  ImageBackground,
  FlatList,
} from 'react-native';
import {SEND_UPCOMING} from '../../app/Actions/upcoming_action';

// import LogoTitle from '../reuseablecomponents/headerlogo';
import CountDown from 'react-native-countdown-component';
import {connect} from 'react-redux';
import { NoEvent } from '../reuseablecomponents/noEvent';
import { getUserData } from '../reuseablecomponents/asyncStorage';
import OfflineNotice from '../reuseablecomponents/error';

var count = 0;
var value = 0;
class Upcoming extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      username: '',
      date: '',
      dataResponse: [],
      date3: '',
      date: '',
      date5: '',
      date8: '',
      daa: '',
      data: [],
      C: '',
      D: '',
      A: '',
    };

    //this.renderItem = this.renderItem.bind(this);
    // this.upevents = this.upevents.bind(this);
  }

  renderItem = ({item}) => {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.bottomItem}>
          <TouchableOpacity
            style={styles.bottomItemInner}
            onPress={() =>
              this.props.navigation.navigate('Upcomingeventinfo', item)
            }>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 17,
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'white',
              }}>
              {item.eName}
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: 17,
                fontWeight: '17',
                textAlign: 'center',
                color: 'white',
              }}>
              {item.startTime.substr(0, 10)}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 17,
                fontFamily: 'Roboto',
                fontWeight: '17',
                textAlign: 'center',
                color: 'white',
              }}>
              {item.venue}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontWeight: '17',
                fontSize: 17,
                fontFamily: 'Roboto',
                textAlign: 'center',
                color: 'white',
              }}>
              {item.description}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  upevents = () => {
    if (this.props.upcoming.length < 1) {
      NoEvent()
    } else {
      return (
        <FlatList
          data={this.props.upcoming.data}
          renderItem={this.renderItem}
        />
      );
    }
  };

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  async componentDidMount() {
    var dddd = new Date();
    let date = dddd.toISOString();

    getUserData().then((d)=>{
count=d
    })
    data_data = {date: date, token: count.token,method:"GET",endpoint:UPCOMMING_API};
    this.props.sendUpcoming(data_data);
  }

  componentDidUpdate() {}

  render() {
    return (
      <ImageBackground
        source={require('../resources/3.jpg')}
        style={styles.backgroundImage}>
          <OfflineNotice
          data={this.props.upcoming}
          />
        <ScrollView>
          { this.props.upcoming !=undefined ?
          <View style={{flex: 1}}>
            <CountDown
              style={styles.count}
              until={this.props.upcoming.timediff}
              // onFinish={() => alert('finished')}
              onPress={() => alert('hello')}
              size={30}
            />
            <Text style={styles.yellow}>TILL NEXT EVENT</Text>
            <Text style={styles.yellow}>
              {' '}
              {this.props.upcoming.data && this.props.upcoming.data[0].eName}
            </Text>
            {/* <Image
              style={styles.stretch}
              source={require('../resources/img.jpg')}
            /> */}

            {this.props.upcoming != null && this.upevents()}
          </View>:<Text>no events</Text>}
        </ScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  upcoming: state.TextChanger.upcoming,
});

const mapDispatchToProps = dispatch => ({
  sendUpcoming: data => dispatch(send_Upcoming(data)),
});

function send_Upcoming(data) {
  return {type: SEND_UPCOMING, payload: data};
}

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
  button1: {
    alignItems: 'center',
    backgroundColor: 'red',
  },
  // scrollView: {
  //  // backgroundColor: 'pink',
  //   marginHorizontal: 20,
  // },
  count: {flex: 3},
  stretch: {
    width: 430,
    height: 300,
    resizeMode: 'fit',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1.2,
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
  yellow: {
    fontWeight: 'bold',
    position: 'relative',
    left: 70,
    fontSize: 22,
  },

  count: {
    flexDirection: 'column-reverse',
  },
  bottomItem: {
    width: '100%',

    padding: '2%',
  },
  bottomItemInner: {
    backgroundColor: '#3F729B',
    padding: 7,
    borderColor: 'black',
    borderRadius: 11,
    width: '100%',
  },
  ScrollView: {
    backgroundColor: 'red',
    marginHorizontal: 30,
  },
});
