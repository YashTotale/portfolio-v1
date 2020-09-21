//@ts-ignore
import reader from "g-sheets-api";
import { write, baseOptions } from "./index";
import { DEFAULT_PROJECT_ICON } from "../Utils/links";
import { ProjectProps } from "../Utils/interfaces";

const projectsRequest = () => {
  return new Promise<ProjectObject[]>((resolve, reject) => {
    const options = { ...baseOptions, sheetNumber: 1 };
    reader(options, resolve);
  });
};

const cleanProjectData = (
  projects: ProjectObject[]
): [ProjectProps[], string[]] => {
  const cleanedProjects: ProjectProps[] = [];
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
      const newProject: ProjectProps = {
        ...project,
        description: [project.description],
        start: [project.start],
        icons: project.icons ? [project.icons] : [DEFAULT_PROJECT_ICON],
        tags: [project.tags],
      };
      cleanedProjects.push(newProject);

      tags = tags.concat(newProject.tags);
    }
  });
  return [cleanedProjects, tags];
};

export const getProjects = () => {
  return new Promise<string[]>(async (resolve, reject) => {
    const projects: ProjectObject[] = await projectsRequest();
    const [cleanedProjects, tags] = cleanProjectData(projects);
    write("Projects", cleanedProjects);
    resolve(tags);
  });
};

export interface ProjectObject {
  id: string;
  name: string;
  description: string;
  icons?: string;
  sourcecode?: string;
  link?: string;
  start: string;
  tags: string;
}
