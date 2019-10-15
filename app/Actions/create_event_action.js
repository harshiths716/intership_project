export const SEND_USER_DETAILS='SEND_USER_DETAILS'
export const RECEIVE_USER_DETAILS='RECEIVE_USER_DETAILS'


export function sendUserDetails(item) {
   console.warn('sendUserDetails');
    return {type: SEND_USER_DETAILS, payload: item};
  }



export function receiveUserDetails(item) {
     console.warn('inside receiveUserDetails');
     return {type:RECEIVE_USER_DETAILS, payload: item};
   }