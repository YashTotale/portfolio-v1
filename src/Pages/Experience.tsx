//React Imports
import React from "react";
import { Helmet } from "react-helmet";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

const ExperiencePage: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Experience - Yash Totale</title>
      </Helmet>
      <div className={classes.root}>Experience</div>
    </>
  );
};

export default ExperiencePage;
