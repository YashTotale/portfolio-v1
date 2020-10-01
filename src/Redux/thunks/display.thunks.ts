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
  getMuiColor,
  toColor,
} from "../../Utils/colors";

//Redux Imports
import { RootStateOrAny } from "react-redux";
import {
  changeShade,
  setSnackbarMessage,
  toggleDarkMode,
  changeColors,
} from "../actions";
import {
  getIsDarkMode,
  getPrimaryColor,
  getPrimaryShade,
  getSecondaryColor,
  getSecondaryShade,
} from "../selectors";

//Material UI Imports
import { capitalize } from "@material-ui/core";

export const toggleDarkModeWMessage = () => (
  dispatch: Dispatch<any>,
  getState: () => RootStateOrAny
) => {
  dispatch(toggleDarkMode());
  const theme = getIsDarkMode(getState()) ? "Dark" : "Light";
  dispatch(setSnackbarMessage(`${theme} Theme set`, "success", null));
};

export const changeColorWMessage = (scheme: scheme, cssColor: cssColor) => (
  dispatch: Dispatch<any>,
  getState: () => RootStateOrAny
) => {
  const shade =
    scheme === "primary"
      ? getPrimaryShade(getState())
      : getSecondaryShade(getState());
  dispatch(changeColors(scheme, cssColor));
  dispatch(
    setSnackbarMessage(
      `${capitalize(scheme)} Color is now ${toColor(cssColor)}`,
      "success",
      getMuiColor(cssColor, shade)
    )
  );
};

export const changeShadeWMessage = (scheme: scheme, shade: shade) => (
  dispatch: Dispatch<any>,
  getState: () => RootStateOrAny
) => {
  dispatch(changeShade(scheme, shade));
  const cssColor =
    scheme === "primary"
      ? getPrimaryColor(getState())
      : getSecondaryColor(getState());
  dispatch(
    setSnackbarMessage(
      `${capitalize(scheme)} Shade is now ${shade}`,
      "success",
      getMuiColor(cssColor, shade)
    )
  );
};

export const resetColors = () => (
  dispatch: Dispatch<any>,
  getState: () => RootStateOrAny
) => {
  schemes.forEach((scheme) => {
    dispatch(changeColors(scheme, defaultColors[scheme]));
    dispatch(changeShade(scheme, defaultShades[scheme]));
    dispatch(setSnackbarMessage(resetMessage, "success", null));
  });
};
