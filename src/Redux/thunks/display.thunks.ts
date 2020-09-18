//React Imports
import { Dispatch } from "react";
import {
  scheme,
  shade,
  defaultColors,
  defaultShades,
  schemes,
  resetMessage,
  cssColor,
  toCssColor,
  color,
} from "../../Utils/colors";

//Redux Imports
import { RootStateOrAny } from "react-redux";
import {
  changeShade,
  setSnackbarMessage,
  toggleDarkMode,
  changeColors,
} from "../actions";
import { getIsDarkMode } from "../selectors";

//Material UI Imports
import { capitalize } from "@material-ui/core";

export const toggleDarkModeWMessage = () => (
  dispatch: Dispatch<any>,
  getState: () => RootStateOrAny
) => {
  dispatch(toggleDarkMode());
  const theme = getIsDarkMode(getState()) ? "Dark" : "Light";
  dispatch(setSnackbarMessage(`${theme} Theme set`, "success"));
};

export const changeColorWMessage = (scheme: scheme, color: color) => (
  dispatch: Dispatch<any>,
  getState: () => RootStateOrAny
) => {
  const cssColor = toCssColor(color) as cssColor;
  dispatch(changeColors(scheme, cssColor));
  dispatch(
    setSnackbarMessage(`${capitalize(scheme)} Color is now ${color}`, "success")
  );
};

export const changeShadeWMessage = (scheme: scheme, shade: shade) => (
  dispatch: Dispatch<any>,
  getState: () => RootStateOrAny
) => {
  dispatch(changeShade(scheme, shade));
  dispatch(
    setSnackbarMessage(`${capitalize(scheme)} Shade is now ${shade}`, "success")
  );
};

export const resetColors = () => (
  dispatch: Dispatch<any>,
  getState: () => RootStateOrAny
) => {
  schemes.forEach((scheme) => {
    dispatch(changeColors(scheme, defaultColors[scheme]));
    dispatch(changeShade(scheme, defaultShades[scheme]));
    dispatch(setSnackbarMessage(resetMessage, "success"));
  });
};
