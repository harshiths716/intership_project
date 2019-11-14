import React from 'react';
import { TouchableOpacity,View,Text,Button } from "react-native";
const listdata = (props) => {
  return (
    <View style={{flex: 1, padding: 20}}>
      {/* <TodoList todos={props.todos} toggleTodo={props.toggleTodo}  navigateprops={props.navigateprops}/> */}

      {props.todos.map(todo => (
        <View   key={todo.id} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            key={todo.id}
            style={{flexDirection: 'row', justifyContent: 'space-between'}}
            onPress={() => props.navi(todo)}>
            <Text
              style={{
                fontSize: 24,
                textDecorationLine: todo.completed ? 'line-through' : 'none',
              }}>
              {todo.text}
            </Text>
          </TouchableOpacity>

          {/* <Button title="DONE" onPress={() => props.toggleTodo(todo.id)} /> */}
        </View>
      ))}
    </View>
  );
};
export default listdata;
