import * as t from "../actions/actionsType";

const initialState = {
  lists: null,
  persistedList: null,
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SAVE_LIST:
      return {
        ...state,
        lists: state.lists.push(action.data),
        persistedList: state.lists.length,
      };
    default:
      return state;
  }
};
