import {
  TOGGLE_DARK_MODE,
  toggleDarkMode,
  TOGGLE_NAV_BTNS_MENU,
  toggleNavBtnsMenu,
  CHANGE_COLORS,
  changeColors,
  CHANGE_SHADE,
  changeShade,
  TOGGLE_SNACKBAR,
  toggleSnackbar,
} from "../../../Redux/actions/display.actions";

describe("The display actions", () => {
  test("The toggleDarkMode action", () => {
    const expected = {
      type: TOGGLE_DARK_MODE,
      payload: {},
    };
    const actual = toggleDarkMode();

    expect(actual).toEqual(expected);
  });

  test("The toggleNavBtnsMenu action", () => {
    const expected1 = {
      type: TOGGLE_NAV_BTNS_MENU,
      payload: {
        isOpen: true,
      },
    };
    const actual1 = toggleNavBtnsMenu(true);

    expect(actual1).toEqual(expected1);

    const expected2 = {
      type: TOGGLE_NAV_BTNS_MENU,
      payload: {},
    };

    const actual2 = toggleNavBtnsMenu();

    expect(actual2).toEqual(expected2);
  });

  test("The changeColors action", () => {
    const expected = {
      type: CHANGE_COLORS,
      payload: { scheme: "primary", color: "#fdd835" },
    };
    const actual = changeColors("primary", "#fdd835");

    expect(actual).toEqual(expected);
  });

  test("The changeShade action", () => {
    const expected = {
      type: CHANGE_SHADE,
      payload: { shade: "200", scheme: "primary" },
    };
    const actual = changeShade("primary", "200");

    expect(actual).toEqual(expected);
  });

  test("The toggleSnackbar action", () => {
    const message = "test message";

    const expected = {
      type: TOGGLE_SNACKBAR,
      payload: { isOpen: true, message },
    };

    const actual = toggleSnackbar(true, message);

    expect(actual).toEqual(expected);
  });
});
