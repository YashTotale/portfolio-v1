import { writeFile, existsSync, promises } from "fs";
import { join } from "path";
import { exec } from "child_process";

import { ExperienceProps, ProjectProps, TagProps } from "../Utils/interfaces";

export const baseOptions = {
  sheetId: "1fxrZIYJUXx-Vz5TljfoSmv8Vpsmh5viybW3hm4GXT04",
  returnAllResults: false,
};

export const dataFolder = join(__dirname, "..", "Data");

export type files = "Experience" | "Projects" | "Tags" | "LinkedIn";

export const write = (
  fileName: files,
  data: ProjectProps[] | ExperienceProps[] | TagProps[]
) => {
  return new Promise<string>((resolve, reject) => {
    const location = join(dataFolder, `${fileName}.json`);
    writeFile(location, JSON.stringify(data), "utf8", (err) => {
      if (err) return console.log(err);
      console.log(`\n${fileName}:`);
      console.log(data);
      gitAdd(location).then(resolve);
    });
  });
};

export const gitAdd = (location: string) => {
  return new Promise<string>((resolve, reject) => {
    exec(`git add ${location} --verbose`, (err, stdout) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(stdout);
        resolve(stdout);
      }
    });
  });
};

export const createURL = (value: string): string => {
  return value.toLowerCase().replace(/\s/g, "-");
};
