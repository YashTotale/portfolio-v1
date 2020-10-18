//React Imports
import React from "react";
import TooltipBtn from "../TooltipBtn";
import MiniTag from "../Tag/Mini";
import Parser from "../Parser";
import StyledLink from "../StyledLink";
import Tags from "../../../Data/Tags.json";
import StaticImage from "../StaticImage";
import { ProjectProps, TagProps } from "../../../Utils/interfaces";

//Material UI Imports
import {
  makeStyles,
  Paper,
  Typography,
  useTheme,
  Divider,
  useMediaQuery,
} from "@material-ui/core";
import { GitHub, Launch } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  projectDiv: {
    margin: 15,
    position: "relative",
    maxWidth: "500px",
    // Flex
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  projectImgDiv: {
    width: "100%",
    padding: "10px 24px",
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
    [theme.breakpoints.only("xs")]: {
      width: 150,
      height: 150,
    },
    width: 200,
    height: 200,
  },
  projectTitle: {
    textAlign: "center",
    marginTop: 5,
  },
  projectUrl: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  projectSourceCode: {
    position: "absolute",
    top: 2,
    right: 2,
  },
  projectLink: {
    position: "absolute",
    top: 52,
    right: 2,
  },
  projectInfo: {
    width: "100%",
    padding: "10px 10px 3px",
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
  projectDivider: {
    marginTop: 9,
  },
  projectTags: {
    marginTop: 8,
    alignSelf: "center",
  },
  projectTime: {
    alignSelf: "center",
    marginTop: 4,
  },
}));

const Display: React.FC<ProjectProps> = ({
  name,
  icons,
  description,
  tags,
  sourcecode,
  start,
  end,
  link,
  url,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSizeSmall = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <div className={classes.projectDiv}>
      <Paper elevation={24} className={classes.projectImgDiv}>
        <StyledLink
          className={classes.projectUrl}
          to={`/projects/${url}`}
          color="primary"
        >
          <StaticImage
            icons={icons}
            name={name}
            type="Projects"
            className={classes.projectImg}
          />
          <Typography
            className={classes.projectTitle}
            variant={isSizeSmall ? "h5" : "h4"}
          >
            {name}
          </Typography>
        </StyledLink>
        {sourcecode && (
          <TooltipBtn
            className={classes.projectSourceCode}
            title={`Source Code for ${name}`}
            icon={<GitHub />}
            component="a"
            href={sourcecode}
          />
        )}
        {link && (
          <TooltipBtn
            className={classes.projectLink}
            title={`View ${name}`}
            icon={<Launch />}
            component="a"
            href={link}
          />
        )}
      </Paper>
      <Paper elevation={10} className={classes.projectInfo}>
        {description.map((desc, i) => (
          <Typography
            key={i}
            className={classes.projectDescription}
            variant={isSizeSmall ? "body2" : "body1"}
          >
            <Parser original={desc} />
          </Typography>
        ))}
        <Divider className={classes.projectDivider} />
        <div className={classes.projectTags}>
          {tags.map((tag, i) => (
            <MiniTag
              key={i}
              {...(Tags.find(({ name }) => tag === name) as TagProps)}
            />
          ))}
        </div>
        <Divider className={classes.projectDivider} />
        <Typography className={classes.projectTime} variant="subtitle1">
          {start} - {end ?? "Present"}
        </Typography>
      </Paper>
    </div>
  );
};

export default Display;
