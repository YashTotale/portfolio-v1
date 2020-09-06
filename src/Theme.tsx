//React Imports
import React from "react";

//Material UI Imports
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//Redux Imports
import { useSelector } from "react-redux";
import {
  getIsDarkMode,
  getPrimaryColor,
  getSecondaryColor,
  getShade,
} from "./Redux/selectors";
import { isHex } from "./Utils/colors";
import { colors } from "@material-ui/core";

const Theme: React.FC = ({ children }) => {
  const isDarkMode = useSelector(getIsDarkMode);
  const primaryColor = useSelector(getPrimaryColor);
  const secondaryColor = useSelector(getSecondaryColor);
  const shade = useSelector(getShade);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDarkMode ? "dark" : "light",
          primary: {
            main: isHex(primaryColor)
              ? primaryColor
              : //@ts-ignore
                colors[primaryColor][shade],
          },
          secondary: {
            main: isHex(secondaryColor)
              ? secondaryColor
              : //@ts-ignore
                colors[secondaryColor][shade],
          },
        },
      }),
    [isDarkMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
