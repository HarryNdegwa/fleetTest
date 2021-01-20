import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import { loginReducer } from "./loginReducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const rootReducer = combineReducers({ loginReducer: loginReducer });

export default persistReducer(persistConfig, rootReducer);
