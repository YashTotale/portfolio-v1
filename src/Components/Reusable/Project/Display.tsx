//React Imports
import React from "react";
import Tags from "../../../Data/Tags.json";
import MiniTag from "../Tag/Mini";
import { ProjectProps } from "../../../Utils/interfaces";

//Material UI Imports
import {
  makeStyles,
  Paper,
  Typography,
  useTheme,
  Divider,
  useMediaQuery,
} from "@material-ui/core";
import TooltipBtn from "../TooltipBtn";
import { GitHub } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  projectDiv: {
    margin: 15,
    position: "relative",
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
  projectSourceCode: {
    position: "absolute",
    top: 2,
    right: 2,
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
  projectInfoDivider: {
    marginTop: 9,
  },
  projectTags: {
    marginTop: 8,
  },
}));

const Display: React.FC<ProjectProps> = ({
  name,
  icons,
  description,
  tags,
  sourcecode,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSizeSmall = useMediaQuery(theme.breakpoints.only("xs"));
  return (
    <div className={classes.projectDiv}>
      <Paper elevation={24} className={classes.projectImgDiv}>
        <img
          className={classes.projectImg}
          src={theme.palette.type === "light" ? icons[0] : icons[1]}
        ></img>
        <Typography
          className={classes.projectTitle}
          variant={isSizeSmall ? "h5" : "h4"}
        >
          {name}
        </Typography>
        {sourcecode ? (
          <TooltipBtn
            className={classes.projectSourceCode}
            title="Github Repository"
            icon={<GitHub />}
            component="a"
            href={sourcecode}
          ></TooltipBtn>
        ) : null}
      </Paper>
      <Paper elevation={10} className={classes.projectInfo}>
        {description.map((desc, i) => (
          <Typography
            key={i}
            dangerouslySetInnerHTML={{ __html: parseDescription(desc) }}
            className={classes.projectDescription}
            variant={isSizeSmall ? "body2" : "body1"}
          ></Typography>
        ))}
        <Divider className={classes.projectInfoDivider} />
        <div className={classes.projectTags}>
          {tags.map((tag, i) => (
            //@ts-ignore
            <MiniTag key={i} {...Tags[tag]} />
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
