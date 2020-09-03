import { display } from "../../../Redux/reducers/display.reducers";
import {
  TOGGLE_DARK_MODE,
  TOGGLE_NAV_BTNS_MENU,
} from "../../../Redux/actions/display.actions";

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

  test("Toggles dark mode", () => {
    const fakeAction = {
      type: TOGGLE_NAV_BTNS_MENU,
      payload: {},
    };

    const originalState = { isNavBtnsMenuOpen: false };

    const expected = { isNavBtnsMenuOpen: true };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });
});
