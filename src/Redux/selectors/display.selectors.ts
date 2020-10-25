import { State } from "./index";
import { createSelector } from "reselect";

export const getIsDarkMode = (state: State) => state.display.isDarkMode;

export const getPrimaryColor = (state: State) => state.display.colors.primary;

export const getSecondaryColor = (state: State) =>
  state.display.colors.secondary;

export const getColors = createSelector(
  getPrimaryColor,
  getSecondaryColor,
  (primary, secondary) => [primary, secondary]
);

export const getPrimaryShade = (state: State) => state.display.shades.primary;

export const getSecondaryShade = (state: State) =>
  state.display.shades.secondary;

export const getShades = createSelector(
  getPrimaryShade,
  getSecondaryShade,
  (primary, secondary) => [primary, secondary]
);

export const getPalette = createSelector(
  getColors,
  getShades,
  (colors, shades) => [...colors, ...shades]
);
