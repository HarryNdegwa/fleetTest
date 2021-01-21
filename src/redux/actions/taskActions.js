import * as t from "./actionsType";

const joinTaskArrays = (tasks) => {
  return [...tasks[0], ...tasks[1], ...tasks[2]];
};

export const setUpTasksArray = (data, id) => {
  if (data) {
    return (dispatch) => {
      dispatch({
        type: t.SETUP_TASKS_ARRAY,
        data: joinTaskArrays(data[id].tasks),
      });
    };
  } else {
    return (dispatch) => {
      dispatch({
        type: t.SETUP_TASKS_ARRAY,
        data: null,
      });
    };
  }
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

export const addTask = (data, payload) => {
  return (dispatch, getState) => {
    const tasks = getState().taskReducer.tasks;
    const tasks1 = [payload, ...data];

    dispatch({
      type: t.ADD_TASK,
      data: [tasks[0], tasks1, tasks[2]],
    });
  };
};
