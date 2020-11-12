//@ts-ignore
import reader from "g-sheets-api";
import { writeData, baseOptions } from "./index";
import { getPageData } from "./getWikipedia";
import { TermProps } from "../Utils/interfaces";

interface TermObject {
  name: string;
  link: string;
}

const termsRequest = () => {
  return new Promise<TermObject[]>((resolve, reject) => {
    const options = { ...baseOptions, sheetNumber: 4 };
    reader(options, resolve);
  });
};

const cleanTermData = async (terms: TermObject[]): Promise<TermProps[]> => {
  return new Promise((resolve, reject) => {
    const cleanedTerms: TermProps[] = [];

    terms.forEach(async ({ name, link }, i) => {
      let summary: string;
      let image: string;
      const isWikipedia = link.includes("en.wikipedia.org");

      if (isWikipedia) {
        const title = link.split("/").pop();
        if (title) {
          console.log(title);
          try {
            const data = await getPageData(title);
            summary = data.summary;
            image = data.image;
            link = data.url.toString();
          } catch (e) {
            console.log(e);
            reject(e);
          }
        }
      }

      const termArray = name.split("; ");
      termArray.forEach((split) =>
        cleanedTerms.push({
          name: split,
          link,
          summary,
          image,
        })
      );

      if (i === terms.length - 1) resolve(cleanedTerms);
    });
  });
};

export const getTerms = async () => {
  const terms = await termsRequest();
  const cleanedTerms = await cleanTermData(terms);
  await writeData("Terms", cleanedTerms);
};
