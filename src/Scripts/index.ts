import { promises, existsSync } from "fs";
import { join } from "path";
import simpleGit, { SimpleGit } from "simple-git";

import { ExperienceProps, ProjectProps, TagProps } from "../Utils/interfaces";

export const baseOptions = {
  sheetId: "1fxrZIYJUXx-Vz5TljfoSmv8Vpsmh5viybW3hm4GXT04",
  returnAllResults: false,
};

export const dataFolder = join(__dirname, "..", "Data");

export const imagesFolder = join(__dirname, "..", "Images");

export type files = "Experience" | "Projects" | "Tags" | "LinkedIn";

export const writeData = async (
  fileName: files,
  data: ProjectProps[] | ExperienceProps[] | TagProps[] | any
) => {
  const { writeFile, mkdir } = promises;
  try {
    if (!existsSync(dataFolder)) {
      await mkdir(dataFolder);
    }
    const location = join(dataFolder, `${fileName}.json`);
    await writeFile(location, JSON.stringify(data), {
      encoding: "utf8",
    });
    console.log(`\n${fileName} written`);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export const gitAdd = async (location: string | string[]) => {
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
