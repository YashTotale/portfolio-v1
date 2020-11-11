//@ts-ignore
import reader from "g-sheets-api";
import { writeData, baseOptions } from "./index";
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

const cleanTermData = (terms: TermObject[]): TermProps[] => {
  const cleanedTerms: TermProps[] = [];

  terms.forEach(({ name, link }) => {
    const termArray = name.split("; ");
    termArray.forEach((split) =>
      cleanedTerms.push({
        name: split,
        link,
      })
    );
  });

  return cleanedTerms;
};

export const getTerms = async () => {
  const terms = await termsRequest();
  const cleanedTerms = cleanTermData(terms);
  await writeData("Terms", cleanedTerms);
};
