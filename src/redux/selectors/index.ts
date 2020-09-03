export interface State {
  display: {
    isDarkMode: boolean;
    IsNavBtnsMenuOpen: boolean;
  };
}

export { getIsDarkMode } from "./display.selectors";
