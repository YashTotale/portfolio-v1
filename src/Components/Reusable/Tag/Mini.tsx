//React Imports
import React from "react";
import { Link } from "react-router-dom";
import { TagProps } from "../../../Utils/interfaces";

//Material UI Imports
import { Chip, makeStyles } from "@material-ui/core";
import StaticImage from "../StaticImage";

const useStyles = makeStyles((theme) => ({
  tag: {
    margin: 2,
    "& .MuiChip-avatarColorSecondary": {
      backgroundColor: "inherit",
    },
  },
}));

const Mini: React.FC<TagProps> = ({ name, url }) => {
  const classes = useStyles();
  return (
    <Chip
      clickable
      size="medium"
      label={name}
      className={classes.tag}
      avatar={<StaticImage name={name} type="Tags" avatar />}
      component={Link}
      to={`/tags/${url}`}
      color="secondary"
      variant="outlined"
    />
  );
};

export default Mini;
