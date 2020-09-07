// React Imports
import React from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import {
  getIsSnackbarOpen,
  getSnackbarMessage,
  getSnackbarSeverity,
} from "../Redux/selectors/display.selectors";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({}));

interface SnackBarProps {}

const SnackBar: React.FC<SnackBarProps> = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClose = () => {};

  const isOpen = useSelector(getIsSnackbarOpen);
  const message = useSelector(getSnackbarMessage);
  const severity = useSelector(getSnackbarSeverity);

  return (
    <Snackbar
      autoHideDuration={5000}
      onClose={handleClose}
      open={isOpen}
      message={message}
    >
      <Alert variant="filled" severity={severity} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
