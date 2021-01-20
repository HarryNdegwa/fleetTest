import * as t from "../actions/actionsType";

const initialState = {
  loginLoading: false,
  loginError: "",
  isAuth: false,
  token: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOGIN_LOADING:
      return { ...state, loginLoading: true };
    case t.LOGIN_SUCCESS:
      return { ...state, loginLoading: false, isAuth: true, token: data };
    case t.LOGIN_ERROR:
      return { ...state, loginLoading: false, loginError: data };
    default:
      return;
  }
};
