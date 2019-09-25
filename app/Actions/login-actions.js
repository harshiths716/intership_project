
import {TYPE_USERNAME,TYPE_PASSWORD,SIGN_IN}  from './ActionTypes'
export const mapStateToProps = (state) => ({
    username: state.TextChanger.username,
    password: state.TextChanger.password
});

export const mapDispatchToProps = (dispatch) => ({
   
   typeusername: (val) => dispatch({type: TYPE_USERNAME,payload:val}),
   typepassword: (val) => dispatch({type:  TYPE_PASSWORD,payload:val}),
   sign_in:()=>dispatch({type:SIGN_IN}),

});
