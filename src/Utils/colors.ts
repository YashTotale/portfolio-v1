export const defaultColors = {
  primary: "#50C3F7",
  secondary: "#fdd835",
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

export const toCssColor = (color: string) =>
  color
    .replace(" ", "")
    .replace(color.charAt(0), color.charAt(0).toLowerCase());
