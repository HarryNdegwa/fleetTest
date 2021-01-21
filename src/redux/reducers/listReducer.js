import * as t from "../actions/actionsType";

const initialState = {
  lists: null,
  persistedList: -1,
};

const checkLists = (lists, data) => {
  if (lists) {
    lists.push(data);
  } else {
    lists = [];
    lists.push(data);
  }
  return lists;
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SAVE_LIST:
      return {
        ...state,
        lists: checkLists(state.lists, action.data),
        persistedList: state.persistedList + 1,
      };
    default:
      return state;
  }
};
