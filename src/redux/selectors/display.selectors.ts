import { State } from "./index";

export const getIsDarkMode = (state: State) => state.display.isDarkMode;
export const getIsNavBtnsMenuOpen = (state: State) =>
  state.display.IsNavBtnsMenuOpen;
