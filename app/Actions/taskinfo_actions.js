export const ADD_ORGANIZER='ADD_ORGANIZER'
export const DELETE_ARRAY='DELETE_ARRAY'

 export const ADD_DEADLINE='ADD_DEADLINE'
 export const ADD_BUDGET='ADD_BUDGET'
 export const ADD_LISTHOLDER='ADD_LISTHOLDER'

export function addorganizer(val) {
    console.warn('inside ADD_TASK');
    return { type: ADD_ORGANIZER ,payload:val};
  }



  export function deletearray(val) {
    console.warn('inside delete array');
    return { type: DELETE_ARRAY ,payload:val};
  }

//   export function adddeadline(val) {
//     console.warn('inside ADD_TASK');
//     return { type: ADD_DEADLINE ,payload:val};
//   }
//   export function addbudget(val) {
//     console.warn('inside ADD_TASK');
//     return { type: ADD_BUDGET ,payload:val};
//   }
//   export function addlistHolder(val) {
//     console.warn('inside ADD_TASK');
//     return { type: ADD_LISTHOLDER ,payload:val};
//   }
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