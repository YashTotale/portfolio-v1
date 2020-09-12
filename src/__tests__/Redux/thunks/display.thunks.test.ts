import sinon from "sinon";
import sampleState from "../sampleStore";
import {
  SET_SNACKBAR_MESSAGE,
  TOGGLE_DARK_MODE,
} from "../../../Redux/actions/display.actions";
import { getIsDarkMode } from "../../../Redux/selectors";
import { toggleDarkModeWMessage } from "../../../Redux/thunks";

describe("The display thunks", () => {
  test("The toggleDarkModeWMessage thunk", () => {
    const fakeDispatch = sinon.spy();
    const theme = getIsDarkMode(sampleState) ? "Dark" : "Light";

    const toggleAction = {
      type: TOGGLE_DARK_MODE,
      payload: {},
    };

    const snackbarAction = {
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
});
