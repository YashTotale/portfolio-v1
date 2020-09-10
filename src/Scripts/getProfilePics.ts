//@ts-ignore
import reader from "g-sheets-api";
import { write, baseOptions } from "./getData";

const profilePicsRequest = (): Promise<ProfilePicObject[]> => {
  return new Promise((resolve, reject) => {
    const options = { ...baseOptions, sheetNumber: 3 };
    reader(options, resolve);
  });
};

const cleanProfilePics = (
  profilePics: ProfilePicObject[]
): CleanedProfilePics => {
  //@ts-ignore
  const cleanedPics: CleanedProfilePics = {};
  profilePics.forEach((pic: ProfilePicObject) => {
    cleanedPics[pic.size] = pic;
  });
  return cleanedPics;
};

export const getProfilePics = async () => {
  const profilePics = await profilePicsRequest();
  const cleanedProfilePics = cleanProfilePics(profilePics);
  write("ProfilePictures", cleanedProfilePics);
};

export interface ProfilePicObject {
  size: "md";
  url: string;
  width: string;
  height: string;
}

export interface CleanedProfilePics {
  md: ProfilePicObject;
}
