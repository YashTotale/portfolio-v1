export interface State {
  display: {
    isDarkMode: boolean;
    isNavBtnsMenuOpen: boolean;
    shades: {
      primary: string;
      secondary: string;
    };
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
  getPrimaryShade,
  getSecondaryShade,
} from "./display.selectors";
