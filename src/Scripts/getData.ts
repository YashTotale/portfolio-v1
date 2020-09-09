import { writeFile } from "fs";
import { join } from "path";
import { exec } from "child_process";

import { getProjects, CleanProjectData } from "./getProjects";
import { getExperiences, ExperienceObject } from "./getExperiences";

export const baseOptions = {
  sheetId: "1fxrZIYJUXx-Vz5TljfoSmv8Vpsmh5viybW3hm4GXT04",
  returnAllResults: false,
};

export const dataFolder = join(__dirname, "..", "Data");

export const write = (
  fileName: "Experience" | "Projects",
  data: CleanProjectData[] | ExperienceObject[]
) => {
  const location = join(dataFolder, `${fileName}.json`);

  writeFile(location, JSON.stringify(data), "utf8", (err) => {
    if (err) return console.log(err);
    console.log(`${fileName}:`);
    console.log(data);
    gitAdd(location);
  });
};

export const gitAdd = (location: string) => {
  exec(`git add ${location} --verbose`, (err, stdout) => {
    if (err) return console.log(err);
    console.log(stdout);
  });
};

getProjects();
getExperiences();
