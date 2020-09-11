//React Imports
import React, { useState } from "react";
import ProfilePic from "./ProfilePic";
import { BACKGROUND_PIC } from "../../Utils/constants";

//Redux Imports
import { toggleDarkModeWMessage } from "../../Redux/thunks";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

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
  clickable: {
    textDecoration: "underline",
    cursor: "pointer",
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
            Computer Science. By creating personal projects and leading high
            school clubs, I have been exposed to Web Development and
            Programming. I'm looking to work on interesting projects and expand
            my skillset.
          </Typography>
          <Typography className={`${classes.text} ${classes.p}`} variant="h6">
            Other than coding, I like reading, running, and learning about other
            topics, especially finance.
          </Typography>
          <Typography className={`${classes.text} ${classes.p}`} variant="h6">
            You can check out my personal projects, work experience, and some
            cool features (like changing the&nbsp;
            <span
              className={classes.clickable}
              onClick={() => dispatch(toggleDarkModeWMessage())}
            >
              theme
            </span>
            &nbsp;and{" "}
            <span
              className={classes.clickable}
              onClick={() => alert("clicked")}
            >
              colors
            </span>
            ) on this website.
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default AboutMe;
