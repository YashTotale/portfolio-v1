import { Color } from "@material-ui/lab";

//Toggle Dark Mode
interface ItoggleDarkMode {
  type: string;
  payload: {};
}

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const toggleDarkMode = (): ItoggleDarkMode => ({
  type: TOGGLE_DARK_MODE,
  payload: {},
});

//Toggle Nav Btns Menu

interface ItoggleNavBtnsMenu {
  type: string;
  payload: { isOpen?: boolean };
}

export const TOGGLE_NAV_BTNS_MENU = "TOGGLE_NAV_BTNS_MENU";
export const toggleNavBtnsMenu = (isOpen?: boolean): ItoggleNavBtnsMenu => ({
  type: TOGGLE_NAV_BTNS_MENU,
  payload: { isOpen },
});

//Change colors

interface IchangeColors {
  type: string;
  payload: {};
}

export const CHANGE_COLORS = "CHANGE_COLORS";
export const changeColors = (
  scheme: "primary" | "secondary",
  color: string
): IchangeColors => ({
  type: CHANGE_COLORS,
  payload: { scheme, color },
});

//Change shade

interface IchangeShade {
  type: string;
  payload: { shade: string; scheme: string };
}

export const CHANGE_SHADE = "CHANGE_SHADE";
export const changeShade = (
  scheme: "primary" | "secondary",
  shade: string
): IchangeShade => ({
  type: CHANGE_SHADE,
  payload: { scheme, shade },
});

//Toggle Snackbar

interface IsetSnackbarMessage {
  type: string;
  payload: { message: string; severity: Color };
}

export const SET_SNACKBAR_MESSAGE = "SET_SNACKBAR_MESSAGE";
export const setSnackbarMessage = (
  message: string = "",
  severity: Color
): IsetSnackbarMessage => ({
  type: SET_SNACKBAR_MESSAGE,
  payload: { message, severity },
});

//Handle Snackbar close

interface IhandleSnackbarClose {
  type: string;
  payload: {};
}

export const HANDLE_SNACKBAR_CLOSE = "HANDLE_SNACKBAR_CLOSE";
export const handleSnackbarClose = (): IhandleSnackbarClose => ({
  type: HANDLE_SNACKBAR_CLOSE,
  payload: {},
});
