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
  return {type: PUBLISH, payload: item};
}

export function cancel_done(item) {
  return {type: PUBLISH_DONE, payload: item};
}


export const CANCEL = 'CANCEL';
export const CANCEL_DONE = 'CANCEL_DONE';

export function cancel(item) {
  return {type: PUBLISH, payload: item};
}

export function cancel_done(item) {
  return {type: PUBLISH_DONE, payload: item};
}
