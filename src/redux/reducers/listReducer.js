import * as t from "../actions/actionsType";

const initialState = {
  lists: null,
  persistedList: null,
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
        persistedList: action.data,
      };
    case t.UPDATE_PERSISTED_LIST:
      return {
        ...state,
        persistedList: action.data,
      };
    default:
      return state;
  }
};
