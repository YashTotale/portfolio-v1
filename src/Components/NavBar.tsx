//React Imports
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SOURCE_CODE } from "../Utils/constants";

//Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { getIsDarkMode } from "../Redux/selectors";
import { toggleDarkMode } from "../Redux/actions";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Brightness7, Brightness4, GitHub } from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  TabProps,
  IconButton,
  Tooltip,
  IconButtonProps,
} from "@material-ui/core";
import TooltipBtn from "./TooltipBtn";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    "& div": {
      justifyContent: "center",
    },
    flexGrow: 1,
  },
}));

export const NavBar: React.FC = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isDarkMode = useSelector(getIsDarkMode);

  const btns = [
    {
      title: `${isDarkMode ? "Light" : "Dark"} Theme`,
      onClick: () => dispatch(toggleDarkMode()),
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

  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const tabs = ["home", "projects", "experience"];
  const currentTab = tabs.includes(path) ? path : "home";

  return (
    <div className={classes.root}>
      <AppBar elevation={2} color="transparent" position="static">
        <Toolbar>
          <Tabs className={classes.tabs} value={currentTab}>
            {tabs.map(createTab)}
          </Tabs>
          {btns.map((props) => (
            <TooltipBtn {...props} />
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

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
