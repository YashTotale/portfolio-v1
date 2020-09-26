//@ts-ignore
import reader from "g-sheets-api";
import { write, baseOptions, createURL } from "./index";
import { TagProps } from "../Utils/interfaces";

const tagsRequest = () => {
  return new Promise<TagInfo[]>((resolve, reject) => {
    const options = { ...baseOptions, sheetNumber: 3 };
    reader(options, resolve);
  });
};

const createTags = (tags: string[], tagInfos: TagInfo[]): TagProps[] => {
  const tagsObj: TagProps[] = [];

  tags.forEach((tag) => {
    let tagInfoIndex;
    const tagInfo = tagInfos.find((info, i) => {
      tagInfoIndex = i;
      return info.name === tag;
    }) ?? {
      icons: undefined,
    };

    const tagObj = {
      name: tag,
      id: "0",
      ...tagInfo,
      icons: tagInfo.icons ? [tagInfo.icons] : undefined,
      url: createURL(tag),
    };

    const nextTagInfo =
      tagInfoIndex && tagInfoIndex < tagInfos.length - 1
        ? tagInfos[tagInfoIndex + 1]
        : undefined;

    if (nextTagInfo && typeof nextTagInfo.id !== "string") {
      for (const key in nextTagInfo) {
        //@ts-ignore
        tagObj[key].push(nextTagInfo[key]);
      }
    }
    if (tagObj.icons?.length === 1) {
      tagObj.icons.push(tagObj.icons[0]);
    }
    tagsObj.push(tagObj);
  });
  return tagsObj;
};

export const getTags = (tags: string[]) => {
  return new Promise(async (resolve, reject) => {
    const tagInfos: TagInfo[] = await tagsRequest();
    const allTags = [...new Set(tags)];
    const tagsArray = createTags(allTags, tagInfos);
    write("Tags", tagsArray);
  });
};

interface TagInfo {
  id: string;
  name: string;
  icons?: string;
}
