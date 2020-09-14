//@ts-ignore
import scrapedin from "scrapedin";
import { write } from "./index";
import { LINKEDIN_URL } from "../Utils/constants";

const args = process.argv;

const cleanData = (data: any): any => {
  const newData = { ...data };
  delete newData.peopleAlsoViewed;
  return newData;
};

export const getLinkedInData = async (linkedinPass: string) => {
  try {
    const profileScraper = await scrapedin({
      email: "totaleyash@gmail.com",
      password: linkedinPass,
    });
    const profile = await profileScraper(LINKEDIN_URL);
    await write("LinkedIn", cleanData(profile));
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

if (args.length < 3) {
  console.log("Please provide the LinkedIn password");
  process.exit(1);
}

getLinkedInData(args[2]);
