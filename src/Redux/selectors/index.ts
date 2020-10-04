import { initialContactState, initialDisplayState } from "../reducers";

export interface State {
  display: typeof initialDisplayState;
  contact: typeof initialContactState;
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
export {
  getContactName,
  getContactMessage,
  getContactEmail,
  getContactSuccess,
  getContact,
} from "./contact.selectors";
