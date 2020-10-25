import {
  ContactState,
  DisplayState,
  SidebarState,
  SnackbarState,
} from "../reducers";

export interface State {
  display: DisplayState;
  contact: ContactState;
  sidebar: SidebarState;
  snackbar: SnackbarState;
}

export {
  getIsDarkMode,
  getPrimaryColor,
  getSecondaryColor,
  getColors,
  getPrimaryShade,
  getSecondaryShade,
  getShades,
  getPalette,
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
export {
  getIsSnackbarOpen,
  getSnackbarColor,
  getSnackbarMessage,
  getSnackbarSeverity,
} from "./snackbar.selectors";
