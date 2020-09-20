//React Imports
import React from "react";
import Tags from "../../../Data/Tags.json";
import { ProjectProps } from "../../../Utils/constants";

//Material UI Imports
import {
  Chip,
  makeStyles,
  Paper,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  projectDiv: {
    margin: 15,
    width: "60%",
    [theme.breakpoints.only("xs")]: {
      width: "80%",
    },
    // Flex
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  projectImgDiv: {
    width: "100%",
    padding: 10,
    // Flex
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // Border Radius
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  projectImg: {
    width: 200,
    height: 200,
  },
  projectTitle: {
    marginTop: 5,
  },
  projectInfo: {
    width: "100%",
    padding: 10,
    // Flex
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // Border Radius
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  projectDescription: {
    margin: 4,
  },
  projectTags: {
    marginTop: 8,
  },
  projectTag: {
    margin: 1,
  },
}));

const Display: React.FC<ProjectProps> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.projectDiv}>
      <Paper elevation={24} className={classes.projectImgDiv}>
        <img
          className={classes.projectImg}
          src={theme.palette.type === "light" ? props.icons[0] : props.icons[1]}
        ></img>
        <Typography className={classes.projectTitle} variant="h4">
          {props.name}
        </Typography>
      </Paper>
      <Paper elevation={10} className={classes.projectInfo}>
        {props.description.map((desc, i) => (
          <Typography
            key={i}
            dangerouslySetInnerHTML={{ __html: parseDescription(desc) }}
            className={classes.projectDescription}
            variant="body1"
          ></Typography>
        ))}
        <div className={classes.projectTags}>
          {props.tags.map((tag) => (
            <Chip
              className={classes.projectTag}
              component={Link}
              color="primary"
              clickable
              to="/"
              label={tag}
              variant="outlined"
            />
          ))}
        </div>
      </Paper>
    </div>
  );
};

const parseDescription = (description: string): string => {
  const tags = Object.keys(Tags);

  const regexes = [
    [/\*\*(.*?)\*\*/gi, "strong"],
    [/\*(.*?)\*/gi, "em"],
    ...tags.map((tag) => [new RegExp(`(${tag})`, "gi"), "em"]),
  ];

  let newDescription = description;

  regexes.forEach((regex) => {
    const htmlTag = regex[1];

    newDescription = newDescription.replace(
      regex[0],
      (match, captured) => `<${htmlTag}>${captured}</${htmlTag}>`
    );
  });

  return newDescription;
};

export default Display;
