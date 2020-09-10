// React Imports
import React from "react";
import ModifiedA from "../Components/ModifiedA";
import ProfilePics from "../Data/ProfilePictures.json";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, Theme, useTheme } from "@material-ui/core";
import {} from "@material-ui/icons";
import { findClosestInteger } from "../Utils/funcs";

interface styleProps {
  width?: string;
  height?: string;
}

const useStyles = makeStyles((theme) => ({
  img: ({ width, height }: styleProps) => ({
    width: width,
    height: height,
    margin: "30px",
    overflow: "hidden",
    justifySelf: "flex-start",
  }),
}));

const ProfilePic = ({}) => {
  const {
    breakpoints: { values, keys, only },
  }: Theme = useTheme();
  const sizeBools = keys.map((size) => {
    return useMediaQuery(only(size));
  });
  const currentSize = keys.find((size, i) => sizeBools[i]);
  const { width, height, url } = ProfilePics[
    currentSize
      ? currentSize
      : keys[findClosestInteger(window.innerWidth, Object.values(values))]
  ];
  const classes = useStyles({ width, height });
  return (
    <div className={classes.img}>
      <ModifiedA href={url}>
        <img src={url}></img>
      </ModifiedA>
    </div>
  );
};

export default ProfilePic;
