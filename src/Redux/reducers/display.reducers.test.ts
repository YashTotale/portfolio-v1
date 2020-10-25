import {
  TOGGLE_DARK_MODE,
  CHANGE_COLORS,
  CHANGE_SHADE,
  ToggleDarkModePayload,
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
