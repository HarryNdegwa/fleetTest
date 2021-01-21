import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import { loginReducer } from "./loginReducer";
import { listReducer } from "./listReducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  listReducer: listReducer,
});

export default persistReducer(persistConfig, rootReducer);
