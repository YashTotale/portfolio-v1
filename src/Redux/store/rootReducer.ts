import { combineReducers } from "redux";
import { display } from "../reducers";

const reducers = {
  display,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
