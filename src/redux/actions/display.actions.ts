interface ItoggleDarkMode {
  type: string;
  payload: {};
}

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const toggleDarkMode = (): ItoggleDarkMode => ({
  type: TOGGLE_DARK_MODE,
  payload: {},
});
