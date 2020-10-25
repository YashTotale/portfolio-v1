import { Color } from "@material-ui/lab";

export interface SetSnackbarMessagePayload {
  type: typeof SET_SNACKBAR_MESSAGE;
  payload: { message: string; severity: Color; color: string | null };
}

export const SET_SNACKBAR_MESSAGE = "SET_SNACKBAR_MESSAGE";
export const setSnackbarMessage = (
  message: string = "",
  severity: Color,
  color: string | null
): SetSnackbarMessagePayload => ({
  type: SET_SNACKBAR_MESSAGE,
  payload: { message, severity, color },
});

export interface HandleSnackbarClosePayload {
  type: typeof HANDLE_SNACKBAR_CLOSE;
  payload: {};
}

export const HANDLE_SNACKBAR_CLOSE = "HANDLE_SNACKBAR_CLOSE";
export const handleSnackbarClose = (): HandleSnackbarClosePayload => ({
  type: HANDLE_SNACKBAR_CLOSE,
  payload: {},
});
