import { getProjects } from "./getProjects";
import { getExperiences } from "./getExperiences";
import { getTags } from "./getTags";

const projectsAndExperience = async () => {
  const projectTags = await getProjects();
  const experienceTags = await getExperiences();
  return projectTags.concat(experienceTags);
};

projectsAndExperience().then(getTags);
