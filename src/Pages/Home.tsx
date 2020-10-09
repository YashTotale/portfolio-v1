//React Imports
import React from "react";
import AboutMe from "../Components/Custom/AboutMe";
import ContactForm from "../Components/Custom/ContactForm";
import ProjectOverlay, {
  DefaultOverlaySizes,
} from "../Components/Reusable/Overlay";
import Projects from "../Data/Projects.json";

//Material UI Imports
import {
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Helmet } from "react-helmet";

const useStyles = makeStyles<Theme, typeof DefaultOverlaySizes>((theme) => ({
  home: {
    margin: "0px 20px",
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
  },
  projects: {
    margin: "15px 0px",
    display: "grid",
    gap: "30px",
    [theme.breakpoints.down("xl")]: {
      gridTemplateColumns: ({ xl }) => `repeat(auto-fit, minmax(${xl}px, 1fr))`,
    },
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: ({ lg }) => `repeat(auto-fit, minmax(${lg}px, 1fr))`,
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: ({ md }) => `repeat(auto-fit, minmax(${md}px, 1fr))`,
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: ({ sm }) => `repeat(auto-fit, minmax(${sm}px, 1fr))`,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: ({ xs }) => `repeat(auto-fit, minmax(${xs}px, 1fr))`,
    },
  },
}));

const HomePage: React.FC = () => {
  const isSizeXL = useMediaQuery((theme: Theme) =>
    theme.breakpoints.only("xl")
  );

  const classes = useStyles({ ...DefaultOverlaySizes, sm: 170 });

  return (
    <>
      <Helmet>
        <title>Home - Yash Totale</title>
      </Helmet>
      <div className={classes.home}>
        <AboutMe />
        <div>
          <Typography variant="h4">Projects</Typography>
          <hr />
          <div className={classes.projects}>
            {Projects.slice(0, isSizeXL ? 8 : 6).map((project, i) => {
              return (
                <ProjectOverlay
                  {...project}
                  url={`/projects/${project.url}`}
                  key={i}
                  sm={170}
                />
              );
            })}
          </div>
          <Typography variant="h4">Contact</Typography>
          <hr />
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default HomePage;
