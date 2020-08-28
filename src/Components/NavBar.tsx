//React Imports
import React, { useState } from "react";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const NavBar: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar elevation={2} color="transparent" position="static">
        <Toolbar>
          <Tabs value={value} onChange={handleChange}>
            <Tab component={Link} to="/projects" label="Projects"></Tab>
            <Tab component={Link} to="/experience" label="Experience"></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};
