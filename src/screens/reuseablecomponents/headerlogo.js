import React from 'react';
import {Image,View} from 'react-native'
export default class LogoTitle extends React.Component {
    render() {
      return (
    <View>
        <Image
          source={require('../resources/list.png')}
          style={{ width: 40, height: 40 }}
        
        />
          </View>
      );
    }
  }