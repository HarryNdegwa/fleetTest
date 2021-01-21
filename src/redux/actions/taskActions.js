import * as t from "./actionsType";

import { updateListTasks } from "../actions/listActions";

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

export const deleteTask = (tasks, data) => {
  return (dispatch) => {
    const s = tasks.filter((task, _idx) => {
      return task !== data;
    });
    dispatch({
      type: t.DELETE_TASK,
      data: s,
    });
    dispatch(updateListTasks(s, data));
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
