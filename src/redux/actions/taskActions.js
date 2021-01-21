import * as t from "./actionsType";

export const setUpTasksArray = (id) => {
  return (dispatch, getState) => {
    console.log(getState());
    console.log(id);
    const tasks = getState().listReducer.lists[id].tasks;
    dispatch({
      type: t.SETUP_TASKS_ARRAY,
      data: tasks.starredTasks.concat(tasks.unstarredTasks, tasks.checkedTasks),
    });
  };
};
