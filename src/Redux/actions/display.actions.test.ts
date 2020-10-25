import { cssColors, schemes, shades } from "../../Utils/colors";
import {
  TOGGLE_DARK_MODE,
  toggleDarkMode,
  CHANGE_COLORS,
  changeColors,
  CHANGE_SHADE,
  changeShade,
  ToggleDarkModePayload,
  ChangeColorsPayload,
  ChangeShadePayload,
} from "./display.actions";

describe("The display actions", () => {
  test("The toggleDarkMode action", () => {
    const expected: ToggleDarkModePayload = {
      type: TOGGLE_DARK_MODE,
      payload: {},
    };
    const actual = toggleDarkMode();

    expect(actual).toEqual(expected);
  });

  test("The changeColors action", () => {
    schemes.forEach((scheme) => {
      cssColors.forEach((color) => {
        const expected: ChangeColorsPayload = {
          type: CHANGE_COLORS,
          payload: { scheme, color },
        };
        const actual = changeColors(scheme, color);

        expect(actual).toEqual(expected);
      });
    });
  });

  test("The changeShade action", () => {
    schemes.forEach((scheme) => {
      shades.forEach((shade) => {
        const expected: ChangeShadePayload = {
          type: CHANGE_SHADE,
          payload: { scheme, shade },
        };
        const actual = changeShade(scheme, shade);

        expect(actual).toEqual(expected);
      });
    });
  });
});
