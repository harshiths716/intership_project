export const GET_DESIGNATION_DONE='GET_DESIGNATION_DONE'
export const GET_DESIGNATION='GET_DESIGNATION'

export function get_designation_api(val) {
    return { type: GET_DESIGNATION ,payload:val};
  }

  export function get_designation_api_done(val) {
    return { type: GET_DESIGNATION_DONE,payload:val};
  }