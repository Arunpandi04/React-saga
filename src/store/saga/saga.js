import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  fetchUserFailure,
  fetchUserSuccess,
  signupFailure,
  signupSuccess,
  signinFailure,
  signinSuccess,

} from "../saga/Action";

import {userType,signupType,signinType} from './types'

const getPosts = (id) =>
  axios.get(`https://secure-shore-10480.herokuapp.com/user/${id}`);

  const signin =(data) =>
  axios.post('https://secure-shore-10480.herokuapp.com/signin',data)


  const signup = (data) =>
  axios.post('https://secure-shore-10480.herokuapp.com/signup',data);



function* fetchPostsSaga(action) {
  try {
    const response = yield call(getPosts,action.payload)
    yield put(
      fetchUserSuccess({
        posts: response.data.data
      })
    );
  } catch (e) {
    yield put(
        fetchUserFailure({
        error: e.message
      })
    );
  }
}


function* siginSaga(action) {
    try {
      const response = yield call(signin,action.payload);
      localStorage.setItem("token", JSON.stringify(response?.data.token))
      localStorage.setItem("id", JSON.stringify(response?.data?.data._id))
      localStorage.setItem("Auth",true)
      yield put(
        signinSuccess({
          posts: response.data.data
        })
      );
    } catch (e) {
      yield put(
        signinFailure({
          error: e.message
        })
      );
    }
  }

  function* signupSaga(action) {
    try {
      const response = yield call(signup,action.payload.post);
      localStorage.setItem("token", JSON.stringify(response?.data.token))
      localStorage.setItem("id", JSON.stringify(response?.data?.data._id))
      localStorage.setItem("Auth",true)
      yield put(
        signupSuccess({
          posts: response.data.data
        })
      );
    } catch (e) {
      yield put(
        signupFailure({
          error: e.message
        })
      );
    }
  }


function* postsSaga() {
  yield all([
    takeEvery(signinType.SIGNIN_REQUEST, siginSaga),
    takeEvery(userType.FETCH_USER_REQUEST, fetchPostsSaga),
    takeEvery(signupType.SIGNUP_REQUEST, signupSaga)
]);
}

export default postsSaga;