import { connect } from 'react-redux'
// import TodoList from '../components/TodoList'
import { toggleTodo } from '../../../../app/Actions/Todo_actions'
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button
} from "react-native";




export class TodoList extends React.Component{

constructor(props){
    super(props)
}

navi=(item)=>{

  //  console.warn(item)
    this.props.navigateprops.navigate('taskinfo',item)
}

render(){

    return(

        <View style={{ padding: 20 }}>
        {this.props.todos.map(todo =>
        // <View style={{flexDirection:'row',justifyContent:'space-between'}} >
            <TouchableOpacity key={todo.id} style={{flexDirection:'row',justifyContent:'space-between'}}           
            onPress={()=> this.navi(todo) } >
                <Text style={{
                    fontSize: 24,
                    textDecorationLine: todo.completed ? 'line-through' : 'none'
                }}>{todo.text}</Text>
            </TouchableOpacity>
            
         //   {/* <Button title="DONE" onPress={() => this.props.toggleTodo(todo.id)} /> */}
    //    {/* </View> */}
            
        )}
    </View>


    );
            }
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})
console.log('inside VisibleTodos')

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)