import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';


export const storeUserdata = async(data)=>{
try {
    await AsyncStorage.setItem(
      'userdata',
      JSON.stringify(data),
    );
  } catch (e) {}

}


export const getUserData= async()=>{


    try {
        value = await AsyncStorage.getItem('userdata');
        count = JSON.parse(value);
        if(count!=null)
        return count
  
      } catch (e) {}

}