import { display } from "../../../Redux/reducers/display.reducers";
import {
  TOGGLE_DARK_MODE,
  TOGGLE_NAV_BTNS_MENU,
  CHANGE_COLORS,
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

  test("Changes color", () => {
    const fakeAction = {
      type: CHANGE_COLORS,
      payload: {
        scheme: "secondary",
        color: "#ffffff",
      },
    };

    const originalState = {
      colors: {
        primary: "#fdd835",
        secondary: "#000000",
      },
    };

    const expected = {
      colors: {
        primary: "#fdd835",
        secondary: "#ffffff",
      },
    };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });
});
