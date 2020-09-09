import { State } from "./index";

export const getIsDarkMode = (state: State) => state.display.isDarkMode;

export const getIsNavBtnsMenuOpen = (state: State) =>
  state.display.isNavBtnsMenuOpen;

export const getPrimaryColor = (state: State) => state.display.colors.primary;

export const getSecondaryColor = (state: State) =>
  state.display.colors.secondary;

export const getPrimaryShade = (state: State) => state.display.shades.primary;

export const getSecondaryShade = (state: State) =>
  state.display.shades.secondary;

export const getSnackbarMessage = (state: State) =>
  state.display.snackBar.message;

export const getIsSnackbarOpen = (state: State) =>
  state.display.snackBar.isOpen;

export const getSnackbarSeverity = (state: State) =>
  state.display.snackBar.severity;