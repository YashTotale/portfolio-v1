import { getProjects } from "./getProjects";
import { getExperiences } from "./getExperiences";
import { getTags } from "./getTags";
import { getTerms } from "./getTerms";
import { getLinkedInData } from "./getLinkedin";
import { dataFolder, gitAdd, imagesFolder } from "./index";

import wiki from "wikijs";

const getData = async () => {
  try {
    const projectTags = await getProjects();
    const experienceTags = await getExperiences();
    await getTags(projectTags.concat(experienceTags));
    await getTerms();
    await getLinkedInData();
    await gitAdd([dataFolder, imagesFolder]);
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

getData();
