import { handleActions } from "redux-actions";
import * as api from "../lib/api";

// 액션 타입을 선언한다.
// 한 요청당 세 개를 만들어야 한다.
const GET_POST = "sample/GET_POS";
const GET_POST_SUCCESS = "sample/GET_POS_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POS_FAILURE";

const GET_USER = "sample/GET_USER";
const GET_USER_SUCCESS = "sample/GET_USER_SUCCESS";
const GET_USER_FAILURE = "sample/GET_USER_FAILURE";

// thunk 함수를 생성한다.
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치한다.

export const getPost = id => async dispatch => {};
