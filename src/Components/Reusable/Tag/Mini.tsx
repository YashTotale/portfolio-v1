//React Imports
import React from "react";
import StyledLink from "../StyledLink";
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

const Mini: React.FC<TagProps> = ({ name, url, icons }) => {
  const classes = useStyles();
  return (
    <Chip
      clickable
      size="medium"
      label={name}
      className={classes.tag}
      avatar={<StaticImage icons={icons} name={name} type="Tags" avatar />}
      component={StyledLink}
      to={`/tags/${url}`}
      color="secondary"
      variant="outlined"
    />
  );
};

export default Mini;
