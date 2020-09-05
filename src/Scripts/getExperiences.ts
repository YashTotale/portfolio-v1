//@ts-ignore
import reader from "g-sheets-api";
import { write, baseOptions } from "./getData";

const experiencesRequest = (): Promise<ExperienceObject[]> => {
  return new Promise((resolve, reject) => {
    const options = { ...baseOptions, sheetNumber: 2 };
    reader(options, resolve);
  });
};

const cleanExperienceData = (
  experience: ExperienceObject
): ExperienceObject => {
  return experience;
};

export const getExperiences = () => {
  experiencesRequest().then((experiences: ExperienceObject[]) => {
    write("Experience", experiences.map(cleanExperienceData));
  });
};

export interface ExperienceObject {
  name: string;
}
