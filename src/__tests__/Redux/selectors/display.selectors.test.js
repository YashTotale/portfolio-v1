import { getIsDarkMode } from "../../../Redux/selectors/display.selectors";

const sampleState = {
  display: {
    isDarkMode: true,
  },
};

describe("The display selectors", () => {
  test("The getIsDarkMode selector", () => {
    const expected = sampleState.display.isDarkMode;
    const actual = getIsDarkMode(sampleState);
    expect(actual).toEqual(expected);
  });
});
