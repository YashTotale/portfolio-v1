// React Imports
import React from "react";
import ModifiedA from "../Components/ModifiedA";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, Theme } from "@material-ui/core";
import {} from "@material-ui/icons";
import { PROFILE_PIC, PROFILE_PIC_RATIO } from "../Utils/constants";

interface styleProps {
  width?: string;
  height?: string;
}

const useStyles = makeStyles((theme) => ({
  imgDiv: {
    margin: "30px",
    overflow: "hidden",
    justifySelf: "flex-start",
  },
  img: ({ width, height }: styleProps) => ({
    width,
    height,
  }),
}));

const ProfilePic = ({}) => {
  const isXS = useMediaQuery((theme: Theme) => theme.breakpoints.only("xs"));
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.only("sm"));
  const isMedium = useMediaQuery((theme: Theme) =>
    theme.breakpoints.only("md")
  );

  const width = isXS ? 180 : isSmall ? 210 : isMedium ? 300 : 350;

  const classes = useStyles({
    width,
    height: Math.round(width * PROFILE_PIC_RATIO),
  });
  return (
    <div className={classes.imgDiv}>
      <ModifiedA href={PROFILE_PIC}>
        <img className={classes.img} src={PROFILE_PIC}></img>
      </ModifiedA>
    </div>
  );
};

export default ProfilePic;
