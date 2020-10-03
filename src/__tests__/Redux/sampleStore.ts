import { initialDisplayState, initialContactState } from "../../Redux/reducers";

export const display = {
  ...initialDisplayState,
};

export const contact = {
  ...initialContactState,
};

const sampleState = { display, contact };

export default sampleState;
