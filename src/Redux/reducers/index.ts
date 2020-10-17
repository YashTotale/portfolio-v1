import { sampleContactState } from "./contact.reducers";
import { sampleDisplayState } from "./display.reducers";

export {
  displayReducer as display,
  initialDisplayState,
  sampleDisplayState,
} from "./display.reducers";

export {
  contactReducer as contact,
  initialContactState,
  sampleContactState,
} from "./contact.reducers";

export const sampleState = {
  display: sampleDisplayState,
  contact: sampleContactState,
};
