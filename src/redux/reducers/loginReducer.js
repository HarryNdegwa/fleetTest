import * as t from "../actions/actionsType";

const initialState = {
  loginLoading: false,
  loginError: "",
  registerLoading: false,
  registerError: "",
  isAuth: false,
  token: "",
  e: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOGIN_LOADING:
      return { ...state, loginLoading: true };
    case t.LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        isAuth: true,
        token: action.data,
      };
    case t.LOGIN_ERROR:
      return { ...state, loginLoading: false, loginError: action.data };
    case t.LOGOUT:
      return { ...state, isAuth: false };
    case t.REGISTER_LOADING:
      return { ...state, registerLoading: true };
    case t.REGISTER_SUCCESS:
      return {
        ...state,
        registerLoading: false,
        isAuth: true,
        token: action.data,
      };
    case t.REGISTER_ERROR:
      return { ...state, registerLoading: false, registerError: action.data };
    case t.PERSIST_AUTH_DATA:
      return { ...state, authData: action.data };
    default:
      return state;
  }
};
