//React Imports
import React from "react";
import { ProjectProps } from "../../../Utils/constants";

//Material UI Imports
import { makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  projectDiv: {
    width: "48%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  project: {},
  projectImg: {
    width: 250,
    height: 250,
  },
}));

const Display: React.FC<ProjectProps> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.projectDiv}>
      <div className={classes.project}>
        <img
          className={classes.projectImg}
          src={theme.palette.type === "light" ? props.icons[0] : props.icons[1]}
        ></img>
      </div>
    </div>
  );
};

export default Display;
