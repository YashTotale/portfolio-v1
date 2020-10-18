//@ts-ignore
import reader from "g-sheets-api";
import { write, baseOptions, createURL } from "./index";
import { TagProps } from "../Utils/interfaces";
import { DEFAULT_TAG_ICON } from "../Utils/links";
import downloadImages from "./downloadImages";

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
    }) as TagInfo;

    const tagObj = {
      ...tagInfo,
      icons: tagInfo.icons
        ? [tagInfo.icons]
        : [DEFAULT_TAG_ICON, DEFAULT_TAG_ICON],
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

export const getTags = async (tags: string[]) => {
  const tagInfos: TagInfo[] = await tagsRequest();
  const allTags = [...new Set(tags)];
  const tagsArray = createTags(allTags, tagInfos);
  await write("Tags", tagsArray);
  await downloadImages(tagsArray, "Tags");
};

interface TagInfo {
  id: string;
  name: string;
  icons?: string;
}
