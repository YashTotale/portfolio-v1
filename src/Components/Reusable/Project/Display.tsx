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
  root: {
    padding: 10,
    height: "100%",
    //Flex
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  projectDiv: {
    position: "relative",
    maxWidth: 550,
    width: "100%",
    height: "100%",
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
    flexGrow: 1,
    // Border Radius
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  projectDescriptions: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 2,
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
    flexGrow: 2,
  },
  projectFooter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  projectTime: {},
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
    <div className={classes.root}>
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
              width={200}
              xs={150}
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
          <div className={classes.projectDescriptions}>
            {description.map((desc, i) => (
              <Parser
                key={i}
                paragraphProps={{
                  className: classes.projectDescription,
                  variant: isSizeSmall ? "body2" : "body1",
                }}
              >
                {desc}
              </Parser>
            ))}
          </div>
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
          <div className={classes.projectFooter}>
            <Typography className={classes.projectTime} variant="subtitle1">
              {start} - {end ?? "Present"}
            </Typography>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Display;
