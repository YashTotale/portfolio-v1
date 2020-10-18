import { getProjects } from "./getProjects";
import { getExperiences } from "./getExperiences";
import { getTags } from "./getTags";

const projectsAndExperience = async () => {
  try {
    const projectTags = await getProjects();
    const experienceTags = await getExperiences();
    return projectTags.concat(experienceTags);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

projectsAndExperience().then(getTags);
