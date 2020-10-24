import { stat } from "fs";
import { State } from "./index";

export const getIsSidebarOpen = (state: State) => state.sidebar.isOpen;

export const getSidebar = (state: State) => state.sidebar;
