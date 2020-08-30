//React Imports
import React from "react";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

const ExperiencePage: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.root}>Experience</div>;
};

export default ExperiencePage;
