import { TOGGLE_DARK_MODE } from "../actions";
import { AnyAction } from "redux";

const initialState = null;

export const theme = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_DARK_MODE: {
      const { isDarkMode } = payload;
      return isDarkMode;
    }
    default: {
      return state;
    }
  }
};
