import { writeFile } from "fs";
import { join } from "path";
import { exec } from "child_process";

import { getProjects, CleanProjectData } from "./getProjects";
import { getExperiences, ExperienceObject } from "./getExperiences";
import { getProfilePics, CleanedProfilePics } from "./getProfilePics";
import { addTags } from "./addTags";

export const baseOptions = {
  sheetId: "1fxrZIYJUXx-Vz5TljfoSmv8Vpsmh5viybW3hm4GXT04",
  returnAllResults: false,
};

export const dataFolder = join(__dirname, "..", "Data");

export type files = "Experience" | "Projects" | "Tags" | "ProfilePictures";

export const write = (
  fileName: files,
  data: CleanProjectData[] | ExperienceObject[] | CleanedProfilePics
) => {
  const location = join(dataFolder, `${fileName}.json`);

  writeFile(location, JSON.stringify(data), "utf8", (err) => {
    if (err) return console.log(err);
    console.log(`\n${fileName}:`);
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

//@ts-ignore
getProjects().then(addTags);
getExperiences();
getProfilePics();
