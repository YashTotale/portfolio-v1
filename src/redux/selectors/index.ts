import { displayState } from "../reducers";

export interface State {
  display: typeof displayState;
}

export {
  getIsDarkMode,
  getIsNavBtnsMenuOpen,
  getPrimaryColor,
  getSecondaryColor,
  getPrimaryShade,
  getSecondaryShade,
  getIsSnackbarOpen,
  getSnackbarMessage,
  getSnackbarSeverity,
} from "./display.selectors";
