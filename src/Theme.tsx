//React Imports
import React from "react";

//Material UI Imports
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { colors, useMediaQuery } from "@material-ui/core";

//Redux Imports
import { useDispatch, useSelector } from "react-redux";
import {
  getIsDarkMode,
  getPrimaryColor,
  getSecondaryColor,
  getPrimaryShade,
  getSecondaryShade,
  getPalette,
} from "./Redux/selectors";
import { toggleDarkMode } from "./Redux/actions";

const Theme: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const isDarkMode = useSelector(getIsDarkMode);
  if (prefersDarkMode !== (isDarkMode ?? false) && isDarkMode === null) {
    dispatch(toggleDarkMode(prefersDarkMode));
  }

  const [
    primaryColor,
    secondaryColor,
    primaryShade,
    secondaryShade,
  ] = useSelector(getPalette);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides: {
          MuiTooltip: {
            tooltip: {
              fontFamily: "Roboto, Arial, sans-serif",
              fontWeight: 600,
              fontSize: "0.72rem",
              backgroundColor: "rgb(0, 0, 0, 0.76)",
            },
          },
          MuiTab: {
            wrapper: {
              fontFamily: "Roboto, Arial, sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
            },
          },
          MuiButton: {
            label: {
              fontFamily: "Roboto, Arial, sans-serif",
              fontWeight: 600,
            },
          },
        },
        typography: {
          fontFamily: "Palatino, Georgia, Serif",
        },
        palette: {
          type: isDarkMode ? "dark" : "light",
          primary: {
            //@ts-ignore
            main: colors[primaryColor][primaryShade],
          },
          secondary: {
            //@ts-ignore
            main: colors[secondaryColor][secondaryShade],
          },
        },
      }),
    [isDarkMode, primaryColor, secondaryColor, primaryShade, secondaryShade]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
