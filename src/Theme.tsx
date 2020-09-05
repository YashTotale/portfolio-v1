//React Imports
import React from "react";

//Material UI Imports
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//Redux Imports
import { useSelector } from "react-redux";
import { getIsDarkMode } from "./Redux/selectors";

const Theme: React.FC = ({ children }) => {
  const isDarkMode = useSelector(getIsDarkMode);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDarkMode ? "dark" : "light",
          primary: {
            main: "#4fc3f7",
          },
          secondary: {
            main: "#fdd835",
          },
        },
      }),
    [isDarkMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
