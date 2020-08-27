import reader from "g-sheets-api";

const baseOptions = {
  sheetId: "1fxrZIYJUXx-Vz5TljfoSmv8Vpsmh5viybW3hm4GXT04",
  returnAllResults: false,
};

export const getAllData = () => {
  return new Promise((resolve, reject) => {
    const options = { ...baseOptions, returnAllResults: true };
    reader(options, resolve);
  });
};
