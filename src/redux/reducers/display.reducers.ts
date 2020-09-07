import {
  TOGGLE_DARK_MODE,
  TOGGLE_NAV_BTNS_MENU,
  CHANGE_COLORS,
  CHANGE_SHADE,
  SET_SNACKBAR_MESSAGE,
} from "../actions";
import { AnyAction } from "redux";
import { defaultColors, defaultShades } from "../../Utils/colors";

export const displayState = {
  isDarkMode: false,
  isNavBtnsMenuOpen: false,
  colors: defaultColors,
  shades: defaultShades,
  snackBar: {
    isOpen: false,
    message: "",
  },
};

export const display = (state = displayState, action: AnyAction) => {
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
    case CHANGE_COLORS: {
      const { scheme, color } = payload;
      return { ...state, colors: { ...state.colors, [scheme]: color } };
    }
    case CHANGE_SHADE: {
      const { shade, scheme } = payload;
      return { ...state, shades: { ...state.shades, [scheme]: shade } };
    }
    case SET_SNACKBAR_MESSAGE: {
      const { isOpen, message } = payload;
      return { ...state, snackBar: { isOpen, message } };
    }
    default: {
      return state;
    }
  }
};
