import {View,Text} from 'react-native'
import React,{Component} from 'react'
export const NoEvent = () => {
    return (
      <View style={{flex: 1}}>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 30,
            opacity: 0.1,
            alignSelf: 'center',
          }}>
          no events
        </Text>
      </View>
    );
  };