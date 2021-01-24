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

export const logout = () => {
  return {
    type: t.LOGOUT,
  };
};

export const persistAuthData = (data) => {
  return {
    type: t.PERSIST_AUTH_DATA,
    data: data,
  };
};

export const loginThunkAction = (data) => {
  return (dispatch) => {
    dispatch(loginStart());
    axios
      .post("https://reqres.in/api/login", data)
      .then((res) => {
        dispatch(loginSuccess(res.data.token));
        dispatch(persistAuthData(data));
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
};
