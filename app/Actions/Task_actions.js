export const SEND_ACCEPTED_TASK_EVENTS='SEND_ACCEPTED_TASK_EVENTS'
export const RECEIVE_ACCEPTED_TASK_EVENTS='RECEIVE_ACCEPTED_TASK_EVENTS'
export const ADD_TASK_API='ADD_TASK_API'
export const ADD_TASK_API_DONE='ADD_TASK_API_DONE'

export const GET_TASK_API='GET_TASK_API'
export const GET_TASK_API_DONE='GET_TASK_API_DONE'



export const ADD_SUBTASK_API='ADD_SUBTASK_API'
export const ADD_SUBTASK_API_DONE='ADD_SUBTASK_API_DONE'


export const assignedEvents_api_hit = val => ({ type: RECEIVE_ASSIGNEDEVENTS ,payload:val});



export function send_accepted_task_events(val) {
    return { type: SEND_ACCEPTED_TASK_EVENTS ,payload:val};
  }
  export function receive_accepted_task_events(val) {
     return { type: RECEIVE_ACCEPTED_TASK_EVENTS ,payload:val};
   }




export function get_task_api(val) {
    return { type: GET_TASK_API ,payload:val};
  }

  export function get_task_api_done(val) {
    return { type: GET_TASK_API_DONE,payload:val};
  }

  export function add_task_api(val) {
    return { type: ADD_TASK_API ,payload:val};
  }

  export function add_task_api_done(val) {
    return { type: ADD_TASK_API_DONE,payload:val};
  }

  export function add_subtask_api(val) {
    return { type: ADD_SUBTASK_API ,payload:val};
  }

  export function add_subtask_api_done(val) {
    return { type: ADD_SUBTASK_API_DONE,payload:val};
  }