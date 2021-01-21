import * as t from "./actionsType";

export const saveList = (data) => {
  return (dispatch) => {
    dispatch({ type: t.SAVE_LIST, data: data });
  };
};
