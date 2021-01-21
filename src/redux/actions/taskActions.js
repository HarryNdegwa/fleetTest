import * as t from "./actionsType";

export const setUpTaskArray = (id) => {
  return (dispatch, getState) => {
    const tasks = getState().listReducer.lists[id].tasks;
    dispatch({
      type: t.SETUP_TASK_ARRAY,
      data: tasks.starredTasks.concat(tasks.unstarredTasks, tasks.checkedTasks),
    });
  };
};
