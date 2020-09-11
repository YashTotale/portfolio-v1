import { Dispatch } from "react";
import { RootStateOrAny } from "react-redux";
import { setSnackbarMessage, toggleDarkMode } from "../actions";
import { getIsDarkMode } from "../selectors";

export const toggleDarkModeWMessage = () => (
  dispatch: Dispatch<any>,
  getState: () => RootStateOrAny
) => {
  dispatch(toggleDarkMode());
  const theme = getIsDarkMode(getState()) ? "Dark" : "Light";
  dispatch(setSnackbarMessage(`${theme} Theme set`, "success"));
};
