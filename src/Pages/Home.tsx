//React Imports
import React, { useState } from "react";
import ProfilePic from "../Components/ProfilePic";
import { BACKGROUND_PIC } from "../Utils/constants";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, useTheme, useMediaQuery, Typography } from "@material-ui/core";

interface styleProps {
  hovering?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    padding: "20px",
    margin: "20px",
    backgroundImage: `url(${BACKGROUND_PIC})`,
    backgroundOrigin: "border-box",
    backgroundPositionY: "20%",
    backgroundSize: "cover",
    position: "relative",
  },
  overlay: {
    backgroundColor: "#1d1c1c",
    position: "absolute",
    transition: "opacity 0.4s",
    opacity: ({ hovering }: styleProps) => (hovering ? 0.5 : 0.8),
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    zIndex: 1,
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    display: "flex",
    flexGrow: 1,
  },
  text: {
    color: "wheat",
  },
}));

const HomePage: React.FC = () => {
  const [hovering, setHovering] = useState(false);
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
          <Typography className={classes.text} variant="h4">
            Hi, I'm Yash
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default HomePage;
