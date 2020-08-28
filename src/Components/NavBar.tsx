//React Imports
import React from "react";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Tabs, Tab, TabProps } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    justifyContent: "center",
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

export const NavBar: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const tabs = ["home", "projects", "experience"];

  const value = tabs.includes(path) ? path : "home";

  return (
    <div className={classes.root}>
      <AppBar elevation={2} color="transparent" position="static">
        <Toolbar className={classes.toolBar}>
          <Tabs value={value}>{tabs.map(createTab)}</Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};
