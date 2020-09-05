import { State } from "./index";

export const getIsDarkMode = (state: State) => state.display.isDarkMode;
export const getIsNavBtnsMenuOpen = (state: State) =>
  state.display.isNavBtnsMenuOpen;
export const getPrimaryColor = (state: State) => state.display.colors.primary;
export const getSecondaryColor = (state: State) =>
  state.display.colors.secondary;
