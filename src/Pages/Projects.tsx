//React Imports
import React from "react";
import { Helmet } from "react-helmet";
import withScroll from "../Components/HigherOrder/withScroll";
import ProjectDisplay from "../Components/Reusable/Project/Display";
import Grid from "../Components/Reusable/Grid";
import Projects from "../Data/Projects.json";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  title: {
    marginTop: 5,
    fontSize: "2.7rem",
  },
}));

const ProjectsPage: React.FC = () => {
  const classes = useStyles();

  const isSizeSmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <>
      <Helmet>
        <title>Projects - Yash Totale</title>
      </Helmet>
      <Typography className={classes.title} variant={isSizeSmall ? "h4" : "h3"}>
        Projects
      </Typography>
      <Grid
        className={classes.root}
        xs={300}
        sm={375}
        md={400}
        lg={450}
        xl={500}
      >
        {Projects.map((project, i) => (
          <ProjectDisplay key={i} {...project} />
        ))}
      </Grid>
    </>
  );
};

export default withScroll(ProjectsPage);
