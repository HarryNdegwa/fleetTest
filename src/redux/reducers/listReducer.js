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
    case t.UPDATE_LIST_TASKS:
      return {
        ...state,
        lists: state.lists.map((list, idx) => {
          if (idx === state.persistedList) {
            return (list.tasks[action.data.id] = action.data.data);
          }
          return list;
        }),
      };
    default:
      return state;
  }
};
