// React Imports
import React from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar } from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({}));

interface SnackBarProps {
  message: string;
}

const SnackBar: React.FC<SnackBarProps> = ({ message }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return <Snackbar />;
};

export default SnackBar;
