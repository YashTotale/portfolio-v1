import {
  SET_SNACKBAR_MESSAGE,
  HANDLE_SNACKBAR_CLOSE,
  SetSnackbarMessagePayload,
  HandleSnackbarClosePayload,
} from "../actions/snackbar.actions";
import {
  SnackbarState,
  sampleSnackbarState as originalState,
  snackbarReducer,
} from "./snackbar.reducers";

describe("The snackbar reducer", () => {
  test("Sets Snackbar message", () => {
    const message = "test";
    const severity = "error";
    const color = null;

    const fakeAction: SetSnackbarMessagePayload = {
      type: SET_SNACKBAR_MESSAGE,
      payload: { message, severity, color },
    };

    const expected: SnackbarState = {
      ...originalState,
      isOpen: true,
      severity,
      message,
      color,
    };

    const actual = snackbarReducer(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Closes the Snackbar", () => {
    const fakeAction: HandleSnackbarClosePayload = {
      type: HANDLE_SNACKBAR_CLOSE,
      payload: {},
    };

    const expected: SnackbarState = {
      ...originalState,
      isOpen: false,
    };

    const actual = snackbarReducer(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });
});
