import { write } from "./getData";

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

export const addTags = (tags: string[]) => {
  const uniq = [...new Set(tags)];
  const tagJson = createTags(uniq);
  write("Tags", tagJson);
};
