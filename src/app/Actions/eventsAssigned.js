export const SEND_ASSIGNEDEVENTS='SEND_ASSIGNEDEVENTS'
export const RECEIVE_ASSIGNEDEVENTS='RECEIVE_ASSIGNEDEVENTS'
export const ACCEPT_EVENT = 'ACCEPT_EVENT'
export const REJECT_EVENT = 'REJECT_EVENT'

export const ACCEPT_EVENT_DONE='ACCEPT_EVENT_DONE'

export const REJECT_EVENT_DONE='REJECT_EVENT_DONE'
export const assignedEvents_api_hit = val => ({ type: RECEIVE_ASSIGNEDEVENTS ,payload:val});

// export const acceptEvents = val => ({ type: ACCEPT_EVENT ,payload:val});


export function acceptEvents(val) {
    return { type: ACCEPT_EVENT ,payload:val};
  }
  export function acceptEvents_done(val) {
    return { type: ACCEPT_EVENT_DONE ,payload:val};
  }

  export function rejectEvents(val) {
    return { type: REJECT_EVENT ,payload:val};
  }

  export function rejectEvents_done(val) {
    return { type: REJECT_EVENT_DONE ,payload:val};
  }