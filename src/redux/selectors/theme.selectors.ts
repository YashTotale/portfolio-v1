import { RootStateOrAny } from "react-redux";
import { State } from "./index";

export const getTheme = (state: State) => state.theme;
