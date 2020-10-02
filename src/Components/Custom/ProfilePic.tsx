// React Imports
import React from "react";
import ModifiedA from "../Reusable/ModifiedA";
import Image from "../Reusable/Image";
import { PROFILE_PIC } from "../../Utils/links";
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
  a: {
    "&:focus": {
      outline: "none",
    },
  },
}));

const ProfilePic: React.FC = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.imgDiv}>
      <ModifiedA className={classes.a} tabIndex={-1} href={PROFILE_PIC}>
        <Image ratio={PROFILE_PIC_RATIO} src={PROFILE_PIC} />
      </ModifiedA>
    </div>
  );
};

export default ProfilePic;
