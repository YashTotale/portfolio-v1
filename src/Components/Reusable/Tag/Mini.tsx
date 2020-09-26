//React Imports
import React from "react";
import { Link } from "react-router-dom";
import { TagProps } from "../../../Utils/interfaces";

//Material UI Imports
import { Avatar, Chip, makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tag: {
    margin: 2,
    "& .MuiChip-label": {
      fontSize: "0.875rem",
    },
    "& .MuiChip-avatarColorPrimary": {
      backgroundColor: "inherit",
    },
  },
}));

const Mini: React.FC<TagProps> = ({ name, url, icons }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Chip
      clickable
      size="medium"
      label={name}
      className={classes.tag}
      avatar={
        icons ? (
          <Avatar src={icons[theme.palette.type === "light" ? 0 : 1]}></Avatar>
        ) : undefined
      }
      component={Link}
      to={`/tags/${url}`}
      color="primary"
      variant="outlined"
    />
  );
};

export default Mini;
