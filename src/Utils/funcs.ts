export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const splitCamelCase = (str: string, toUpperCase: boolean): string => {
  const split = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return toUpperCase ? capitalize(split) : split;
};

export const stringToInteger = (str: string): string | number => {
  return /^\d+$/.test(str) ? parseInt(str) : str;
};
