//React Imports
import React, { useState } from "react";

//Material UI Imports
import {
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";

interface StyleProps {
  hovering: boolean;
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  mini: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifySelf: "center",
  },
  link: {
    position: "relative",
    [theme.breakpoints.down("xl")]: {
      width: ({ xl }) => xl,
      height: ({ xl }) => xl,
    },
    [theme.breakpoints.down("lg")]: {
      width: ({ lg }) => lg,
      height: ({ lg }) => lg,
    },
    [theme.breakpoints.down("md")]: {
      width: ({ md }) => md,
      height: ({ md }) => md,
    },
    [theme.breakpoints.down("sm")]: {
      width: ({ sm }) => sm,
      height: ({ sm }) => sm,
    },
    [theme.breakpoints.down("xs")]: {
      width: ({ xs }) => xs,
      height: ({ xs }) => xs,
    },
  },
  overlay: {
    position: "absolute",
    borderRadius: 5,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#1d1c1c",
    visibility: ({ hovering }) => (hovering ? "visible" : "hidden"),
    opacity: ({ hovering }) => (hovering ? 0.7 : 0),
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
    width: "calc(100% - 20px)",
    maxHeight: "calc(100% - 20px)",
    textOverflow: "ellipsis",
    overflowX: "hidden",
    overflowY: "scroll",
    //Transition
    visibility: ({ hovering }) => (hovering ? "visible" : "hidden"),
    opacity: ({ hovering }) => (hovering ? 1 : 0),
    transition: "visibility 0.4s, opacity 0.4s",
  },
  img: {
    padding: 5,
    border: `4px solid ${
      theme.palette.common[theme.palette.type === "dark" ? "white" : "black"]
    }`,
    borderRadius: "5px",
    width: "inherit",
    height: "inherit",
  },
  caption: {
    textAlign: "center",
    marginTop: 5,
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("xl")]: {
      width: ({ xl }) => xl,
    },
    [theme.breakpoints.down("lg")]: {
      width: ({ lg }) => lg,
    },
    [theme.breakpoints.down("md")]: {
      width: ({ md }) => md,
    },
    [theme.breakpoints.down("sm")]: {
      width: ({ sm }) => sm,
    },
    [theme.breakpoints.down("xs")]: {
      width: ({ xs }) => xs,
    },
  },
}));

export const DefaultOverlaySizes = {
  xl: 250,
  lg: 200,
  md: 180,
  sm: 160,
  xs: 150,
};

interface MiniProps {
  name: string;
  icons: string[];
  url: string;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
}

const Mini: React.FC<MiniProps> = ({
  name,
  icons,
  url,
  xl = 250,
  lg = 200,
  md = 180,
  sm = 160,
  xs = 150,
}) => {
  const [hovering, setHovering] = useState<boolean>(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles({ hovering, xl, lg, md, sm, xs });
  return (
    <div
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={classes.mini}
    >
      <Link className={classes.link} to={url}>
        <div className={classes.overlay}></div>
        <Typography className={classes.name} variant="h4">
          {name}
        </Typography>
        <img
          className={classes.img}
          src={theme.palette.type === "light" ? icons[0] : icons[1]}
          alt={name}
        ></img>
      </Link>
      {isSmall && (
        <Typography className={classes.caption} variant="h5">
          {name}
        </Typography>
      )}
    </div>
  );
};

export default Mini;
