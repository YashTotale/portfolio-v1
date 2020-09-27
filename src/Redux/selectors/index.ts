import { displayState } from "../reducers";

export interface State {
  display: typeof displayState;
}

export {
  getIsDarkMode,
  getIsNavBtnsMenuOpen,
  getPrimaryColor,
  getSecondaryColor,
  getColors,
  getPrimaryShade,
  getSecondaryShade,
  getShades,
  getPalette,
  getIsSnackbarOpen,
  getSnackbarMessage,
  getSnackbarSeverity,
} from "./display.selectors";
