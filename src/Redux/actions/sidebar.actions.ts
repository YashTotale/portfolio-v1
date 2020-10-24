export interface ToggleSidebarPayload {
  type: typeof TOGGLE_SIDEBAR;
  payload: {
    isOpen?: boolean;
  };
}

export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const toggleSidebar = (isOpen?: boolean): ToggleSidebarPayload => ({
  type: TOGGLE_SIDEBAR,
  payload: { isOpen },
});
