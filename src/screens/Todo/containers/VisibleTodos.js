import {connect} from 'react-redux';
// import TodoList from '../components/TodoList';
import {toggleTodo} from '../../../../app/Actions/Todo_actions';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import TodoList from '../components/TodoList';

 class VisibleTodos extends React.Component{

    constructor(props){
        super(props)
    }
    
   

    navi=(item)=>{

         
          this.props.navigateprops.navigate('taskinfo',item)
      }

    
    render(){
    

        return(


            <TodoList
            todos={this.props.todos}
            toggleTodo={this.props.toggleTodo}
           // navigateprops={this.props.navigateprops}
            navi={this.navi}
            />
    
        //     <View style={{ flex:1,padding: 20 }}>
        //    {/* <TodoList todos={this.props.todos} toggleTodo={this.props.toggleTodo}  navigateprops={this.props.navigateprops}/> */}
        
        //    { this.props.todos.map(todo =>
        //     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        //     <TouchableOpacity
        //       key={todo.id}
        //       style={{flexDirection: 'row', justifyContent: 'space-between'}}
        //       onPress={() => this.navi(todo)}>
        //       <Text
        //         style={{
        //           fontSize: 24,
        //           textDecorationLine: todo.completed ? 'line-through' : 'none',
        //         }}>
        //         {todo.text}
        //       </Text>
        //     </TouchableOpacity>
    
        //     <Button title="DONE" onPress={() => this.props.toggleTodo(todo.id)} />
        //   </View>
                
        //     )}
        // </View>
        
        
    
    
        );
                }
    }
    
const mapStateToProps = state => ({
  todos: state.todos,
  // navigateprops:this.props.navigateprops
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisibleTodos);
