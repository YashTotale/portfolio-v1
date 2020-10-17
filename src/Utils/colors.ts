import {
  colors as colorsObject,
  getContrastRatio,
  Theme,
} from "@material-ui/core";
import { Color } from "@material-ui/lab";

export const defaultColors = {
  primary: "lightBlue" as cssColor,
  secondary: "amber" as cssColor,
};

export const defaultShades = {
  primary: "500" as shade,
  secondary: "700" as shade,
};

export type color =
  | "Red"
  | "Pink"
  | "Purple"
  | "Deep Purple"
  | "Indigo"
  | "Blue"
  | "Light Blue"
  | "Cyan"
  | "Teal"
  | "Green"
  | "Light Green"
  | "Lime"
  | "Yellow"
  | "Amber"
  | "Orange"
  | "Deep Orange";

export const colors: color[] = [
  "Red",
  "Pink",
  "Purple",
  "Deep Purple",
  "Indigo",
  "Blue",
  "Light Blue",
  "Cyan",
  "Teal",
  "Green",
  "Light Green",
  "Lime",
  "Yellow",
  "Amber",
  "Orange",
  "Deep Orange",
];

export type cssColor =
  | "red"
  | "pink"
  | "purple"
  | "deepPurple"
  | "indigo"
  | "blue"
  | "lightBlue"
  | "cyan"
  | "teal"
  | "green"
  | "lightGreen"
  | "lime"
  | "yellow"
  | "amber"
  | "orange"
  | "deepOrange";

export const cssColors: cssColor[] = [
  "red",
  "pink",
  "purple",
  "deepPurple",
  "indigo",
  "blue",
  "lightBlue",
  "cyan",
  "teal",
  "green",
  "lightGreen",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deepOrange",
];

export type shade =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "A100"
  | "A200"
  | "A400"
  | "A700";

export const shades: shade[] = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "A100",
  "A200",
  "A400",
  "A700",
];

export type scheme = "primary" | "secondary";

export const schemes: scheme[] = ["primary", "secondary"];

export const severities: Color[] = ["success", "info", "error", "warning"];

export const resetMessage = "Colors have been reset";

export const toCssColor = (color: color): string =>
  color
    .replace(" ", "")
    .replace(color.charAt(0), color.charAt(0).toLowerCase());

export const toColor = (cssColor: cssColor): string =>
  cssColor.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase();
  });

export const isRgb = (string: string): boolean =>
  /rgb\([0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}\)/i.test(string);

export const isHex = (string: string): boolean =>
  /^#?([0-9a-f]{3})$|^#?([0-9a-f]){6}$/i.test(string);

export const getMuiColor = (color: cssColor, shade: shade): string => {
  return colorsObject[color][shade];
};

export const getTextColor = (theme: Theme, color: string) => {
  const white = theme.palette.common.white;
  const black = theme.palette.common.black;

  return getContrastRatio(white, color) > getContrastRatio(black, color)
    ? white
    : black;
};
