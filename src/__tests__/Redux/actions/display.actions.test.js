import {
  TOGGLE_DARK_MODE,
  toggleDarkMode,
} from "../../../Redux/actions/display.actions";

describe("The display actions", () => {
  test("The toggleDarkMode action", () => {
    const expected = {
      type: TOGGLE_DARK_MODE,
      payload: {},
    };
    const actual = toggleDarkMode();

    expect(actual).toEqual(expected);
  });
});
