// React Imports
import React from "react";

// Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import {} from "@material-ui/icons";

interface StyleProps {
  width?: number;
  ratio: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  img: ({ width, xl, lg, md, sm, xs, ratio }) => ({
    width: width,
    height: width && Math.round(width * ratio),
    [theme.breakpoints.only("xl")]: xl && {
      width: xl,
      height: Math.round(xl * ratio),
    },
    [theme.breakpoints.only("lg")]: lg && {
      width: lg,
      height: Math.round(lg * ratio),
    },
    [theme.breakpoints.only("md")]: md && {
      width: md,
      height: Math.round(md * ratio),
    },
    [theme.breakpoints.only("sm")]: sm && {
      width: sm,
      height: Math.round(sm * ratio),
    },
    [theme.breakpoints.only("xs")]: xs && {
      width: xs,
      height: Math.round(xs * ratio),
    },
  }),
}));

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  className?: string;
  avatar?: boolean;
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
  width,
  avatar,
  className,
  xs,
  sm,
  md,
  lg,
  xl,
}) => {
  const classes = useStyles({
    width,
    xs,
    sm,
    md,
    lg,
    xl,
    ratio,
  });

  return avatar ? (
    <Avatar className={`${classes.img} ${className}`} src={src} alt={alt} />
  ) : (
    <img className={`${classes.img} ${className}`} src={src} alt={alt} />
  );
};

export default Image;
