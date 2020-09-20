//React Imports
import React from "react";
import Projects from "../Data/Projects.json";
import ProjectDisplay from "../Components/Reusable/Project/Display";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

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

const ProjectsPage: React.FC = () => {
  const classes = useStyles();
  const isSizeSmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );
  const half = Math.ceil(Projects.length / 2);
  const col1 = Projects.slice(0, isSizeSmall ? Projects.length : half);
  const col2 = isSizeSmall ? [] : Projects.slice(half);
  return (
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
