interface darkModePayload {
  type: string;
  payload: {};
}
export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const toggleDarkMode = (): darkModePayload => ({
  type: TOGGLE_DARK_MODE,
  payload: {},
});
