import {
  getIsDarkMode,
  getIsNavBtnsMenuOpen,
  getPrimaryColor,
  getSecondaryColor,
  getColors,
  getPrimaryShade,
  getSecondaryShade,
  getShades,
  getPalette,
  getSnackbarMessage,
  getIsSnackbarOpen,
  getSnackbarSeverity,
} from "../../../Redux/selectors/display.selectors";
import { cssColor, shade } from "../../../Utils/colors";
import sampleState from "../sampleStore";

describe("The display selectors", () => {
  test("The getIsDarkMode selector", () => {
    const expected = sampleState.display.isDarkMode;
    const actual = getIsDarkMode(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getIsNavBtnsMenuOpen selector", () => {
    const expected = sampleState.display.isNavBtnsMenuOpen;
    const actual = getIsNavBtnsMenuOpen(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getPrimaryColor selector", () => {
    const expected = sampleState.display.colors.primary;
    const actual = getPrimaryColor(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getSecondaryColor selector", () => {
    const expected = sampleState.display.colors.secondary;
    const actual = getSecondaryColor(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getColors selector", () => {
    const fakePrimary = "amber";
    const fakeSecondary = "yellow";
    const expected = [fakePrimary, fakeSecondary];
    const actual = getColors.resultFunc(fakePrimary, fakeSecondary);
    expect(actual).toEqual(expected);
  });

  test("The getPrimaryShade selector", () => {
    const expected = sampleState.display.shades.primary;
    const actual = getPrimaryShade(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getSecondaryShade selector", () => {
    const expected = sampleState.display.shades.secondary;
    const actual = getSecondaryShade(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getShades selector", () => {
    const fakePrimary = "50";
    const fakeSecondary = "A700";
    const expected = [fakePrimary, fakeSecondary];
    const actual = getShades.resultFunc(fakePrimary, fakeSecondary);
    expect(actual).toEqual(expected);
  });

  test("The getPalette selector", () => {
    const fakeColors: cssColor[] = ["deepPurple", "deepOrange"];
    const fakeShades: shade[] = ["300", "A400"];
    const expected = [...fakeColors, ...fakeShades];
    const actual = getPalette.resultFunc(fakeColors, fakeShades);
    expect(actual).toEqual(expected);
  });

  test("The getSnackbarMessage selector", () => {
    const expected = sampleState.display.snackBar.message;
    const actual = getSnackbarMessage(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getIsSnackbarOpen selector", () => {
    const expected = sampleState.display.snackBar.isOpen;
    const actual = getIsSnackbarOpen(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getSnackbarSeverity selector", () => {
    const expected = sampleState.display.snackBar.severity;
    const actual = getSnackbarSeverity(sampleState);
    expect(actual).toEqual(expected);
  });
});
