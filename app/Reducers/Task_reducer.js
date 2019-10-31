
import { RECEIVE_ACCEPTED_TASK_EVENTS,ADD_TASK_API_DONE,GET_TASK_API_DONE,ADD_SUBTASK_API_DONE } from '../Actions/Task_actions'


const Task = (state = {acceptedevents:'',tasksent:'',taskdetails:'',subtasksent:''}, action) => {
    switch (action.type) {
        case RECEIVE_ACCEPTED_TASK_EVENTS:
            return  {
                ...state,
                acceptedevents: action.payload,
              };
              case ADD_TASK_API_DONE:
              return  {
                ...state,
                tasksent: action.payload,
              };
              case ADD_SUBTASK_API_DONE:
              return  {
                ...state,
                subtasksent: action.payload,
              };
              case GET_TASK_API_DONE:
              return  {
                ...state,
                taskdetails: action.payload,
              };
        default:
            return state
    }
}

export default Task