//React Imports
import React from "react";
import Loading from "../../Components/Reusable/Loading/Page";

// Redux Imports
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

//Redux Persist Imports
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

//Redux Devtools Imports
import { composeWithDevTools } from "redux-devtools-extension";

//Redux Thunk Imports
import thunk from "redux-thunk";

//Reducer Imports
import { display, contact, sidebar, snackbar } from "../reducers";

const reducers = {
  display,
  contact,
  sidebar,
  snackbar,
};

const rootReducer = combineReducers(reducers);

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer<any>(persistConfig, rootReducer);

const configuredStore = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(configuredStore);

const ReduxStore: React.FC = (props) => {
  return (
    <Provider store={configuredStore}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxStore;
