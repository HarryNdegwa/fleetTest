import * as t from "./actionsType";

export const setUpTasksArray = (id) => {
  return (dispatch, getState) => {
    const tasks =
      getState().listReducer.lists && getState().listReducer.lists[id].tasks;
    dispatch({
      type: t.SETUP_TASKS_ARRAY,
      data: tasks ? [...tasks[0], ...tasks[1], ...tasks[2]] : [],
    });
  };
};
