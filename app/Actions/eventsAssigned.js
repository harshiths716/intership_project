export const SEND_ASSIGNEDEVENTS='SEND_ASSIGNEDEVENTS'
export const RECEIVE_ASSIGNEDEVENTS='RECEIVE_ASSIGNEDEVENTS'

export const assignedEvents_api_hit = val => ({ type: RECEIVE_ASSIGNEDEVENTS ,payload:val});