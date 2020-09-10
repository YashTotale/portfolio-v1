export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const splitCamelCase = (str: string, toUpperCase: boolean): string => {
  const split = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return toUpperCase ? capitalize(split) : split;
};

export const stringToInteger = (str: string): string | number => {
  return /^\d+$/.test(str) ? parseInt(str) : str;
};

export const findClosestInteger = (num: number, nums: number[]) => {
  const closestReducer = (g: number) => (a: number, b: number) =>
    Math.abs(g - a) < Math.abs(g - b) ? a : b;

  const closest = nums.reduce(closestReducer(num));

  return nums.indexOf(closest);
};
