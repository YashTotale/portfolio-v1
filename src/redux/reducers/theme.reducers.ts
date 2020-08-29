import { TOGGLE_DARK_MODE } from "../actions";
import { AnyAction } from "redux";

const initialState = false;

export const isDarkMode = (state = initialState, action: AnyAction) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_DARK_MODE: {
      return !state;
    }
    default: {
      return state;
    }
  }
};
