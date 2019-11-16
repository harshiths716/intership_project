
import { ADD_TODO, TOGGLE_TODO,ADD_SUBTODO,TOGGLE_SUBTODO } from '../Actions/Todo_actionTypes'


const subtodos = (state = [], action) => {
    switch (action.type) {
        case ADD_SUBTODO:
            return [
                ...state, {
                    subid: action.id,
                    subtext: action.text,
                    subcompleted: false
                }
            ]

        case TOGGLE_SUBTODO:
            return state.map(todo =>
                (todo.subid === action.subid)
                    ? { ...todo, subcompleted: !todo.subcompleted } :
                    todo)
        default:
            return state
    }
}

export default subtodos