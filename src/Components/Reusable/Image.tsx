// React Imports
import React from "react";

// Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import {} from "@material-ui/icons";
import { BreakpointValues } from "@material-ui/core/styles/createBreakpoints";

interface StyleProps extends BreakpointValues {
  ratio: number;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  img: ({ xl, lg, md, sm, xs, ratio }) => ({
    [theme.breakpoints.down("xl")]: {
      width: xl,
      height: Math.round(xl * ratio),
    },
    [theme.breakpoints.down("lg")]: {
      width: lg,
      height: Math.round(lg * ratio),
    },
    [theme.breakpoints.down("md")]: {
      width: md,
      height: Math.round(md * ratio),
    },
    [theme.breakpoints.down("sm")]: {
      width: sm,
      height: Math.round(sm * ratio),
    },
    [theme.breakpoints.down("xs")]: {
      width: xs,
      height: Math.round(xs * ratio),
    },
    "&:focus": {
      outline: "none",
    },
  }),
}));

interface ImageProps {
  src: string;
  alt: string;
  ratio?: number;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
}

const Image: React.FC<ImageProps> = ({
  ratio = 1,
  alt,
  src,
  xs = 140,
  sm = 160,
  md = 180,
  lg = 200,
  xl = 220,
}) => {
  const classes = useStyles({
    xs,
    sm,
    md,
    lg,
    xl,
    ratio,
  });

  return <img className={classes.img} src={src} alt={alt}></img>;
};

export default Image;
