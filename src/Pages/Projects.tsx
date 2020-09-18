//React Imports
import React from "react";
import Projects from "../Data/Projects.json";

//Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import ProjectDisplay from "../Components/Reusable/Project/Display";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});

const ProjectsPage: React.FC = () => {
  const classes = useStyles();
  console.log("rerendering");
  return (
    <div className={classes.root}>
      {Projects.map((props) => (
        <ProjectDisplay {...props} />
      ))}
    </div>
  );
};

export default ProjectsPage;
