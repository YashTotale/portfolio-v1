// React Imports
import React from "react";
import { TagProps } from "../../../Utils/interfaces";

// Redux Imports
import { useSelector } from "react-redux";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import {} from "@material-ui/icons";
import { getIsDarkMode } from "../../../Redux/selectors";

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
  const isDarkMode = useSelector(getIsDarkMode);
  return (
    <div className={classes.tagPage}>
      <Paper className={classes.jumbotron}>
        <img src={icons[isDarkMode ? 1 : 0]}></img>
      </Paper>
    </div>
  );
};

export default Page;
