//React Imports
import React from "react";
import Projects from "../Data/Projects.json";

//Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: 600,
    margin: "30px",
  },
  media: {
    height: 200,
  },
});

const ProjectsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Projects.map((project, i) => {
        return (
          <Card key={i} className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={project.icon}
                title={project.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.name}
                </Typography>
                {project.description.map((desc, i) => {
                  return (
                    <Typography
                      key={i}
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      {desc}
                    </Typography>
                  );
                })}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
              {project.sourcecode ? (
                <Button size="small" color="primary">
                  Source Code
                </Button>
              ) : null}
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default ProjectsPage;
