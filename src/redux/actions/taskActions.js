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

export const deleteTask = (tasks, data) => {
  return (dispatch) => {
    const s = tasks.filter((task, _idx) => {
      return task !== data;
    });
    dispatch({
      type: t.DELETE_TASK,
      data: s,
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
