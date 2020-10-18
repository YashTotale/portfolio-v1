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
  imgDiv: {
    margin: "20px 10px",
    overflow: "hidden",
    justifySelf: "flex-start",
  },
}));

const ProfilePic: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.imgDiv}>
      <Image
        ratio={PROFILE_PIC_RATIO}
        src={ProfilePicture}
        alt="Profile Picture"
      />
    </div>
  );
};

export default ProfilePic;
