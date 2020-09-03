import {
  getIsDarkMode,
  getIsNavBtnsMenuOpen,
} from "../../../Redux/selectors/display.selectors";

const sampleState = {
  display: {
    isDarkMode: true,
    isNavBtnsMenuOpen: true,
  },
};

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
});
