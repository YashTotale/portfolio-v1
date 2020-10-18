import { writeFile } from "fs";
import { join } from "path";
import { exec } from "child_process";
import simpleGit, { SimpleGit } from "simple-git";

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
  return new Promise<void>((resolve, reject) => {
    const location = join(dataFolder, `${fileName}.json`);
    writeFile(location, JSON.stringify(data), "utf8", (err) => {
      if (err) return console.log(err);
      console.log(`\n${fileName}:`);
      console.log(data);
      gitAdd(location).then(() => resolve());
    });
  });
};

export const gitAdd = async (location: string) => {
  const git: SimpleGit = simpleGit();
  try {
    await git.add(location);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export const createURL = (value: string): string => {
  return value.toLowerCase().replace(/\s/g, "-");
};
