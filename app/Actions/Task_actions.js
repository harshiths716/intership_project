export const SEND_ACCEPTED_TASK_EVENTS='SEND_ACCEPTED_TASK_EVENTS'
export const RECEIVE_ACCEPTED_TASK_EVENTS='RECEIVE_ACCEPTED_TASK_EVENTS'

export const assignedEvents_api_hit = val => ({ type: RECEIVE_ASSIGNEDEVENTS ,payload:val});



export function send_accepted_task_events(val) {
    return { type: SEND_ACCEPTED_TASK_EVENTS ,payload:val};
  }




  export function receive_accepted_task_events(val) {
     return { type: RECEIVE_ACCEPTED_TASK_EVENTS ,payload:val};
   }

