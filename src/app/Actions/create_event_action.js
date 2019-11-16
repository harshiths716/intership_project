export const CREATE_EVENT_API = 'CREATE_EVENT_API';
export const CREATE_EVENT_API_DONE = 'CREATE_EVENT_API_DONE';

export function create_event(item) {
  return {type: CREATE_EVENT_API, payload: item};
}

export function create_event_done(item) {
  return {type: CREATE_EVENT_API_DONE, payload: item};
}

export const SEND_USER_DETAILS = 'SEND_USER_DETAILS';
export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS';

export function sendUserDetails(item) {
  return {type: SEND_USER_DETAILS, payload: item};
}

export function receiveUserDetails(item) {
  return {type: RECEIVE_USER_DETAILS, payload: item};
}
