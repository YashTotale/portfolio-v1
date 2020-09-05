export interface State {
  display: {
    isDarkMode: boolean;
    isNavBtnsMenuOpen: boolean;
    colors: {
      primary: string;
      secondary: string;
    };
  };
}

export {
  getIsDarkMode,
  getIsNavBtnsMenuOpen,
  getPrimaryColor,
  getSecondaryColor,
} from "./display.selectors";
