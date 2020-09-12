//React Imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfilePic from "./ProfilePic";
import { BACKGROUND_PIC } from "../../Utils/constants";

//Redux Imports
import { toggleDarkModeWMessage } from "../../Redux/thunks";
import { useDispatch } from "react-redux";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

interface styleProps {
  hovering?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    padding: "20px",
    margin: "20px",
    position: "relative",
    //Background
    backgroundImage: `url(${BACKGROUND_PIC})`,
    backgroundOrigin: "border-box",
    backgroundPositionY: "20%",
    backgroundSize: "cover",
  },
  overlay: {
    backgroundColor: "#1d1c1c",
    //position
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    //opacity transition
    transition: "opacity 0.4s",
    opacity: ({ hovering }: styleProps) => (hovering ? 0.5 : 0.8),
  },
  content: {
    zIndex: 1,
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
  },
  text: {
    textAlign: "center",
    width: "100%",
    margin: "10px 0px",
    textOverflow: "ellipsis",
    color: "wheat",
  },
  heading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
  },
  p: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));

const AboutMe: React.FC = () => {
  const [hovering, setHovering] = useState(false);
  const dispatch = useDispatch();

  const classes = useStyles({ hovering });
  return (
    <Paper
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={classes.root}
    >
      <div className={classes.overlay} />
      <div className={classes.content}>
        <ProfilePic />
        <div className={classes.info}>
          <Typography
            className={`${classes.text} ${classes.heading}`}
            variant="h4"
          >
            Hi, I'm Yash
          </Typography>
          <Typography className={`${classes.text} ${classes.p}`} variant="h6">
            I am a high school Junior in the Bay Area with an interest in
            Computer Science. Most of my Web Development and Programming
            experience comes from creating personal projects and leading high
            school clubs.
          </Typography>
          <Typography className={`${classes.text} ${classes.p}`} variant="h6">
            Other than coding, I like reading, running, and learning about other
            topics, especially finance.
          </Typography>
          <Typography className={`${classes.text} ${classes.p}`} variant="h6">
            You can check out my personal projects, work experience, and some
            cool features, like changing the&nbsp;
            <Clickable>
              <span onClick={() => dispatch(toggleDarkModeWMessage())}>
                theme
              </span>
            </Clickable>
            &nbsp;and&nbsp;
            <Clickable>
              <Link to="/colors">colors</Link>
            </Clickable>
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

const useClickableStyles = makeStyles((theme: Theme) => ({
  clickable: (hovering: boolean) => ({
    padding: "2px",
    textDecoration: "none",
    border: "2px solid wheat",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "color 0.2s, background-color 0.2s",
    color: "inherit",
    backgroundColor: hovering
      ? "rgb(245,222,179, 0.4)"
      : "rgb(245,222,179, 0.2)",
  }),
}));

const Clickable: React.FC = (props) => {
  const [hovering, setHovering] = useState<boolean>(false);
  const classes = useClickableStyles(hovering);

  //@ts-ignore
  return React.cloneElement(props.children, {
    className: classes.clickable,
    onMouseOver: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  });
};

export default AboutMe;
