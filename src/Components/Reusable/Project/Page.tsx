// React Imports
import React from "react";
import { Helmet } from "react-helmet";
import { ProjectProps } from "../../../Utils/interfaces";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  // Styles
}));

const Page: React.FC<ProjectProps> = ({ name }) => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>{name} - Yash Totale</title>
      </Helmet>
      <h1>Bye</h1>
    </>
  );
};

export default Page;
