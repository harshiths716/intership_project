export const SEND_ASSIGNEDEVENTS='SEND_ASSIGNEDEVENTS'
export const RECEIVE_ASSIGNEDEVENTS='RECEIVE_ASSIGNEDEVENTS'
export const ACCEPT_EVENT = 'ACCEPT_EVENT'
export const ACCEPT_EVENT_API='ACCEPT_EVENT_API'
export const assignedEvents_api_hit = val => ({ type: RECEIVE_ASSIGNEDEVENTS ,payload:val});

export const acceptEvents_api_hit = val => ({ type: ACCEPT_EVENT_API ,payload:val});