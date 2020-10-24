import { sampleContactState } from "./contact.reducers";
import { sampleDisplayState } from "./display.reducers";
import { sampleSidebarState } from "./sidebar.reducers";

export {
  displayReducer as display,
  initialDisplayState,
  sampleDisplayState,
} from "./display.reducers";
export type { DisplayState } from "./display.reducers";

export {
  contactReducer as contact,
  initialContactState,
  sampleContactState,
} from "./contact.reducers";
export type { ContactState } from "./contact.reducers";

export {
  sidebarReducer as sidebar,
  intitialSidebarState,
  sampleSidebarState,
} from "./sidebar.reducers";
export type { SidebarState } from "./sidebar.reducers";

export const sampleState = {
  display: sampleDisplayState,
  contact: sampleContactState,
  sidebar: sampleSidebarState,
};
