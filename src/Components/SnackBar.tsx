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
import { Snackbar, SnackbarCloseReason } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import {} from "@material-ui/icons";
import { handleSnackbarClose } from "../Redux/actions";

// const useStyles = makeStyles((theme) => ({}));

interface SnackBarProps {}

const SnackBar: React.FC<SnackBarProps> = ({}) => {
  // const classes = useStyles();
  const dispatch = useDispatch();

  const handleClose = (
    event: React.SyntheticEvent<any, Event>,
    reason?: SnackbarCloseReason
  ) => {
    if (reason !== "clickaway") dispatch(handleSnackbarClose());
  };

  const isOpen = useSelector(getIsSnackbarOpen);
  const message = useSelector(getSnackbarMessage);
  const severity = useSelector(getSnackbarSeverity);

  return (
    <Snackbar
      autoHideDuration={3000}
      key={message}
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
