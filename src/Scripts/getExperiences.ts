//@ts-ignore
import reader from "g-sheets-api";
import { ExperienceProps } from "../Utils/interfaces";
import { writeData, baseOptions } from "./index";

const experienceRequest = () => {
  return new Promise<ExperienceObject[]>((resolve, reject) => {
    const options = { ...baseOptions, sheetNumber: 2 };
    reader(options, resolve);
  });
};

const cleanExperienceData = (
  experiences: ExperienceObject[]
): [ExperienceProps[], string[]] => {
  const cleanedExperiences: ExperienceProps[] = [];
  let tags: string[] = [];

  experiences.forEach((experience) => {
    if (!experience.id) {
      const [prevExperience] = cleanedExperiences.slice(-1);

      for (const key in experience) {
        //@ts-ignore
        prevExperience[key].push(experience[key]);
      }

      tags = tags.concat(prevExperience.tags);
    } else {
      const newExperience: ExperienceProps = {
        ...experience,
        tags: [experience.tags],
      };

      cleanedExperiences.push(newExperience);
    }
  });

  return [cleanedExperiences, tags];
};

export const getExperiences = async () => {
  const experiences: ExperienceObject[] = await experienceRequest();
  const [cleanExperiences, tags] = cleanExperienceData(experiences);
  await writeData("Experience", cleanExperiences);
  return tags;
};

export interface ExperienceObject {
  id: string;
  name: string;
  tags: string;
}
