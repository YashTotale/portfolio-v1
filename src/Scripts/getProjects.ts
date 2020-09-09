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

const cleanProjectData = (projects: ProjectObject[]): CleanProjectData[] => {
  const cleanedProjects: CleanProjectData[] = [];
  projects.forEach((project, i) => {
    if (!project.id) {
      const [prevProject] = cleanedProjects.slice(-1);
      for (const key in project) {
        //@ts-ignore
        prevProject[key].push(project[key]);
      }
    } else {
      const newProject: CleanProjectData = {
        ...project,
        description: [project.description],
        icon: project.icon ? project.icon : DEFAULT_ICON,
        tags: [project.tags],
      };
      cleanedProjects.push(newProject);
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

export interface CleanProjectData {
  id: string;
  name: string;
  description: string[];
  icon: string;
  sourcecode?: string;
  tags: string[];
}

export interface ProjectObject {
  id: string;
  name: string;
  description: string;
  icon?: string;
  sourcecode?: string;
  tags: string;
}
