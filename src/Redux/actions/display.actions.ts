import { Color } from "@material-ui/lab";
import { cssColor, scheme, shade } from "../../Utils/colors";

//Toggle Dark Mode

export interface ItoggleDarkMode {
  type: typeof TOGGLE_DARK_MODE;
  payload: {};
}

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const toggleDarkMode = (isDarkMode?: boolean): ItoggleDarkMode => ({
  type: TOGGLE_DARK_MODE,
  payload: {
    isDarkMode,
  },
});

//Toggle Nav Btns Menu

export interface ItoggleNavBtnsMenu {
  type: typeof TOGGLE_NAV_BTNS_MENU;
  payload: { isOpen?: boolean };
}

export const TOGGLE_NAV_BTNS_MENU = "TOGGLE_NAV_BTNS_MENU";
export const toggleNavBtnsMenu = (isOpen?: boolean): ItoggleNavBtnsMenu => ({
  type: TOGGLE_NAV_BTNS_MENU,
  payload: { isOpen },
});

//Change colors

export interface IchangeColors {
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
): IchangeColors => ({
  type: CHANGE_COLORS,
  payload: { scheme, color },
});

//Change shade

export interface IchangeShade {
  type: string;
  payload: { shade: shade; scheme: scheme };
}

export const CHANGE_SHADE = "CHANGE_SHADE";
export const changeShade = (scheme: scheme, shade: shade): IchangeShade => ({
  type: CHANGE_SHADE,
  payload: { scheme, shade },
});

//Toggle Snackbar

export interface IsetSnackbarMessage {
  type: string;
  payload: { message: string; severity: Color; color: string | null };
}

export const SET_SNACKBAR_MESSAGE = "SET_SNACKBAR_MESSAGE";
export const setSnackbarMessage = (
  message: string = "",
  severity: Color,
  color: string | null
): IsetSnackbarMessage => ({
  type: SET_SNACKBAR_MESSAGE,
  payload: { message, severity, color },
});

//Handle Snackbar close

export interface IhandleSnackbarClose {
  type: string;
  payload: {};
}

export const HANDLE_SNACKBAR_CLOSE = "HANDLE_SNACKBAR_CLOSE";
export const handleSnackbarClose = (): IhandleSnackbarClose => ({
  type: HANDLE_SNACKBAR_CLOSE,
  payload: {},
});
