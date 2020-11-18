//@ts-ignore
import reader from "g-sheets-api";
import { writeData, baseOptions } from "./index";
import { TagProps } from "../Utils/interfaces";
import { DEFAULT_TAG_ICON } from "../Utils/links";
import { createURL } from "../Utils/funcs";
import { downloadIcons } from "./downloadImages";

interface BaseTagInfo {
  id?: string | undefined;
  name?: string;
  icons?: string;
  website?: string;
  sourcecode?: string;
}

interface TagInfoWithDescription extends BaseTagInfo {
  description: string;
  sourcename: string;
  sourcelink: string;
}

interface TagInfoWithoutDescription extends BaseTagInfo {
  description: undefined;
  sourcename: undefined;
  sourcelink: undefined;
}

type TagInfo = TagInfoWithDescription | TagInfoWithoutDescription;

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

    if (typeof tagInfoIndex !== "number") return;

    let tagObj: TagProps = {
      id: tagInfo.id ? parseInt(tagInfo.id) : 0,
      name: tagInfo.name ?? "",
      website: tagInfo.website,
      sourcecode: tagInfo.sourcecode,
      icons: tagInfo.icons
        ? [tagInfo.icons]
        : [DEFAULT_TAG_ICON, DEFAULT_TAG_ICON],
      url: createURL(tag),
      description: undefined,
      sourceName: undefined,
      sourceLink: undefined,
    };

    if (tagInfo.description) {
      tagObj = {
        ...tagObj,
        description: [tagInfo.description],
        sourceName: [tagInfo.sourcename],
        sourceLink: [tagInfo.sourcelink],
      };
    }

    let i = 1;
    while (
      tagInfoIndex + i < tagInfos.length &&
      tagInfos[tagInfoIndex + i].id === undefined
    ) {
      const nextTagInfo = tagInfos[tagInfoIndex + i];
      for (const key in nextTagInfo) {
        let objKey = key;

        if (key === "sourcelink") objKey = "sourceLink";

        if (key === "sourcename") objKey = "sourceName";

        //@ts-ignore
        tagObj[objKey].push(nextTagInfo[key]);
      }
      if (
        tagObj.description &&
        tagObj.sourceName.length < tagObj.description.length &&
        tagObj.sourceLink.length < tagObj.description.length
      ) {
        tagObj.sourceName.push(tagObj.sourceName[tagObj.sourceName.length - 1]);
        tagObj.sourceLink.push(tagObj.sourceLink[tagObj.sourceLink.length - 1]);
      }
      i++;
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
  await writeData("Tags", tagsArray);
  await downloadIcons(tagsArray, "Tags");
};
