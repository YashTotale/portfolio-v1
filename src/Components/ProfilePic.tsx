// React Imports
import React from "react";
import ModifiedA from "../Components/ModifiedA";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, useTheme } from "@material-ui/core";
import {} from "@material-ui/icons";

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
  const aspectRatio = 1.2776;
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.only("xs"));
  const isSmall = useMediaQuery(theme.breakpoints.only("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.only("md"));

  const width = isXS ? 180 : isSmall ? 210 : isMedium ? 300 : 350;

  const classes = useStyles({ width, height: Math.round(width * aspectRatio) });
  return (
    <div className={classes.imgDiv}>
      <ModifiedA href="https://drive.google.com/uc?export=view&id=13_ogdHkakqTPNH-NVnhu1_IPGwymiaZW">
        <img
          className={classes.img}
          src="https://drive.google.com/uc?export=view&id=13_ogdHkakqTPNH-NVnhu1_IPGwymiaZW"
        ></img>
      </ModifiedA>
    </div>
  );
};

export default ProfilePic;
