
import { RECEIVE_ACCEPTED_TASK_EVENTS } from '../Actions/Task_actions'


const Task = (state = {acceptedevents:''}, action) => {
    switch (action.type) {
        case RECEIVE_ACCEPTED_TASK_EVENTS:
            return  {
                ...state,
                acceptedevents: action.payload,
              };
        default:
            return state
    }
}

export default Task