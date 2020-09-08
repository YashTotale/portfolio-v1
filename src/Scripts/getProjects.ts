//@ts-ignore
import reader from "g-sheets-api";
import { write, baseOptions } from "./getData";
import { DEFAULT_ICON } from "../Utils/constants";

const projectsRequest = () => {
  return new Promise((resolve, reject) => {
    const options = { ...baseOptions, sheetNumber: 1 };
    reader(options, resolve);
  });
};

const cleanProjectData = (projects: ProjectObject[]): ProjectObject[] => {
  const cleanedProjects: ProjectObject[] = [];
  projects.forEach((project: ProjectObject, i) => {
    if (!project.id) {
      const prevProject = cleanedProjects[i - 1];
      for (const key in project) {
        //@ts-ignore
        prevProject[key].push(project[key]);
      }
    } else {
      const { description, tags, icon } = project;
      project.description =
        typeof description === "string" ? description.split("; ") : [];
      project.tags = typeof tags === "string" ? tags.split(", ") : [];
      project.icon = icon ? icon : DEFAULT_ICON;
      cleanedProjects.push(project);
    }
  });
  return cleanedProjects;
};

export const getProjects = () => {
  projectsRequest().then((projects: any) => {
    const cleanedProjects = cleanProjectData(projects);
    write("Projects", cleanedProjects);
  });
};

export interface ProjectObject {
  id?: string;
  name?: string;
  description?: string | string[];
  icon?: string;
  sourcecode?: string;
  tags?: string | string[];
}
