//@ts-ignore
import reader from "g-sheets-api";
import { write, baseOptions } from "./getData";

const experienceRequest = () => {
  return new Promise((resolve, reject) => {
    const options = { ...baseOptions, sheetNumber: 2 };
    reader(options, resolve);
  });
};

const cleanExperienceData = (experience: ExperienceObject) => {
  return experience;
};

export const getExperience = () => {
  experienceRequest().then((experience: any) => {
    write("Experience", experience.map(cleanExperienceData));
  });
};

export interface ExperienceObject {
  name: string;
}
