//React Imports
import React, { createRef, RefObject, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import withScroll from "../Components/HigherOrder/withScroll";
import StyledLink from "../Components/Reusable/StyledLink";
import AboutMe from "../Components/Custom/AboutMe";
import ContactForm from "./Contact";
import ProjectOverlay, {
  DefaultOverlaySizes,
} from "../Components/Reusable/Overlay";
import Projects from "../Data/Projects.json";

//Material UI Imports
import {
  makeStyles,
  Theme,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { BreakpointValues } from "@material-ui/core/styles/createBreakpoints";

interface StyleProps extends BreakpointValues {}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  home: {
    margin: "0px 20px",
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
  },
  projects: ({ xl, lg, md, sm, xs }) => ({
    margin: "15px 0px",
    display: "grid",
    gap: "30px",
    [theme.breakpoints.down("xl")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(${xl}px, 1fr))`,
    },
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(${lg}px, 1fr))`,
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(${md}px, 1fr))`,
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(${sm}px, 1fr))`,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(${xs}px, 1fr))`,
    },
  }),
}));

export const readableHomeHashes = ["About Me", "Projects", "Contact"];

export const homeHashes = ["about-me", "projects", "contact"] as const;

const HomePage: React.FC = () => {
  const { hash } = useLocation();

  const refs: Record<typeof homeHashes[number], RefObject<HTMLDivElement>> = {
    "about-me": createRef<HTMLDivElement>(),
    contact: createRef<HTMLDivElement>(),
    projects: createRef<HTMLDivElement>(),
  };

  useEffect(() => {
    const section = hash.substring(1) as typeof homeHashes[number];
    const scrollTo = refs?.[section]?.current?.offsetTop;
    scrollTo && window.scrollTo({ behavior: "smooth", top: scrollTo, left: 0 });
  }, [hash, refs]);

  const isSizeXL = useMediaQuery((theme: Theme) =>
    theme.breakpoints.only("xl")
  );

  const sizes = { ...DefaultOverlaySizes, sm: 170 };

  const classes = useStyles({ ...sizes });

  return (
    <>
      <Helmet>
        <title>Home - Yash Totale</title>
      </Helmet>
      <div className={classes.home}>
        <AboutMe ref={refs["about-me"]} />
        <div>
          <div ref={refs.projects}>
            <Header
              tooltip="View all projects"
              link="/projects"
              name="Projects"
            />
            <div className={classes.projects}>
              {Projects.slice(0, isSizeXL ? 8 : 6).map((project, i) => {
                return (
                  <ProjectOverlay
                    {...project}
                    type="Projects"
                    url={`/projects/${project.url}`}
                    key={i}
                    {...sizes}
                  />
                );
              })}
            </div>
          </div>
          <Header tooltip="Visit Contact Page" name="Contact" link="/contact" />
          <ContactForm component ref={refs.contact} />
        </div>
      </div>
    </>
  );
};

const useHeaderStyles = makeStyles((theme) => ({
  header: {
    display: "table",
    margin: "auto",
  },
  link: {
    color: "inherit",
  },
}));

interface HeaderProps {
  tooltip: string;
  name: string;
  link: string;
}

const Header: React.FC<HeaderProps> = ({ tooltip, name, link }) => {
  const classes = useHeaderStyles();

  return (
    <>
      <Tooltip title={tooltip}>
        <Typography className={classes.header} align="center" variant="h4">
          <StyledLink className={classes.link} to={link}>
            {name}
          </StyledLink>
        </Typography>
      </Tooltip>
      <hr />
    </>
  );
};

export default withScroll(HomePage);
