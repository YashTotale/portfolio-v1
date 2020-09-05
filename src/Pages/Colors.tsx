//React Imports
import React from "react";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

const Colors: React.FC = (props) => {
  const classes = useStyles();

  return <div className={classes.root}>Colors</div>;
};

export default Colors;
