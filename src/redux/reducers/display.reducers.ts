import {
  TOGGLE_DARK_MODE,
  TOGGLE_NAV_BTNS_MENU,
  CHANGE_COLORS,
  CHANGE_SHADE,
} from "../actions";
import { AnyAction } from "redux";
import { defaultColors, defaultShades } from "../../Utils/colors";
import { TOGGLE_SNACKBAR } from "../actions/display.actions";

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
    case TOGGLE_SNACKBAR: {
      const { isOpen, message } = payload;
      return { ...state, snackBar: { isOpen, message } };
    }
    default: {
      return state;
    }
  }
};
