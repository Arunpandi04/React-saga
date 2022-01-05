import {userType,signupType,signinType} from './types'


export const fetchUserRequest = (data)=> ({
    type: userType.FETCH_USER_REQUEST,
    payload: data
  });
  
  export const fetchUserSuccess = (
    payload
  )=> ({
    type: userType.FETCH_USER_SUCCESS,
    payload
  });
  
  export const fetchUserFailure = (
    payload
  )=> ({
    type: userType.FETCH_USER_FAILURE,
    payload
  });


  

  export const signupRequest = ( data )=> ({
    type: signupType.SIGNUP_REQUEST,
    payload: data
  });

  export const signupSuccess = (payload)=> ({
    type: signupType.SIGNUP_SUCCESS,
    payload
  });

  export const signupFailure = (payload)=> ({
    type: signupType.SIGNUP_FAILURE,
    payload
  });


  export const signinRequest = (payload)=> ({
    type: signinType.SIGNIN_REQUEST,
    payload:payload
  });

  export const signinSuccess = (payload)=> ({
    type: signinType.SIGNIN_SUCCESS,
    payload
  });

  export const signinFailure = (payload)=> ({
    type: signinType.SIGNIN_FAILURE,
    payload
  });




