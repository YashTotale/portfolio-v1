import { display } from "../../../Redux/reducers/display.reducers";
import {
  TOGGLE_DARK_MODE,
  TOGGLE_NAV_BTNS_MENU,
  CHANGE_COLORS,
  CHANGE_SHADE,
  SET_SNACKBAR_MESSAGE,
  HANDLE_SNACKBAR_CLOSE,
  ItoggleDarkMode,
  ItoggleNavBtnsMenu,
  IchangeColors,
  IchangeShade,
  IsetSnackbarMessage,
  IhandleSnackbarClose,
} from "../../../Redux/actions/display.actions";
import { display as originalState } from "../sampleStore";

describe("The display reducer", () => {
  test("Toggles dark mode", () => {
    const fakeAction: ItoggleDarkMode = {
      type: TOGGLE_DARK_MODE,
      payload: {},
    };

    const expected = {
      ...originalState,
      isDarkMode: !originalState.isDarkMode,
    };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Toggles Nav Btn Menu Open", () => {
    const fakeAction1: ItoggleNavBtnsMenu = {
      type: TOGGLE_NAV_BTNS_MENU,
      payload: {},
    };

    const expected1 = {
      ...originalState,
      isNavBtnsMenuOpen: !originalState.isNavBtnsMenuOpen,
    };

    const actual1 = display(originalState, fakeAction1);

    expect(actual1).toEqual(expected1);

    const fakeAction2: ItoggleNavBtnsMenu = {
      type: TOGGLE_NAV_BTNS_MENU,
      payload: { isOpen: true },
    };

    const expected2 = {
      ...originalState,
      isNavBtnsMenuOpen: true,
    };

    const actual2 = display(originalState, fakeAction2);

    expect(actual2).toEqual(expected2);
  });

  test("Changes color", () => {
    const fakeAction: IchangeColors = {
      type: CHANGE_COLORS,
      payload: {
        scheme: "secondary",
        color: "#ffffff",
      },
    };

    const expected = {
      ...originalState,
      colors: {
        primary: originalState.colors.primary,
        secondary: "#ffffff",
      },
    };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Changes shade", () => {
    const fakeAction: IchangeShade = {
      type: CHANGE_SHADE,
      payload: { shade: "A200", scheme: "primary" },
    };

    const expected = {
      ...originalState,
      shades: {
        primary: "A200",
        secondary: originalState.shades.secondary,
      },
    };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Sets Snackbar message", () => {
    const message = "test";
    const severity = "error";
    const color = null;

    const fakeAction: IsetSnackbarMessage = {
      type: SET_SNACKBAR_MESSAGE,
      payload: { message, severity, color },
    };

    const expected = {
      ...originalState,
      snackBar: {
        isOpen: true,
        severity,
        message,
        color,
      },
    };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Closes the Snackbar", () => {
    const fakeAction: IhandleSnackbarClose = {
      type: HANDLE_SNACKBAR_CLOSE,
      payload: {},
    };

    const expected = {
      ...originalState,
      snackBar: { ...originalState.snackBar, isOpen: false },
    };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });
});
