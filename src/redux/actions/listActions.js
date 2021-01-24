import * as t from "./actionsType";
import { v1 as uuidv1 } from "uuid";

export const saveList = (data) => {
  return (dispatch) => {
    dispatch({ type: t.SAVE_LIST, data: data });
  };
};

export const checkCurrent = (data) => {
  switch (data.current) {
    case "UnStarred":
      return 1;
    case "Starred":
      return 0;
    case "Checked":
      return 2;
    default:
      return;
  }
};

export const updatePersistedList = (data) => {
  return {
    type: t.UPDATE_PERSISTED_LIST,
    data: data,
  };
};

export const updateLists = (data) => {
  return {
    type: t.UPDATE_LISTS,
    data: data,
  };
};

export const persistListWrapper = (id) => {
  return (dispatch, getState) => {
    let list = null;
    const lists = getState().listReducer.lists;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id === id) {
        list = lists[i];
      }
    }
    dispatch({
      type: t.PERSIST_LIST,
      data: list,
    });
  };
};

export const deleteListWrapper = (id) => {
  return (dispatch, getState) => {
    const lists = getState().listReducer.lists.map((list, idx) => {
      if (list.id !== id) {
        return list;
      }
    });
    dispatch({
      type: t.DELETE_LIST,
      data: lists,
    });
  };
};

export const cloneList = () => {
  return (dispatch, getState) => {
    const toCloneList = getState().listReducer.persistedList;
    const newList = { ...toCloneList };
    newList.listName = "Duplicate " + toCloneList.listName;
    newList.id = uuidv1();
    dispatch({ type: t.ADD_CLONED_LIST, data: newList });
    dispatch({
      type: t.PERSIST_LIST,
      data: newList,
    });
  };
};
