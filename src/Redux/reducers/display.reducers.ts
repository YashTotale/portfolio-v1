import { AnyAction } from "redux";
import {
  TOGGLE_DARK_MODE,
  TOGGLE_NAV_BTNS_MENU,
  CHANGE_COLORS,
  CHANGE_SHADE,
} from "../actions/display.actions";
import { defaultColors, defaultShades } from "../../Utils/colors";

export interface DisplayState {
  isDarkMode: boolean | null;
  isNavBtnsMenuOpen: boolean;
  colors: typeof defaultColors;
  shades: typeof defaultShades;
}

export const initialDisplayState: DisplayState = {
  isDarkMode: null,
  isNavBtnsMenuOpen: false,
  colors: defaultColors,
  shades: defaultShades,
};

export const displayReducer = (
  state = initialDisplayState,
  action: AnyAction
): DisplayState => {
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
    default: {
      return state;
    }
  }
};

export const sampleDisplayState: DisplayState = {
  ...initialDisplayState,
};
