// React Imports
import React from "react";
import { Helmet } from "react-helmet";
import { TagProps } from "../../../Utils/interfaces";

// Redux Imports
import { useSelector } from "react-redux";

// Material UI Imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  tagPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  jumbotron: {
    display: "flex",
  },
}));

const Page: React.FC<TagProps> = ({ name, icons }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDarkMode = theme.palette.type === "dark";
  return (
    <>
      <Helmet>
        <title>{name} - Yash Totale</title>
      </Helmet>
      <div className={classes.tagPage}>
        <Paper className={classes.jumbotron}>
          <img src={icons[isDarkMode ? 1 : 0]} alt={name}></img>
        </Paper>
      </div>
    </>
  );
};

export default Page;
