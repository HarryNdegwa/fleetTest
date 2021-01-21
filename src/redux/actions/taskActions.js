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

const checkCurrent = (data) => {
  switch (data.current) {
    case "unStarred":
      return 1;
    case "Starred":
      return 0;
    case "Checked":
      return 2;
    default:
      return;
  }
};

export const deleteTask = (data) => {
  return (dispatch, getState) => {
    const persistedList = getState().listReducer.persistedList;
    const currentList = getState().listReducer.lists[persistedList];
    const tasks = currentList.tasks;

    const affected = checkCurrent(data);

    const s = tasks[affected].filter((task, idx) => {
      return task !== data;
    });

    tasks[affected] = s;

    dispatch({
      type: t.DELETE_TASK,
      data: [...tasks[0], ...tasks[1], ...tasks[2]],
    });
  };
};
