//React Imports
import React from "react";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
}));

const Colors: React.FC = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Customize Website Colors</h1>
    </div>
  );
};

export default Colors;
