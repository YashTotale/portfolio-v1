export const defaultColors = {
  primary: "#50C3F7",
  secondary: "#fdd835",
};

export const defaultShades = {
  primary: "500",
  secondary: "500",
};

export const mainColors = [
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

export const shades = [
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

export const toCssColor = (color: string): string =>
  color
    .replace(" ", "")
    .replace(color.charAt(0), color.charAt(0).toLowerCase());

export const isRgb = (string: string): boolean =>
  /rgb\([0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}\)/i.test(string);

export const isHex = (string: string): boolean =>
  /^#?([0-9a-f]{3})$|^#?([0-9a-f]){6}$/i.test(string);
