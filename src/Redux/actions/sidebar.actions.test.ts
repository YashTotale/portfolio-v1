import {
  toggleSidebar,
  ToggleSidebarPayload,
  TOGGLE_SIDEBAR,
} from "./sidebar.actions";

describe("The sidebar actions", () => {
  test("The toggleSidebar action", () => {
    const values = [true, false, undefined];

    values.forEach((isOpen) => {
      const expected: ToggleSidebarPayload = {
        type: TOGGLE_SIDEBAR,
        payload: {
          isOpen,
        },
      };

      const actual = toggleSidebar(isOpen);

      expect(actual).toEqual(expected);
    });
  });
});
