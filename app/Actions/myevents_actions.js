
export const ORGANIZED_EVENT = 'ORGANIZED_EVENT'
export const PARTICIPATED_EVENT = 'PARTICIPATED_EVENT'

export const ORGANIZED_EVENT_DONE='ORGANIZED_EVENT_DONE'

export const PARTICIPATED_EVENT_DONE='PARTICIPATED_EVENT_DONE'
// export const assignedEvents_api_hit = val => ({ type: RECEIVE_ASSIGNEDEVENTS ,payload:val});

// export const acceptEvents = val => ({ type: ACCEPT_EVENT ,payload:val});


export function organized_events(val) {
    console.warn('inside organized_events');
    return { type: ORGANIZED_EVENT ,payload:val};
  }
  export function organized_events_done(val) {
    console.warn('inside organized_events done');
    return { type: ORGANIZED_EVENT_DONE ,payload:val};
  }

  export function participated_events(val) {
    console.warn('inside acceptEvents');
    return { type: PARTICIPATED_EVENT ,payload:val};
  }

  export function participated_events_done(val) {
    console.warn('inside acceptEvents');
    return { type: PARTICIPATED_EVENT_DONE ,payload:val};
  }