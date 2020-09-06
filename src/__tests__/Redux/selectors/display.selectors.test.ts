import {
  getIsDarkMode,
  getIsNavBtnsMenuOpen,
  getPrimaryColor,
  getSecondaryColor,
  getShade,
} from "../../../Redux/selectors/display.selectors";
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

  test("The getShade selector", () => {
    const expected = sampleState.display.shade;
    const actual = getShade(sampleState);
    expect(actual).toEqual(expected);
  });
});
