import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import { loginReducer } from "./loginReducer";
import { listReducer } from "./listReducer";
import { taskReducer } from "./taskReducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  listReducer: listReducer,
  taskReducer: taskReducer,
});

export default persistReducer(persistConfig, rootReducer);
