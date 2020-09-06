export interface State {
  display: {
    isDarkMode: boolean;
    isNavBtnsMenuOpen: boolean;
    shade: string;
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
  getShade,
} from "./display.selectors";
