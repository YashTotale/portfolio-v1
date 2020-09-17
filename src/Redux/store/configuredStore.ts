//Redux Imports
import { createStore, applyMiddleware } from "redux";
import persistedReducer from "./persistedReducer";

//Redux Thunk Imports
import thunk from "redux-thunk";

//Redux Devtools Imports
import { composeWithDevTools } from "redux-devtools-extension";

const configuredStore = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default configuredStore;
