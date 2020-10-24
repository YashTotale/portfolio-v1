import { ContactState, DisplayState, SidebarState } from "../reducers";

export interface State {
  display: DisplayState;
  contact: ContactState;
  sidebar: SidebarState;
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
  getContactBugs,
  getContactLoading,
  getContactSuccess,
  getContact,
} from "./contact.selectors";
export { getIsSidebarOpen, getSidebar } from "./sidebar.selectors";
