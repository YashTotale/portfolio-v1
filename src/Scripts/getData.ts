import { getProjects } from "./getProjects";
import { getExperiences } from "./getExperiences";
import { getTags } from "./getTags";
import { getLinkedInData } from "./getLinkedin";

const getData = async () => {
  try {
    const projectTags = await getProjects();
    const experienceTags = await getExperiences();
    await getTags(projectTags.concat(experienceTags));
    await getLinkedInData();
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

getData();
