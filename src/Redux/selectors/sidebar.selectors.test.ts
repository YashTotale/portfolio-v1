import { getIsSidebarOpen, getSidebar } from "./sidebar.selectors";
import { sampleState } from "../reducers";

describe("The sidebar selectors", () => {
  test("The getIsSidebarOpen selector", () => {
    const expected = sampleState.sidebar.isOpen;
    const actual = getIsSidebarOpen(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getSidebar selector", () => {
    const expected = sampleState.sidebar;
    const actual = getSidebar(sampleState);
    expect(actual).toEqual(expected);
  });
});
