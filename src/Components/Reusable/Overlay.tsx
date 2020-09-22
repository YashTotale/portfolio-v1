//React Imports
import React, { useState } from "react";

//Material UI Imports
import { makeStyles, Typography, useTheme } from "@material-ui/core";

interface styleProps {
  hovering: boolean;
}

const useStyles = makeStyles((theme) => ({
  mini: {
    display: "flex",
    position: "relative",
    borderRadius: "50%",
    cursor: "pointer",
    margin: "15px",
    width: 150,
    height: 150,
  },
  overlay: {
    position: "absolute",
    borderRadius: "5px",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#1d1c1c",
    visibility: ({ hovering }: styleProps) => (hovering ? "visible" : "hidden"),
    opacity: ({ hovering }: styleProps) => (hovering ? 0.7 : 0),
    transition: "visibility 0.4s, opacity 0.4s",
  },
  name: {
    //Positioning
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    //Display
    textAlign: "center",
    color: theme.palette.common.white,
    fontWeight: 900,
    //Transition
    visibility: ({ hovering }: styleProps) => (hovering ? "visible" : "hidden"),
    opacity: ({ hovering }: styleProps) => (hovering ? 1 : 0),
    transition: "visibility 0.4s, opacity 0.4s",
  },
  img: {
    width: 150,
    height: 150,
    padding: 5,
    border: `4px solid ${
      theme.palette.common[theme.palette.type === "dark" ? "white" : "black"]
    }`,
    borderRadius: "5px",
  },
}));

interface MiniProps {
  name: string;
  icons: string[];
}

const Mini: React.FC<MiniProps> = (props) => {
  const [hovering, setHovering] = useState<boolean>(false);
  const theme = useTheme();
  const classes = useStyles({ hovering });
  return (
    <div
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={classes.mini}
    >
      <div className={classes.overlay}></div>
      <Typography className={classes.name} variant="h5">
        {props.name}
      </Typography>
      <img
        className={classes.img}
        src={theme.palette.type === "light" ? props.icons[0] : props.icons[1]}
        alt={props.name}
      ></img>
    </div>
  );
};

export default Mini;
