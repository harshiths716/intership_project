export const ADD_TASK='ADD_TASK'
// export const RECEIVE_ASSIGNEDEVENTS='RECEIVE_ASSIGNEDEVENTS'
// export const ACCEPT_EVENT = 'ACCEPT_EVENT'
// export const REJECT_EVENT = 'REJECT_EVENT'

// export const ACCEPT_EVENT_DONE='ACCEPT_EVENT_DONE'

// export const REJECT_EVENT_DONE='REJECT_EVENT_DONE'
// export const assignedEvents_api_hit = val => ({ type: RECEIVE_ASSIGNEDEVENTS ,payload:val});

// export const acceptEvents = val => ({ type: ACCEPT_EVENT ,payload:val});


export function addtask(val) {
    console.warn('inside ADD_TASK');
    return { type: ADD_TASK ,payload:val};
  }
//   export function acceptEvents_done(val) {
//     console.warn('inside acceptEvents');
//     return { type: ACCEPT_EVENT_DONE ,payload:val};
//   }

//   export function rejectEvents(val) {
//     console.warn('inside rejectEvents');
//     return { type: REJECT_EVENT ,payload:val};
//   }

//   export function rejectEvents_done(val) {
//     console.warn('inside rejectEvents done');
//     return { type: REJECT_EVENT_DONE ,payload:val};
//   }