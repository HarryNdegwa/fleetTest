import * as t from "./actionsType";

import { updatePersistedList, updateLists } from "../actions/listActions";
import { checkCurrent } from "./listActions";

const joinTaskArrays = (tasks) => {
  return [...tasks[0], ...tasks[1]];
};

export const setUpTasksArray = (data) => {
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

export const checkTask = (data) => {
  return (dispatch, getState) => {
    const currentList = getState().listReducer.persistedList;
    const containerId = checkCurrent(data);
    const taskContainer = currentList.tasks[containerId];
    const newTaskContainer = taskContainer.filter((task) => {
      return task.id !== data.id;
    });
    data.checked = true;
    data.current = "Checked";
    currentList.tasks[2].unshift(data);
    currentList.tasks[containerId] = newTaskContainer;

    dispatch(updatePersistedList(currentList));
    dispatch(updateLists(currentList));
  };
};

export const unCheckTask = (data) => {
  return (dispatch, getState) => {
    const currentList = getState().listReducer.persistedList;
    const containerId = checkCurrent(data);
    const taskContainer = currentList.tasks[containerId];
    const newTaskContainer = taskContainer.filter((task) => {
      return task.id !== data.id;
    });
    data.checked = false;
    const wasStarred = data.starred;
    if (wasStarred) {
      currentList.tasks[0].unshift(data);
      data.current = "Starred";
    } else {
      currentList.tasks[1].unshift(data);
      data.current = "UnStarred";
    }
    currentList.tasks[containerId] = newTaskContainer;

    dispatch(updatePersistedList(currentList));
    dispatch(updateLists(currentList));
  };
};

export const starTask = (data) => {
  return (dispatch, getState) => {
    const currentList = getState().listReducer.persistedList;
    const containerId = checkCurrent(data);
    const taskContainer = currentList.tasks[containerId];
    const newTaskContainer = taskContainer.filter((task) => {
      return task.id !== data.id;
    });
    print(newTaskContainer);
    data.current = "Starred";
    currentList.tasks[0].unshift(data);
    currentList.tasks[containerId] = newTaskContainer;

    dispatch(updatePersistedList(currentList));
    dispatch(updateLists(currentList));
  };
};

export const unStarTask = (data) => {
  return (dispatch, getState) => {
    const currentList = getState().listReducer.persistedList;
    const containerId = checkCurrent(data);
    const taskContainer = currentList.tasks[containerId];
    const newTaskContainer = taskContainer.filter((task) => {
      return task.id !== data.id;
    });
    data.checked = false;
    const wasStarred = data.starred;
    if (wasStarred) {
      currentList.tasks[0].unshift(data);
      data.current = "Starred";
    } else {
      currentList.tasks[1].unshift(data);
      data.current = "UnStarred";
    }
    currentList.tasks[containerId] = newTaskContainer;

    dispatch(updatePersistedList(currentList));
    dispatch(updateLists(currentList));
  };
};
