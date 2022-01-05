import {userType,signupType,signinType} from './types'

  const initialState = {
    pending: false,
    posts: [],
    error: null,
    isAuthenticate:false
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case signupType.SIGNUP_REQUEST:
        case userType.FETCH_USER_REQUEST:
            case signinType.SIGNIN_REQUEST:
        return {
          ...state,
          pending: true,
          isAuthenticate:false
        };
      case userType.FETCH_USER_SUCCESS:
        case signupType.SIGNUP_SUCCESS:
            case signinType.SIGNIN_SUCCESS:
        return {
          ...state,
          pending: false,
          posts: action.payload.posts,
          isAuthenticate:true
        };
      case userType.FETCH_USER_FAILURE:
        case signupType.SIGNUP_FAILURE:
            case signinType.SIGNIN_FAILURE:
        return {
          ...state,
          pending: false,
          posts: [],
          isAuthenticate:false
        };
      default:
        return {
          ...state
        };
    }
  };