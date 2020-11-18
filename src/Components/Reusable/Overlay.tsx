//React Imports
import React, { useState } from "react";
import StaticImage from "./StaticImage";
import StyledLink from "./StyledLink";
import { ImageFolder } from "../../Utils/types";

//Material UI Imports
import {
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { BreakpointValues } from "@material-ui/core/styles/createBreakpoints";

interface StyleProps extends BreakpointValues {
  hovering: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifySelf: "center",
  },
  link: ({ xl, lg, md, sm, xs }) => ({
    position: "relative",
    [theme.breakpoints.down("xl")]: {
      width: xl,
      height: xl,
    },
    [theme.breakpoints.down("lg")]: {
      width: lg,
      height: lg,
    },
    [theme.breakpoints.down("md")]: {
      width: md,
      height: md,
    },
    [theme.breakpoints.down("sm")]: {
      width: sm,
      height: sm,
    },
    [theme.breakpoints.down("xs")]: {
      width: xs,
      height: xs,
    },
  }),
  overlay: ({ hovering }) => ({
    position: "absolute",
    borderRadius: 5,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#1d1c1c",
    visibility: hovering ? "visible" : "hidden",
    opacity: hovering ? 0.7 : 0,
    transition: theme.transitions.create(["visibility", "opacity"], {
      duration: "0.4s",
    }),
  }),
  name: ({ hovering }) => ({
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
    visibility: hovering ? "visible" : "hidden",
    opacity: hovering ? 1 : 0,
    transition: theme.transitions.create(["visibility", "opacity"], {
      duration: "0.4s",
    }),
  }),
  img: {
    padding: 5,
    border: `4px solid ${
      theme.palette.common[theme.palette.type === "dark" ? "white" : "black"]
    }`,
    borderRadius: "5px",
    width: "inherit",
    height: "inherit",
  },
  caption: ({ xl, lg, md, sm, xs }) => ({
    textAlign: "center",
    marginTop: 5,
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("xl")]: {
      width: xl,
    },
    [theme.breakpoints.down("lg")]: {
      width: lg,
    },
    [theme.breakpoints.down("md")]: {
      width: md,
    },
    [theme.breakpoints.down("sm")]: {
      width: sm,
    },
    [theme.breakpoints.down("xs")]: {
      width: xs,
    },
  }),
}));

export const DefaultOverlaySizes = {
  xl: 250,
  lg: 200,
  md: 180,
  sm: 160,
  xs: 150,
};

interface OverlayProps {
  name: string;
  icons: string[];
  type: ImageFolder;
  url: string;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
}

const Overlay: React.FC<OverlayProps> = ({
  name,
  type,
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
      className={classes.root}
    >
      <StyledLink className={classes.link} to={url}>
        <div className={classes.overlay}></div>
        <Typography className={classes.name} variant={isSmall ? "h5" : "h4"}>
          {name}
        </Typography>
        <StaticImage
          icons={icons}
          name={name}
          type={type}
          className={classes.img}
        />
      </StyledLink>
      {isSmall && (
        <Typography className={classes.caption} variant="h5">
          {name}
        </Typography>
      )}
    </div>
  );
};

export default Overlay;
