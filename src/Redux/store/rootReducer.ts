import { combineReducers } from "redux";
import { display, contact } from "../reducers";

const reducers = {
  display,
  contact,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
