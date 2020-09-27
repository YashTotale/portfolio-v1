// React Imports
import React from "react";

// Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import {} from "@material-ui/icons";

interface StyleProps {
  width: number;
  height: number;
}

const useStyles = makeStyles((theme) => ({
  img: ({ width, height }: StyleProps) => ({
    width,
    height,
  }),
}));

interface ImageProps {
  ratio?: number;
  src: string;
}

const Image: React.FC<ImageProps> = ({ ratio = 1, src }) => {
  const isXS = useMediaQuery<Theme>((theme) => theme.breakpoints.only("xs"));
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.only("sm"));
  const isMedium = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.only("md")
  );

  const width = isXS ? 140 : isSmall ? 160 : isMedium ? 180 : 200;
  const classes = useStyles({
    width,
    height: Math.round(width * ratio),
  });

  return <img className={classes.img} src={src}></img>;
};

export default Image;
