import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'
import { addTodo } from '../../../../app/Actions/Todo_actions'
class AddTodo extends Component {
constructor(props){
    super(props)

    this.state = {
        text: ''
    }
}
   

    addTodo = (text) => {
        //redux store 
        this.props.dispatch(addTodo(text))
        this.setState({ text: '' })
    }

    render() {
     //   console.log('inside AddTodo')

        return (
            <View style={{ flexDirection: 'row',marginHorizontal: 20}}>
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="Eg. Create New Video"
                    style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }}
                />
                <TouchableOpacity 
                
                style={{justifyContent:'center'}}
                onPress={() => this.addTodo(this.state.text)}>
                   
                    <Text style={{fontSize:35}}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}); 