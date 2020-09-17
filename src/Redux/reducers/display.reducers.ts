import {
  TOGGLE_DARK_MODE,
  TOGGLE_NAV_BTNS_MENU,
  CHANGE_COLORS,
  CHANGE_SHADE,
  SET_SNACKBAR_MESSAGE,
  HANDLE_SNACKBAR_CLOSE,
} from "../actions";
import { AnyAction } from "redux";
import { defaultColors, defaultShades } from "../../Utils/colors";
import { Color } from "@material-ui/lab";

export const displayState = {
  isDarkMode: null,
  isNavBtnsMenuOpen: false,
  colors: defaultColors,
  shades: defaultShades,
  snackBar: {
    isOpen: false,
    message: "",
    severity: <Color>"info",
  },
};

export const display = (state = displayState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_DARK_MODE: {
      const { isDarkMode } = payload;
      return { ...state, isDarkMode: isDarkMode ?? !state.isDarkMode };
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
      const { message, severity } = payload;
      return { ...state, snackBar: { message, severity, isOpen: true } };
    }
    case HANDLE_SNACKBAR_CLOSE: {
      return { ...state, snackBar: { ...state.snackBar, isOpen: false } };
    }
    default: {
      return state;
    }
  }
};
