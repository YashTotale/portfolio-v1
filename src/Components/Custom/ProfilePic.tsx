// React Imports
import React from "react";
import Image from "../Reusable/Image";
import ProfilePicture from "../../Images/Misc/ProfilePicture.jpg";
import { PROFILE_PIC_RATIO } from "../../Utils/constants";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  img: {
    margin: "20px 10px",
  },
}));

const ProfilePic: React.FC = () => {
  const classes = useStyles();
  return (
    <Image
      className={classes.img}
      ratio={PROFILE_PIC_RATIO}
      src={ProfilePicture}
      alt="Profile Picture"
      xs={140}
      sm={160}
      md={180}
      lg={200}
      xl={220}
    />
  );
};

export default ProfilePic;
