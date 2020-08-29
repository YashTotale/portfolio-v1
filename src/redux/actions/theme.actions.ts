interface darkModePayload {
  type: string;
  payload: { isDarkMode: boolean };
}
export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const toggleDarkMode = (isDarkMode: boolean): darkModePayload => ({
  type: TOGGLE_DARK_MODE,
  payload: { isDarkMode },
});
