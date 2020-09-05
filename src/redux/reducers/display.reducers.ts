import { TOGGLE_DARK_MODE, TOGGLE_NAV_BTNS_MENU } from "../actions";
import { AnyAction } from "redux";

const initialState = {
  isDarkMode: false,
  isNavBtnsMenuOpen: false,
};

export const display = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_DARK_MODE: {
      return { ...state, isDarkMode: !state.isDarkMode };
    }
    case TOGGLE_NAV_BTNS_MENU: {
      const { isOpen } = payload;
      return {
        ...state,
        isNavBtnsMenuOpen: isOpen ?? !state.isNavBtnsMenuOpen,
      };
    }
    default: {
      return state;
    }
  }
};
