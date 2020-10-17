//React Imports
import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import ProjectDisplay from "../Components/Reusable/Project/Display";
import ProjectPage from "../Components/Reusable/Project/Page";
import Projects from "../Data/Projects.json";
import { ProjectProps } from "../Utils/interfaces";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "15px 40px",
    [theme.breakpoints.only("xs")]: {
      margin: "15px 30px",
    },
  },
  col: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

interface Params {
  id: string;
}

const ProjectsPage: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<Params>();
  const projectURLs = React.useMemo(
    () => Projects.map((project) => project.url),
    []
  );
  const isSizeSmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );
  const half = React.useMemo(() => Math.ceil(Projects.length / 2), []);
  const col1 = React.useMemo(
    () => Projects.slice(0, isSizeSmall ? Projects.length : half),
    [isSizeSmall, half]
  );
  const col2 = React.useMemo(() => (isSizeSmall ? [] : Projects.slice(half)), [
    isSizeSmall,
    half,
  ]);

  return (
    <>
      <Helmet>
        <title>Projects - Yash Totale</title>
      </Helmet>
      {projectURLs.includes(id) ? (
        <ProjectPage
          {...(Projects.find((project) => project.url === id) as ProjectProps)}
        />
      ) : (
        <div className={classes.root}>
          {[...Array(isSizeSmall ? 1 : 2)].map((x, i) => (
            <div key={i} className={classes.col}>
              {(i === 0 ? col1 : col2).map((props, i) => (
                <ProjectDisplay {...props} key={i} />
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectsPage;
