//@ts-ignore
import reader from "g-sheets-api";
import { write, baseOptions } from "./index";

const tagsRequest = () => {
  return new Promise<TagInfo[]>((resolve, reject) => {
    const options = { ...baseOptions, sheetNumber: 3 };
    reader(options, resolve);
  });
};

const createTags = (tags: string[], tagInfos: TagInfo[]): any => {
  const tagsObj: any = {};

  tags.forEach((tag) => {
    let tagInfoIndex;
    const tagInfo = tagInfos.find((info, i) => {
      tagInfoIndex = i;
      return info.name === tag;
    }) ?? {
      icons: undefined,
    };
    const nextTagInfo =
      tagInfoIndex && tagInfoIndex < tagInfos.length - 1
        ? tagInfos[tagInfoIndex + 1]
        : undefined;
    if (nextTagInfo && typeof parseInt(nextTagInfo.id) !== "number") {
      for (const key in nextTagInfo) {
        //@ts-ignore
        tagInfo[key].push(nextTagInfo[key]);
      }
    }

    const tagObj = {
      ...tagInfo,
      icons: tagInfo.icons ? [tagInfo.icons] : undefined,
      url: tag.toLowerCase().replace(/\s/g, "-"),
    };
    if (tagObj.icons?.length === 1) {
      tagObj.icons.push(tagObj.icons[0]);
    }
    tagsObj[tag] = tagObj;
  });
  return tagsObj;
};

export const getTags = (tags: string[]) => {
  return new Promise(async (resolve, reject) => {
    const tagInfos: TagInfo[] = await tagsRequest();
    const allTags = [...new Set(tags)];
    const tagJson = createTags(allTags, tagInfos);
    write("Tags", tagJson);
  });
};

interface TagInfo {
  id: string;
  name: string;
  icons?: string;
}
