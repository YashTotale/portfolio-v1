import {
  ToggleSidebarPayload,
  TOGGLE_SIDEBAR,
} from "../actions/sidebar.actions";
import {
  SidebarState,
  sampleSidebarState as originalState,
  sidebarReducer,
} from "./sidebar.reducers";

describe("The sidebar reducer", () => {
  test("Toggles the sidebar", () => {
    const values = [true, false, undefined];

    values.forEach((isOpen) => {
      const fakeAction: ToggleSidebarPayload = {
        type: TOGGLE_SIDEBAR,
        payload: {
          isOpen,
        },
      };

      const expected: SidebarState = {
        ...originalState,
        isOpen: isOpen ?? !originalState.isOpen,
      };

      const actual = sidebarReducer(originalState, fakeAction);

      expect(actual).toEqual(expected);
    });
  });
});
