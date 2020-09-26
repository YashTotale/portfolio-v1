//React Imports
import React from "react";
import Projects from "../Data/Projects.json";
import ProjectDisplay from "../Components/Reusable/Project/Display";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
  },
  col: {
    margin: "15px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});

interface Params {
  id: string;
}

const ProjectsPage: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<Params>();
  const projectURLs = React.useMemo(
    () => Projects.map((project) => project.url),
    [Projects]
  );
  const isSizeSmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );
  const half = React.useMemo(() => Math.ceil(Projects.length / 2), [Projects]);
  const col1 = React.useMemo(
    () => Projects.slice(0, isSizeSmall ? Projects.length : half),
    [isSizeSmall, Projects]
  );
  const col2 = React.useMemo(() => (isSizeSmall ? [] : Projects.slice(half)), [
    isSizeSmall,
    Projects,
  ]);

  return projectURLs.includes(id) ? (
    <h1>Hello</h1>
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
  );
};

export default ProjectsPage;
