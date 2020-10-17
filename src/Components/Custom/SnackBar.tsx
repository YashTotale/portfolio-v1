// React Imports
import React from "react";
import { getTextColor } from "../../Utils/colors";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import {
  getIsSnackbarOpen,
  getSnackbarColor,
  getSnackbarMessage,
  getSnackbarSeverity,
} from "../../Redux/selectors/display.selectors";
import { handleSnackbarClose } from "../../Redux/actions";

// Material UI Imports
import {
  Snackbar,
  SnackbarCloseReason,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

interface StyleProps {
  color: string | null;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  alert: ({ color }) => ({
    backgroundColor: color ? color : "auto",
    color: color ? getTextColor(theme, color) : "auto",
  }),
}));

interface SnackBarProps {}

const SnackBar: React.FC<SnackBarProps> = () => {
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
  const color = useSelector(getSnackbarColor);

  const classes = useStyles({
    color,
  });

  return (
    <Snackbar
      autoHideDuration={3000}
      key={message}
      onClose={handleClose}
      open={isOpen}
      message={message}
    >
      <Alert
        className={classes.alert}
        variant="filled"
        severity={severity}
        onClose={handleClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
