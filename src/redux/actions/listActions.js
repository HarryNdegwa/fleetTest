import * as t from "./actionsType";

export const saveList = (data) => {
  return (dispatch) => {
    dispatch({ type: t.SAVE_LIST, data: data });
  };
};

export const updateListTasks = (data) => {
  return {
    type: t.UPDATE_LIST_TASKS,
    data: data,
  };
};
