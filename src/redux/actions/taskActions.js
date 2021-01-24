import * as t from "./actionsType";

import { updatePersistedList } from "../actions/listActions";
import { checkCurrent } from "./listActions";

const joinTaskArrays = (tasks) => {
  return [...tasks[0], ...tasks[1], ...tasks[2], ...tasks[0]];
};

export const setUpTasksArray = (data, id) => {
  if (data) {
    return (dispatch, getState) => {
      const task = getState().listReducer.persistedList;
      dispatch({
        type: t.SETUP_TASKS_ARRAY,
        data: joinTaskArrays(task.tasks),
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

export const deleteTask = (data) => {
  return (dispatch, getState) => {
    const currentList = getState().listReducer.persistedList;
    const containerId = checkCurrent(data);
    const taskContainer = currentList.tasks[containerId];
    const newTaskContainer = taskContainer.filter((task) => {
      return task.id !== data.id;
    });
    currentList.tasks[containerId] = newTaskContainer;
    currentList.tasks[3].push(data);
    // const s = tasks.filter((task, _idx) => {
    //   return task !== data;
    // });
    // dispatch({
    //   type: t.DELETE_TASK,
    //   data: s,
    // });
    // dispatch(updatePersistedList(s, data));
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
