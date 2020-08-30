import { TOGGLE_DARK_MODE } from "../actions";
import { AnyAction } from "redux";

const initialState = {
  isDarkMode: false,
};

export const display = (state = initialState, action: AnyAction) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_DARK_MODE: {
      return { ...state, isDarkMode: !state.isDarkMode };
    }
    default: {
      return state;
    }
  }
};
