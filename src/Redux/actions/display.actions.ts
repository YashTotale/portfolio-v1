import { cssColor, scheme, shade } from "../../Utils/colors";

//Toggle Dark Mode

export interface ToggleDarkModePayload {
  type: typeof TOGGLE_DARK_MODE;
  payload: {};
}

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const toggleDarkMode = (
  isDarkMode?: boolean
): ToggleDarkModePayload => ({
  type: TOGGLE_DARK_MODE,
  payload: {
    isDarkMode,
  },
});

//Change colors

export interface ChangeColorsPayload {
  type: typeof CHANGE_COLORS;
  payload: {
    scheme: scheme;
    color: cssColor;
  };
}

export const CHANGE_COLORS = "CHANGE_COLORS";
export const changeColors = (
  scheme: scheme,
  color: cssColor
): ChangeColorsPayload => ({
  type: CHANGE_COLORS,
  payload: { scheme, color },
});

//Change shade

export interface ChangeShadePayload {
  type: typeof CHANGE_SHADE;
  payload: { shade: shade; scheme: scheme };
}

export const CHANGE_SHADE = "CHANGE_SHADE";
export const changeShade = (
  scheme: scheme,
  shade: shade
): ChangeShadePayload => ({
  type: CHANGE_SHADE,
  payload: { scheme, shade },
});
