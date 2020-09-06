interface ItoggleDarkMode {
  type: string;
  payload: {};
}

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const toggleDarkMode = (): ItoggleDarkMode => ({
  type: TOGGLE_DARK_MODE,
  payload: {},
});

interface ItoggleNavBtnsMenu {
  type: string;
  payload: {};
}

export const TOGGLE_NAV_BTNS_MENU = "TOGGLE_NAV_BTNS_MENU";
export const toggleNavBtnsMenu = (isOpen?: boolean): ItoggleNavBtnsMenu => ({
  type: TOGGLE_NAV_BTNS_MENU,
  payload: { isOpen },
});

interface IchangeColors {
  type: string;
  payload: {};
}

export const CHANGE_COLORS = "CHANGE_COLORS";
export const changeColors = (
  scheme: "primary" | "secondary",
  color: string
): IchangeColors => ({
  type: CHANGE_COLORS,
  payload: { scheme, color },
});

interface IchangeShade {
  type: string;
  payload: { shade: string; scheme: string };
}

export const CHANGE_SHADE = "CHANGE_SHADE";
export const changeShade = (
  scheme: "primary" | "secondary",
  shade: string
): IchangeShade => ({
  type: CHANGE_SHADE,
  payload: { scheme, shade },
});
