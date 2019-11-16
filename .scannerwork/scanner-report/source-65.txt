export const ADD_ORGANIZER='ADD_ORGANIZER'
export const DELETE_ARRAY='DELETE_ARRAY'
export const ADD_SUBTASK='ADD_SUBTASK'

export const ADD_SUBTASK_DONE='ADD_SUBTASK_DONE'
// export const ADD_LISTHOLDER='ADD_LISTHOLDER'

export function addorganizer(val) {
   
    return { type: ADD_ORGANIZER ,payload:val};
  }



export function deletearray(val) {
    return { type: DELETE_ARRAY ,payload:val};
  }

export function addsubtask(val) {
    return { type: ADD_DEADLINE ,payload:val};
  }

export function addsubtask_done(val) {
    return { type: ADD_DEADLINE ,payload:val};
  }


