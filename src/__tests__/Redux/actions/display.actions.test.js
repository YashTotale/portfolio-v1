import {
  TOGGLE_DARK_MODE,
  toggleDarkMode,
  TOGGLE_NAV_BTNS_MENU,
  toggleNavBtnsMenu,
  CHANGE_COLORS,
  changeColors,
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
    const expected = {
      type: TOGGLE_NAV_BTNS_MENU,
      payload: {},
    };
    const actual = toggleNavBtnsMenu();

    expect(actual).toEqual(expected);
  });

  test("The changeColors action", () => {
    const expected = {
      type: CHANGE_COLORS,
      payload: { scheme: "primary", color: "#fdd835" },
    };
    const actual = changeColors("primary", "#fdd835");

    expect(actual).toEqual(expected);
  });
});
