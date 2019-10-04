// import React from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     TouchableOpacity,
//     Button
// } from "react-native";

// const TodoList = ({ todos, toggleTodo }) => (
//     <View style={{ padding: 20 }}>
//         {todos.map(todo =>
//         <View style={{flexDirection:'row',justifyContent:'space-between'}} >
//             <TouchableOpacity key={todo.id} style={{flexDirection:'row',justifyContent:'space-between'}}>
//                 <Text style={{
//                     fontSize: 24,
//                     textDecorationLine: todo.completed ? 'line-through' : 'none'
//                 }}>{todo.text}</Text>
                
//             </TouchableOpacity>
            
//             <Button title="DONE" onPress={() => toggleTodo(todo.id)} />
//         </View>
            
//         )}
//     </View>
// )
// export default TodoList;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });