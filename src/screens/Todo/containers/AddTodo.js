import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Icon } from 'react-native-elements'

class AddTodo extends Component {
    render() {
        return (
            <View style={{flexDirection:'row'}}>
           <TextInput
           placeholder='enter text'
           style={{borderWidth:1,borderColor:'green',
        backgroundColor:'white',height:50,flex:1,padding:5}}
           
           />
           <TouchableOpacity>
               <View style={{height:50,backgroundColor:'blue',
            alignItems:'center',justifyContent:'center'}}>


               </View>
           </TouchableOpacity>
            </View>
        );
    }
}
export default AddTodo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});