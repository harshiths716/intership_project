export const GET_DESIGNATION_DONE='GET_DESIGNATION_DONE'
export const GET_DESIGNATION='GET_DESIGNATION'

export function get_designation_api(val) {
    return { type: GET_DESIGNATION ,payload:val};
  }

  export function get_designation_api_done(val) {
    return { type: GET_DESIGNATION_DONE,payload:val};
  }



  export const SEND_INVITES='SEND_INVITES'
export const SEND_INVITE_API_DONE='SEND_INVITE_API_DONE'

export function send_invites(val) {
    return { type: SEND_DONE ,payload:val};
  }

  export function send_invite_done(val) {
    return { type: SEND_INVITE_API_DONE,payload:val};
  }



  