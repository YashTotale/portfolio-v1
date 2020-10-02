import { Color } from "@material-ui/lab";
import { cssColor, scheme, shade } from "../../Utils/colors";

//Toggle Dark Mode

export interface ToggleDarkModePayload {
  type: typeof TOGGLE_DARK_MODE;
  payload: {};
}

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const toggleDarkMode = (
  isDarkMode?: boolean
): ToggleDarkModePayload => ({
  type: TOGGLE_DARK_MODE,
  payload: {
    isDarkMode,
  },
});

//Toggle Nav Btns Menu

export interface ToggleNavBtnsMenuPayload {
  type: typeof TOGGLE_NAV_BTNS_MENU;
  payload: { isOpen?: boolean };
}

export const TOGGLE_NAV_BTNS_MENU = "TOGGLE_NAV_BTNS_MENU";
export const toggleNavBtnsMenu = (
  isOpen?: boolean
): ToggleNavBtnsMenuPayload => ({
  type: TOGGLE_NAV_BTNS_MENU,
  payload: { isOpen },
});

//Change colors

export interface ChangeColorsPayload {
  type: string;
  payload: {
    scheme: scheme;
    color: string;
  };
}

export const CHANGE_COLORS = "CHANGE_COLORS";
export const changeColors = (
  scheme: scheme,
  color: cssColor
): ChangeColorsPayload => ({
  type: CHANGE_COLORS,
  payload: { scheme, color },
});

//Change shade

export interface ChangeShadePayload {
  type: string;
  payload: { shade: shade; scheme: scheme };
}

export const CHANGE_SHADE = "CHANGE_SHADE";
export const changeShade = (
  scheme: scheme,
  shade: shade
): ChangeShadePayload => ({
  type: CHANGE_SHADE,
  payload: { scheme, shade },
});

//Toggle Snackbar

export interface SetSnackbarMessagePayload {
  type: string;
  payload: { message: string; severity: Color; color: string | null };
}

export const SET_SNACKBAR_MESSAGE = "SET_SNACKBAR_MESSAGE";
export const setSnackbarMessage = (
  message: string = "",
  severity: Color,
  color: string | null
): SetSnackbarMessagePayload => ({
  type: SET_SNACKBAR_MESSAGE,
  payload: { message, severity, color },
});

//Handle Snackbar close

export interface HandleSnackbarClosePayload {
  type: string;
  payload: {};
}

export const HANDLE_SNACKBAR_CLOSE = "HANDLE_SNACKBAR_CLOSE";
export const handleSnackbarClose = (): HandleSnackbarClosePayload => ({
  type: HANDLE_SNACKBAR_CLOSE,
  payload: {},
});
