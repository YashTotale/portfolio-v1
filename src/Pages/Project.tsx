// React Imports
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Projects from "../Data/Projects.json";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  // Styles
}));

interface Params {
  id: string;
}

interface ProjectProps {}

const Project: FC<ProjectProps> = ({}) => {
  const classes = useStyles();

  const { id } = useParams<Params>();

  const project = Projects.find((project) => project.url === id);

  if (project) {
    const { name } = project;
    return (
      <>
        <Helmet>
          <title>{name} - Yash Totale</title>
        </Helmet>
        <h1>Bye</h1>
      </>
    );
  }
  return null;
};

export default Project;
