//React Imports
import React from "react";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, useTheme, useMediaQuery } from "@material-ui/core";
import ProfilePic from "../Components/ProfilePic";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <ProfilePic />
      <h1>Hello</h1>
    </Paper>
  );
};

export default HomePage;
