import axios from "axios";
import * as t from "../actions/actionsType";

const loginStart = () => {
  return {
    type: t.LOGIN_LOADING,
  };
};

const loginSuccess = (data) => {
  return {
    type: t.LOGIN_SUCCESS,
    data: data,
  };
};

const loginError = (error) => {
  return {
    type: t.LOGIN_ERROR,
    data: error,
  };
};

export const loginThunkAction = (data) => {
  return (dispatch) => {
    dispatch(loginStart());
    axios
      .post("https://reqres.in/api/login", data)
      .then((res) => {
        dispatch(loginSuccess(res.data.token));
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
};
