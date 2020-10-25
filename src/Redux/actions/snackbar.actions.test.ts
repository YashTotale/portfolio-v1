import { severities } from "../../Utils/colors";
import {
  SET_SNACKBAR_MESSAGE,
  setSnackbarMessage,
  HANDLE_SNACKBAR_CLOSE,
  handleSnackbarClose,
  SetSnackbarMessagePayload,
  HandleSnackbarClosePayload,
} from "./snackbar.actions";

describe("The snackbar actions", () => {
  test("The setSnackbarMessage action", () => {
    const message = "test message";
    const color = "#ffffff";

    severities.forEach((severity) => {
      const expected: SetSnackbarMessagePayload = {
        type: SET_SNACKBAR_MESSAGE,
        payload: { message, severity, color },
      };

      const actual = setSnackbarMessage(message, severity, color);

      expect(actual).toEqual(expected);
    });
  });

  test("The handleSnackbarClose action", () => {
    const expected: HandleSnackbarClosePayload = {
      type: HANDLE_SNACKBAR_CLOSE,
      payload: {},
    };

    const actual = handleSnackbarClose();

    expect(actual).toEqual(expected);
  });
});
