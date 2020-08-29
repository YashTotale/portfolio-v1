//React Imports
import React from "react";
import { Link, useLocation } from "react-router-dom";

//Redux Imports
import { getIsDarkMode } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/actions";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Brightness7, Brightness4 } from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  TabProps,
  Button,
  IconButton,
  Tooltip,
} from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    justifyContent: "center",
  },
  tabs: {
    "& div": {
      justifyContent: "center",
    },
    flexGrow: 1,
  },
}));

const createTab = (tab: string): TabProps => {
  const upperCase = tab.toUpperCase();
  return (
    <Tab
      key={tab}
      value={tab}
      component={Link}
      to={`/${tab}`}
      label={upperCase}
    ></Tab>
  );
};

export const NavBar: React.FC = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const isDarkMode = useSelector(getIsDarkMode);
  const path = location.pathname.split("/")[1];

  const tabs = ["home", "projects", "experience"];

  const currentTab = tabs.includes(path) ? path : "home";

  return (
    <div className={classes.root}>
      <AppBar elevation={2} color="transparent" position="static">
        <Toolbar className={classes.toolBar}>
          <Tabs className={classes.tabs} value={currentTab}>
            {tabs.map(createTab)}
          </Tabs>
          <Tooltip title={`${isDarkMode ? "Light" : "Dark"} Theme`}>
            <IconButton
              title="Toggle Theme"
              onClick={(e) => dispatch(toggleDarkMode())}
            >
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};
