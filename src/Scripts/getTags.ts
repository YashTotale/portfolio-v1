//@ts-ignore
import reader from "g-sheets-api";
import { write, baseOptions } from "./index";

// const tagsRequest = () => {
//   return new Promise((resolve, reject) => {
//     const options = { ...baseOptions, sheetNumber: 3 };
//     reader(options, resolve);
//   });
// };

const createTags = (tags: string[]): any => {
  const tagsObj: any = {};
  tags.forEach((tag) => {
    const tagObj = {
      url: tag.toLowerCase().replace(/\s/g, "-"),
    };
    tagsObj[tag] = tagObj;
  });
  return tagsObj;
};

export const getTags = (tags: string[]) => {
  return new Promise(async (resolve, reject) => {
    // const tagInfos = await tagsRequest();
    const allTags = [...new Set(tags)];
    const tagJson = createTags(allTags);
    write("Tags", tagJson);
  });
};
