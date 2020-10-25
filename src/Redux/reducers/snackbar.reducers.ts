import { AnyAction } from "redux";
import {
  SET_SNACKBAR_MESSAGE,
  HANDLE_SNACKBAR_CLOSE,
} from "../actions/snackbar.actions";
import { Color } from "@material-ui/lab";

export interface SnackbarState {
  isOpen: boolean;
  message: string;
  severity: Color;
  color: string | null;
}

export const initialSnackbarState: SnackbarState = {
  isOpen: false,
  message: "",
  severity: "info",
  color: null,
};

export const snackbarReducer = (
  state = initialSnackbarState,
  action: AnyAction
): SnackbarState => {
  const { type, payload } = action;
  switch (type) {
    case SET_SNACKBAR_MESSAGE: {
      const { message, severity, color } = payload;
      return { ...state, message, severity, color, isOpen: true };
    }
    case HANDLE_SNACKBAR_CLOSE: {
      return { ...state, isOpen: false };
    }
    default: {
      return state;
    }
  }
};

export const sampleSnackbarState = {
  ...initialSnackbarState,
};
