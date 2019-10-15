export const SEND_ASSIGNEDEVENTS='SEND_ASSIGNEDEVENTS'
export const RECEIVE_ASSIGNEDEVENTS='RECEIVE_ASSIGNEDEVENTS'
export const ACCEPT_EVENT = 'ACCEPT_EVENT'
export const ACCEPT_EVENT_DONE='ACCEPT_EVENT_DONE'
export const assignedEvents_api_hit = val => ({ type: RECEIVE_ASSIGNEDEVENTS ,payload:val});

// export const acceptEvents = val => ({ type: ACCEPT_EVENT ,payload:val});


export function acceptEvents(val) {
    console.warn('inside acceptEvents');
    return { type: ACCEPT_EVENT ,payload:val};
  }
  export function acceptEvents_done(val) {
    console.warn('inside acceptEvents');
    return { type: ACCEPT_EVENT_DONE ,payload:val};
  }