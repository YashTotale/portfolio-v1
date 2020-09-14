import { writeFile } from "fs";
import { join } from "path";
import { exec } from "child_process";

import { CleanProjectData } from "./getProjects";
import { ExperienceObject } from "./getExperiences";

export const baseOptions = {
  sheetId: "1fxrZIYJUXx-Vz5TljfoSmv8Vpsmh5viybW3hm4GXT04",
  returnAllResults: false,
};

export const dataFolder = join(__dirname, "..", "Data");

export type files = "Experience" | "Projects" | "Tags" | "LinkedIn";

export const write = (
  fileName: files,
  data: CleanProjectData[] | ExperienceObject[]
) => {
  return new Promise((resolve, reject) => {
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
  return new Promise((resolve, reject) => {
    exec(`git add ${location} --verbose`, (err, stdout) => {
      if (err) return console.log(err);
      console.log(stdout);
      resolve(stdout);
    });
  });
};
