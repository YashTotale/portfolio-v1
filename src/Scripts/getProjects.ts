//@ts-ignore
import reader from "g-sheets-api";
import { write, baseOptions } from "./index";
import { DEFAULT_ICON_DARK, DEFAULT_ICON_LIGHT } from "../Utils/constants";

const projectsRequest = () => {
  return new Promise((resolve, reject) => {
    const options = { ...baseOptions, sheetNumber: 1 };
    reader(options, resolve);
  });
};

const cleanProjectData = (
  projects: ProjectObject[]
): [CleanProjectData[], string[]] => {
  const cleanedProjects: CleanProjectData[] = [];
  let tags: string[] = [];

  projects.forEach((project) => {
    if (!project.id) {
      const [prevProject] = cleanedProjects.slice(-1);
      for (const key in project) {
        //@ts-ignore
        prevProject[key].push(project[key]);
      }

      if (prevProject.icons.length < 2) {
        prevProject.icons.push(prevProject.icons[0]);
      }

      tags = tags.concat(prevProject.tags);
    } else {
      const newProject: CleanProjectData = {
        ...project,
        description: [project.description],
        icons: project.icons
          ? [project.icons]
          : [DEFAULT_ICON_LIGHT, DEFAULT_ICON_DARK],
        tags: [project.tags],
      };
      cleanedProjects.push(newProject);

      tags = tags.concat(newProject.tags);
    }
  });
  return [cleanedProjects, tags];
};

export const getProjects = () => {
  return new Promise(async (resolve, reject) => {
    const projects: any = await projectsRequest();
    const [cleanedProjects, tags] = cleanProjectData(projects);
    write("Projects", cleanedProjects);
    resolve(tags);
  });
};

export interface CleanProjectData {
  id: string;
  name: string;
  description: string[];
  icons: string[];
  sourcecode?: string;
  link?: string;
  tags: string[];
}

export interface ProjectObject {
  id: string;
  name: string;
  description: string;
  icons?: string;
  sourcecode?: string;
  link?: string;
  tags: string;
}
