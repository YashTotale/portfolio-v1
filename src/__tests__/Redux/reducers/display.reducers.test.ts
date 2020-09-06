import { display } from "../../../Redux/reducers/display.reducers";
import {
  TOGGLE_DARK_MODE,
  TOGGLE_NAV_BTNS_MENU,
  CHANGE_COLORS,
  CHANGE_SHADE,
} from "../../../Redux/actions/display.actions";
import { display as originalState } from "../sampleStore";

describe("The display reducer", () => {
  test("Toggles dark mode", () => {
    const fakeAction = {
      type: TOGGLE_DARK_MODE,
      payload: {},
    };

    const expected = { ...originalState, isDarkMode: true };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Toggles Nav Btn Menu Open", () => {
    const fakeAction = {
      type: TOGGLE_NAV_BTNS_MENU,
      payload: {},
    };

    const expected = { ...originalState, isNavBtnsMenuOpen: false };

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

    const expected = {
      ...originalState,
      colors: {
        primary: "#fdd835",
        secondary: "#ffffff",
      },
    };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Changes shade", () => {
    const fakeAction = {
      type: CHANGE_SHADE,
      payload: { shade: "A200", scheme: "secondary" },
    };

    const expected = {
      ...originalState,
      shades: {
        primary: "200",
        secondary: "A200",
      },
    };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });
});
