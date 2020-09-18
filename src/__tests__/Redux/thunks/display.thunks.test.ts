import sinon from "sinon";
import sampleState from "../sampleStore";
import {
  SET_SNACKBAR_MESSAGE,
  TOGGLE_DARK_MODE,
  CHANGE_SHADE,
  CHANGE_COLORS,
  IchangeColors,
  IchangeShade,
  ItoggleDarkMode,
  IsetSnackbarMessage,
} from "../../../Redux/actions/display.actions";
import {
  toggleDarkModeWMessage,
  changeShadeWMessage,
  resetColors,
} from "../../../Redux/thunks/display.thunks";
import { getIsDarkMode } from "../../../Redux/selectors";
import {
  defaultColors,
  defaultShades,
  resetMessage,
  schemes,
} from "../../../Utils/colors";

describe("The display thunks", () => {
  test("The toggleDarkModeWMessage thunk", () => {
    const fakeDispatch = sinon.spy();
    const theme = getIsDarkMode(sampleState) ? "Dark" : "Light";

    const toggleAction: ItoggleDarkMode = {
      type: TOGGLE_DARK_MODE,
      payload: {},
    };

    const snackbarAction: IsetSnackbarMessage = {
      type: SET_SNACKBAR_MESSAGE,
      payload: {
        message: `${theme} Theme set`,
        severity: "success",
      },
    };

    toggleDarkModeWMessage()(fakeDispatch, () => sampleState);

    expect(fakeDispatch.getCall(0).args[0]).toEqual(toggleAction);
    expect(fakeDispatch.getCall(1).args[0]).toEqual(snackbarAction);
  });

  test("The changeShadeWMessage thunk", () => {
    const fakeDispatch = sinon.spy();

    const scheme = "secondary";
    const shade = "A200";

    const shadeAction: IchangeShade = {
      type: CHANGE_SHADE,
      payload: { scheme, shade },
    };

    const snackbarAction: IsetSnackbarMessage = {
      type: SET_SNACKBAR_MESSAGE,
      payload: {
        message: "Secondary Shade is now A200",
        severity: "success",
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

      const resetColorsAction: IchangeColors = {
        type: CHANGE_COLORS,
        payload: {
          scheme,
          color: defaultColors[scheme],
        },
      };

      const resetShadeAction: IchangeShade = {
        type: CHANGE_SHADE,
        payload: {
          scheme,
          shade: defaultShades[scheme],
        },
      };

      const snackbarAction: IsetSnackbarMessage = {
        type: SET_SNACKBAR_MESSAGE,
        payload: {
          message: resetMessage,
          severity: "success",
        },
      };

      expect(fakeDispatch.getCall(0 + x).args[0]).toEqual(resetColorsAction);
      expect(fakeDispatch.getCall(1 + x).args[0]).toEqual(resetShadeAction);
      expect(fakeDispatch.getCall(2 + x).args[0]).toEqual(snackbarAction);
    });
  });
});
