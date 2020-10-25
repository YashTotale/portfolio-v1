//@ts-ignore
import reader from "g-sheets-api";
import { createURL } from "../Utils/funcs";
import { ExperienceProps } from "../Utils/interfaces";
import { DEFAULT_EXPERIENCE_ICON } from "../Utils/links";
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

  let allTags: string[] = [];

  experiences.forEach((experience, i) => {
    const { id, name, icons, tags } = experience;

    if (!id) {
      const [prevExperience] = cleanedExperiences.slice(-1);

      for (const key in experience) {
        //@ts-ignore
        prevExperience[key].push(experience[key]);
      }

      if (prevExperience.icons.length < 2) {
        prevExperience.icons.push(prevExperience.icons[0]);
      }

      allTags = allTags.concat(prevExperience.tags);
    } else {
      const newExperience: ExperienceProps = {
        ...experience,
        tags: [tags],
        icons: icons ? [icons] : [DEFAULT_EXPERIENCE_ICON],
        url: createURL(name),
      };

      if (i === experiences.length - 1) {
        newExperience.icons.push(newExperience.icons[0]);
      }

      cleanedExperiences.push(newExperience);

      allTags.concat(newExperience.tags);
    }
  });

  return [cleanedExperiences, allTags];
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
  icons: string;
}
