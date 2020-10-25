import {
  TOGGLE_DARK_MODE,
  TOGGLE_NAV_BTNS_MENU,
  CHANGE_COLORS,
  CHANGE_SHADE,
  ToggleDarkModePayload,
  ToggleNavBtnsMenuPayload,
  ChangeColorsPayload,
  ChangeShadePayload,
} from "../actions/display.actions";
import {
  displayReducer,
  sampleDisplayState as originalState,
  DisplayState,
} from "./display.reducers";

describe("The display reducer", () => {
  test("Toggles dark mode", () => {
    const fakeAction: ToggleDarkModePayload = {
      type: TOGGLE_DARK_MODE,
      payload: {},
    };

    const expected: DisplayState = {
      ...originalState,
      isDarkMode: !originalState.isDarkMode,
    };

    const actual = displayReducer(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Toggles Nav Btn Menu Open", () => {
    const fakeAction1: ToggleNavBtnsMenuPayload = {
      type: TOGGLE_NAV_BTNS_MENU,
      payload: {},
    };

    const expected1: DisplayState = {
      ...originalState,
      isNavBtnsMenuOpen: !originalState.isNavBtnsMenuOpen,
    };

    const actual1 = displayReducer(originalState, fakeAction1);

    expect(actual1).toEqual(expected1);

    const fakeAction2: ToggleNavBtnsMenuPayload = {
      type: TOGGLE_NAV_BTNS_MENU,
      payload: { isOpen: true },
    };

    const expected2: DisplayState = {
      ...originalState,
      isNavBtnsMenuOpen: true,
    };

    const actual2 = displayReducer(originalState, fakeAction2);

    expect(actual2).toEqual(expected2);
  });

  test("Changes color", () => {
    const color = "deepPurple";

    const fakeAction: ChangeColorsPayload = {
      type: CHANGE_COLORS,
      payload: {
        scheme: "secondary",
        color,
      },
    };

    const expected: DisplayState = {
      ...originalState,
      colors: {
        primary: originalState.colors.primary,
        secondary: color,
      },
    };

    const actual = displayReducer(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Changes shade", () => {
    const fakeAction: ChangeShadePayload = {
      type: CHANGE_SHADE,
      payload: { shade: "A200", scheme: "primary" },
    };

    const expected: DisplayState = {
      ...originalState,
      shades: {
        primary: "A200",
        secondary: originalState.shades.secondary,
      },
    };

    const actual = displayReducer(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });
});
