//Redux Persist Imports
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import rootReducer from "./rootReducer";

//The configuration for the persisted reducer
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

//@ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
