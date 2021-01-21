import * as t from "../actions/actionsType";

const initialState = {
  tasks: null,
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SETUP_TASKS_ARRAY:
      return { ...state, tasks: action.data };
    default:
      return state;
  }
};
