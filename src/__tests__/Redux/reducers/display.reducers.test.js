import { display } from "../../../Redux/reducers";
import { TOGGLE_DARK_MODE } from "../../../Redux/actions";

describe("The display reducer", () => {
  test("Toggles dark mode", () => {
    const fakeAction = {
      type: TOGGLE_DARK_MODE,
      payload: {},
    };

    const originalState = { isDarkMode: false };

    const expected = { isDarkMode: true };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });
});
