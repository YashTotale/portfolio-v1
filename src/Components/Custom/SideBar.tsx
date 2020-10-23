// React Imports
import React from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  // Styles
}));

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return <></>;
};

export default SideBar;
