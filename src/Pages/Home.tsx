//React Imports
import React from "react";
import AboutMe from "../Components/Custom/AboutMe";
import ProjectMini from "../Components/Reusable/Overlay";
import Projects from "../Data/Projects.json";

//Material UI Imports
import {
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  home: {
    margin: "0px 20px",
  },
  projects: {
    margin: "10px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  const isSizeXL = useMediaQuery((theme: Theme) =>
    theme.breakpoints.only("xl")
  );
  return (
    <div className={classes.home}>
      <AboutMe />
      <div>
        <Typography variant="h4">Projects</Typography>
        <hr />
        <div className={classes.projects}>
          {Projects.slice(0, isSizeXL ? 8 : 6).map((project, i) => {
            return (
              <ProjectMini
                {...project}
                url={`/projects/${project.url}`}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
