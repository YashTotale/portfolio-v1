export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const splitCamelCase = (str: string, toUpperCase: boolean) => {
  const split = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return toUpperCase ? capitalize(split) : split;
};
