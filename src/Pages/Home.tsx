//React Imports
import React from "react";
import AboutMe from "../Components/Custom/AboutMe";
import ContactForm from "../Components/Custom/ContactForm";
import ProjectMini from "../Components/Reusable/Overlay";
import Projects from "../Data/Projects.json";

//Material UI Imports
import {
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

interface StyleProps {
  isSizeXL: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  home: {
    margin: "0px 20px",
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
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
  const isSizeXL = useMediaQuery((theme: Theme) =>
    theme.breakpoints.only("xl")
  );

  const classes = useStyles({ isSizeXL });

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
        <Typography variant="h4">Contact</Typography>
        <hr />
        <ContactForm />
      </div>
    </div>
  );
};

export default HomePage;
