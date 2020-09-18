import {
  TOGGLE_DARK_MODE,
  toggleDarkMode,
  TOGGLE_NAV_BTNS_MENU,
  toggleNavBtnsMenu,
  CHANGE_COLORS,
  changeColors,
  CHANGE_SHADE,
  changeShade,
  SET_SNACKBAR_MESSAGE,
  setSnackbarMessage,
  HANDLE_SNACKBAR_CLOSE,
  handleSnackbarClose,
  ItoggleDarkMode,
  ItoggleNavBtnsMenu,
  IchangeColors,
  IchangeShade,
  IsetSnackbarMessage,
  IhandleSnackbarClose,
} from "../../../Redux/actions/display.actions";

describe("The display actions", () => {
  test("The toggleDarkMode action", () => {
    const expected: ItoggleDarkMode = {
      type: TOGGLE_DARK_MODE,
      payload: {},
    };
    const actual = toggleDarkMode();

    expect(actual).toEqual(expected);
  });

  test("The toggleNavBtnsMenu action", () => {
    const expected1: ItoggleNavBtnsMenu = {
      type: TOGGLE_NAV_BTNS_MENU,
      payload: {
        isOpen: true,
      },
    };
    const actual1 = toggleNavBtnsMenu(true);

    expect(actual1).toEqual(expected1);

    const expected2: ItoggleNavBtnsMenu = {
      type: TOGGLE_NAV_BTNS_MENU,
      payload: {},
    };

    const actual2 = toggleNavBtnsMenu();

    expect(actual2).toEqual(expected2);
  });

  test("The changeColors action", () => {
    const expected: IchangeColors = {
      type: CHANGE_COLORS,
      payload: { scheme: "primary", color: "teal" },
    };
    const actual = changeColors("primary", "teal");

    expect(actual).toEqual(expected);
  });

  test("The changeShade action", () => {
    const expected: IchangeShade = {
      type: CHANGE_SHADE,
      payload: { shade: "200", scheme: "primary" },
    };
    const actual = changeShade("primary", "200");

    expect(actual).toEqual(expected);
  });

  test("The setSnackbarMessage action", () => {
    const message = "test message";
    const severity = "success";

    const expected: IsetSnackbarMessage = {
      type: SET_SNACKBAR_MESSAGE,
      payload: { message, severity },
    };

    const actual = setSnackbarMessage(message, severity);

    expect(actual).toEqual(expected);
  });

  test("The handleSnackbarClose action", () => {
    const expected: IhandleSnackbarClose = {
      type: HANDLE_SNACKBAR_CLOSE,
      payload: {},
    };

    const actual = handleSnackbarClose();

    expect(actual).toEqual(expected);
  });
});
