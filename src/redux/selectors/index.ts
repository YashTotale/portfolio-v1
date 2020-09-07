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
} from "./display.selectors";
