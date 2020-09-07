// React Imports
import React from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import {
  getIsSnackbarOpen,
  getSnackbarMessage,
} from "../Redux/selectors/display.selectors";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar } from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({}));

interface SnackBarProps {}

const SnackBar: React.FC<SnackBarProps> = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isOpen = useSelector(getIsSnackbarOpen);
  const message = useSelector(getSnackbarMessage);
  return <Snackbar open={isOpen} message={message} />;
};

export default SnackBar;
