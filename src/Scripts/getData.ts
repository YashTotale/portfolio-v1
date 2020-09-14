import { getProjects } from "./getProjects";
import { getExperiences } from "./getExperiences";
import { addTags } from "./addTags";

//@ts-ignore
getProjects().then(addTags);
getExperiences();
