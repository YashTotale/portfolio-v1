import sinon from "sinon";
import { sampleState } from "../reducers";
import {
  SET_SNACKBAR_MESSAGE,
  TOGGLE_DARK_MODE,
  CHANGE_SHADE,
  CHANGE_COLORS,
  ChangeColorsPayload,
  ChangeShadePayload,
  ToggleDarkModePayload,
  SetSnackbarMessagePayload,
} from "../actions/display.actions";
import {
  toggleDarkModeWMessage,
  changeShadeWMessage,
  resetColors,
  changeColorWMessage,
} from "./display.thunks";
import {
  getIsDarkMode,
  getPrimaryShade,
  getSecondaryColor,
} from "../selectors";
import {
  cssColor,
  defaultColors,
  defaultShades,
  getMuiColor,
  resetMessage,
  scheme,
  schemes,
  shade,
} from "../../Utils/colors";

describe("The display thunks", () => {
  test("The toggleDarkModeWMessage thunk", () => {
    const fakeDispatch = sinon.spy();
    const theme = getIsDarkMode(sampleState) ? "Dark" : "Light";

    const toggleAction: ToggleDarkModePayload = {
      type: TOGGLE_DARK_MODE,
      payload: {},
    };

    const snackbarAction: SetSnackbarMessagePayload = {
      type: SET_SNACKBAR_MESSAGE,
      payload: {
        message: `${theme} Theme set`,
        severity: "success",
        color: null,
      },
    };

    toggleDarkModeWMessage()(fakeDispatch, () => sampleState);

    expect(fakeDispatch.getCall(0).args[0]).toEqual(toggleAction);
    expect(fakeDispatch.getCall(1).args[0]).toEqual(snackbarAction);
  });

  test("The changeColorWMessage thunk", () => {
    const fakeDispatch = sinon.spy();

    const scheme: scheme = "primary";
    const cssColor: cssColor = "deepPurple";

    const colorAction: ChangeColorsPayload = {
      type: CHANGE_COLORS,
      payload: {
        color: cssColor,
        scheme,
      },
    };

    const snackbarAction: SetSnackbarMessagePayload = {
      type: SET_SNACKBAR_MESSAGE,
      payload: {
        message: "Primary Color is now Deep Purple",
        severity: "success",
        color: getMuiColor(cssColor, getPrimaryShade(sampleState)),
      },
    };

    changeColorWMessage(scheme, cssColor)(fakeDispatch, () => sampleState);

    expect(fakeDispatch.getCall(0).args[0]).toEqual(colorAction);
    expect(fakeDispatch.getCall(1).args[0]).toEqual(snackbarAction);
  });

  test("The changeShadeWMessage thunk", () => {
    const fakeDispatch = sinon.spy();

    const scheme: scheme = "secondary";
    const shade: shade = "A200";

    const shadeAction: ChangeShadePayload = {
      type: CHANGE_SHADE,
      payload: { scheme, shade },
    };

    const snackbarAction: SetSnackbarMessagePayload = {
      type: SET_SNACKBAR_MESSAGE,
      payload: {
        message: "Secondary Shade is now A200",
        severity: "success",
        color: getMuiColor(getSecondaryColor(sampleState), shade),
      },
    };

    changeShadeWMessage(scheme, shade)(fakeDispatch, () => sampleState);

    expect(fakeDispatch.getCall(0).args[0]).toEqual(shadeAction);
    expect(fakeDispatch.getCall(1).args[0]).toEqual(snackbarAction);
  });

  test("The resetColors thunk", () => {
    const fakeDispatch = sinon.spy();
    resetColors()(fakeDispatch, () => sampleState);

    schemes.forEach((scheme, i) => {
      const x = i === 0 ? 0 : 3;

      const resetColorsAction: ChangeColorsPayload = {
        type: CHANGE_COLORS,
        payload: {
          scheme,
          color: defaultColors[scheme],
        },
      };

      const resetShadeAction: ChangeShadePayload = {
        type: CHANGE_SHADE,
        payload: {
          scheme,
          shade: defaultShades[scheme],
        },
      };

      const snackbarAction: SetSnackbarMessagePayload = {
        type: SET_SNACKBAR_MESSAGE,
        payload: {
          message: resetMessage,
          severity: "success",
          color: null,
        },
      };

      expect(fakeDispatch.getCall(0 + x).args[0]).toEqual(resetColorsAction);
      expect(fakeDispatch.getCall(1 + x).args[0]).toEqual(resetShadeAction);
      expect(fakeDispatch.getCall(2 + x).args[0]).toEqual(snackbarAction);
    });
  });
});
