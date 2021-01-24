import * as t from "./actionsType";

import { updatePersistedList, updateLists } from "../actions/listActions";
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

    dispatch(updatePersistedList(currentList));
    dispatch(updateLists(currentList));
  };
};

export const addTask = (payload) => {
  return (dispatch, getState) => {
    const currentList = getState().listReducer.persistedList;
    currentList.tasks[1].unshift(payload);

    dispatch(updatePersistedList(currentList));
    dispatch(updateLists(currentList));
  };
};
