//@ts-ignore
import scrapedin from "scrapedin";
import { writeData } from "./index";
import { LINKEDIN_URL } from "../Utils/links";
import { EMAIL, LINKEDIN_PASSWORD } from "../Utils/CONFIDENTIAL";

const cleanData = (data: any): any => {
  const newData = { ...data };
  delete newData.peopleAlsoViewed;
  return newData;
};

export const getLinkedInData = async () => {
  try {
    const profileScraper = await scrapedin({
      email: EMAIL,
      password: LINKEDIN_PASSWORD,
    });
    const profile = await profileScraper(LINKEDIN_URL);
    await writeData("LinkedIn", cleanData(profile));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
