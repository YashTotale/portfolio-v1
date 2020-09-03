export interface State {
  display: {
    isDarkMode: boolean;
    isNavBtnsMenuOpen: boolean;
  };
}

export { getIsDarkMode, getIsNavBtnsMenuOpen } from "./display.selectors";
