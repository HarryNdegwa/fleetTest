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
