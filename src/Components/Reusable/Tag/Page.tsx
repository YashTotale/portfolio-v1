// React Imports
import React from "react";
import { Helmet } from "react-helmet";
import { TagProps } from "../../../Utils/interfaces";

// Redux Imports

// Material UI Imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import {} from "@material-ui/icons";
import StaticImage from "../StaticImage";

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
  return (
    <>
      <Helmet>
        <title>{name} - Yash Totale</title>
      </Helmet>
      <div className={classes.tagPage}>
        <Paper className={classes.jumbotron}>
          <StaticImage icons={icons} name={name} type="Tags" />
        </Paper>
      </div>
    </>
  );
};

export default Page;
