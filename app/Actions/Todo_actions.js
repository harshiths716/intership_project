import { ADD_TODO, TOGGLE_TODO,ADD_SUBTODO,TOGGLE_SUBTODO } from './Todo_actionTypes'

let nextId = 0
export const addTodo = (text) => (    console.warn('addtodo'),
{
    type: ADD_TODO,
    id: nextId++,
    text
})

export const addsubTodo = (text) => (   
{
    type: ADD_SUBTODO,
    id: nextId++,
    text
})


export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})


export const subtoggleTodo = (id) => ( console.warn('toggle'),{
    type: TOGGLE_SUBTODO,
    id
})




