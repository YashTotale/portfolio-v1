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
