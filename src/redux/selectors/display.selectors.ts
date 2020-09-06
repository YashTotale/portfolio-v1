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
