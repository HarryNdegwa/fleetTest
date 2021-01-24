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

const registerError = (error) => {
  return {
    type: t.REGISTER_ERROR,
    data: error,
  };
};
const registerStart = () => {
  return {
    type: t.REGISTER_LOADING,
  };
};

const registerSuccess = (data) => {
  return {
    type: t.REGISTER_SUCCESS,
    data: data,
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
export const registerThunkAction = (data) => {
  return (dispatch) => {
    dispatch(registerStart());
    axios
      .post("https://reqres.in/api/register", data)
      .then((res) => {
        dispatch(registerSuccess(res.data.token));
        dispatch(persistAuthData(data));
      })
      .catch((error) => {
        dispatch(registerError(error));
      });
  };
};
