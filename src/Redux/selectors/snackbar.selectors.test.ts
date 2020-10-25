import {
  getSnackbarMessage,
  getIsSnackbarOpen,
  getSnackbarSeverity,
  getSnackbarColor,
} from "./snackbar.selectors";
import { sampleState } from "../reducers";

describe("The snackbar selectors", () => {
  test("The getSnackbarMessage selector", () => {
    const expected = sampleState.snackbar.message;
    const actual = getSnackbarMessage(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getIsSnackbarOpen selector", () => {
    const expected = sampleState.snackbar.isOpen;
    const actual = getIsSnackbarOpen(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getSnackbarSeverity selector", () => {
    const expected = sampleState.snackbar.severity;
    const actual = getSnackbarSeverity(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getSnackbarColor selector", () => {
    const expected = sampleState.snackbar.color;
    const actual = getSnackbarColor(sampleState);
    expect(actual).toEqual(expected);
  });
});
