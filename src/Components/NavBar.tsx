//React Imports
import React from "react";
import { Link, useLocation } from "react-router-dom";

//Redux Imports
import { getIsDarkMode } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/actions";

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
      icon: isDarkMode ? <Brightness7 /> : <Brightness4 />,
    },
    {
      title: "GitHub Repository",
      icon: <GitHub />,
      href: "http://github.com/YashTotale/YashTotale.github.io",
    },
  ];

  const location = useLocation();
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
          {btns.map(NavButton)}
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

interface INavButton {
  title: string;
  icon: IconButtonProps;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  href?: string;
}

const NavButton: React.FC<INavButton> = ({ title, icon, onClick, href }) => {
  return (
    <Tooltip key={title} title={title}>
      {href ? (
        <IconButton
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          {icon}
        </IconButton>
      ) : (
        <IconButton onClick={onClick}>{icon}</IconButton>
      )}
    </Tooltip>
  );
};
