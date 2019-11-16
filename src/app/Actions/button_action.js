export const UPLOAD = 'UPLOAD';
export const UPLOAD_DONE = 'UPLOAD_DONE';

export function upload(item) {
  return {type: UPLOAD, payload: item};
}

export function upload_done(item) {
  return {type: UPLOAD_DONE, payload: item};
}


export const PUBLISH = 'PUBLISH';
export const PUBLISH_DONE = 'PUBLISH_DONE';

export function publish(item) {
  return {type: PUBLISH, payload: item};
}

export function publish_done(item) {
  return {type: PUBLISH_DONE, payload: item};
}


export const CANCEL = 'CANCEL';
export const CANCEL_DONE = 'CANCEL_DONE';

export function cancel(item) {
  return {type: CANCEL, payload: item};
}

export function cancel_done(item) {
  return {type: CANCEL_DONE, payload: item};
}


export const CLEAR_RESPONSE = 'CLEAR_RESPONSE';
export function clear_response(item) {
  return {type:CLEAR_RESPONSE, payload: item};
}




export const JOIN = 'JOIN';
export const JOIN_DONE = 'JOIN_DONE';

export function join(item) {
  return {type: JOIN, payload: item};
}

export function join_done(item) {
  return {type: JOIN_DONE, payload: item};
}



export const WITHDRAW = 'WITHDRAW';
export const WITHDRAW_DONE = 'WITHDRAW_DONE';

export function withdraw(item) {
  return {type: WITHDRAW, payload: item};
}

export function withdraw_done(item) {
  return {type: WITHDRAW_DONE, payload: item};
}