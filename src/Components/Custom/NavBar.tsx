//React Imports
import React from "react";
import Search from "./Search";
import TooltipBtn, { TooltipBtnProps } from "../Reusable/TooltipBtn";
import { SOURCE_CODE } from "../../Utils/links";

//Redux Imports
import { useSelector, useDispatch } from "react-redux";
import {} from "../../Redux/selectors";
import { toggleDarkModeWMessage } from "../../Redux/thunks";
import { toggleSidebar } from "../../Redux/actions";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Brightness7,
  Brightness4,
  GitHub,
  Menu as MenuButton,
} from "@material-ui/icons";
import { AppBar, Toolbar, useTheme, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {},
  menuButton: {
    marginRight: 10,
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));

const NavBar: React.FC = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const theme = useTheme();

  const isSizeSmall = useMediaQuery(theme.breakpoints.down("md"));

  const isDarkMode = theme.palette.type === "dark";

  const btns: TooltipBtnProps[] = [
    {
      title: `Toggle ${isDarkMode ? "Light" : "Dark"} Theme`,
      onClick: () => {
        dispatch(toggleDarkModeWMessage());
      },
      component: "btn",
      icon: isDarkMode ? <Brightness7 /> : <Brightness4 />,
    },
    {
      title: "GitHub Repository",
      icon: <GitHub />,
      component: "a",
      href: SOURCE_CODE,
    },
  ];

  return (
    <AppBar elevation={2} color="transparent" position="static">
      <Toolbar className={classes.toolbar}>
        {isSizeSmall && (
          <TooltipBtn
            size={isSizeSmall ? "small" : "medium"}
            component="btn"
            icon={<MenuButton />}
            title="Open Sidebar"
            onClick={() => dispatch(toggleSidebar(true))}
            className={classes.menuButton}
          />
        )}
        <Search />
        {btns.map((btn, i) => (
          <TooltipBtn key={i} {...btn} />
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
