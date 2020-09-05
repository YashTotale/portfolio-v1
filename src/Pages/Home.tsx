//React Imports
import React from "react";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

console.log(colors);

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

const HomePage: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.root}>Still in development..</div>;
};

export default HomePage;
