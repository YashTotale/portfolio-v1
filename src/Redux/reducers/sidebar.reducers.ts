import { AnyAction } from "redux";
import { TOGGLE_SIDEBAR } from "../actions/sidebar.actions";

export interface SidebarState {
  isOpen: boolean;
}

export const intitialSidebarState: SidebarState = {
  isOpen: false,
};

export const sidebarReducer = (
  state = intitialSidebarState,
  action: AnyAction
): SidebarState => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SIDEBAR: {
      const { isOpen } = payload;
      return { ...state, isOpen: isOpen ?? !state.isOpen };
    }
    default: {
      return state;
    }
  }
};

export const sampleSidebarState = {
  ...intitialSidebarState,
};
