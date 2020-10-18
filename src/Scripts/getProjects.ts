//@ts-ignore
import reader from "g-sheets-api";
import { write, baseOptions, createURL } from "./index";
import downloadImages from "./downloadImages";
import { DEFAULT_PROJECT_ICON } from "../Utils/links";
import { ProjectProps } from "../Utils/interfaces";

const projectsRequest = () => {
  return new Promise<ProjectObject[]>((resolve, reject) => {
    const options = { ...baseOptions, sheetNumber: 1 };
    reader(options, resolve);
  });
};

const cleanProjectData = async (
  projects: ProjectObject[]
): Promise<[ProjectProps[], string[]]> => {
  const cleanedProjects: ProjectProps[] = [];
  let allTags: string[] = [];

  projects.forEach((project) => {
    const { id, description, start, end, icons, tags, name } = project;
    if (!id) {
      const [prevProject] = cleanedProjects.slice(-1);
      for (const key in project) {
        //@ts-ignore
        prevProject[key].push(project[key]);
      }

      if (prevProject.icons.length < 2) {
        prevProject.icons.push(prevProject.icons[0]);
      }

      allTags = allTags.concat(prevProject.tags);
    } else {
      const newProject: ProjectProps = {
        ...project,
        description: [description],
        start,
        end,
        icons: icons ? [icons] : [DEFAULT_PROJECT_ICON],
        tags: [tags],
        url: createURL(name),
      };
      cleanedProjects.push(newProject);

      allTags = allTags.concat(newProject.tags);
    }
  });
  return [cleanedProjects, allTags];
};

export const getProjects = () => {
  return new Promise<string[]>(async (resolve, reject) => {
    const projects: ProjectObject[] = await projectsRequest();
    const [cleanedProjects, tags] = await cleanProjectData(projects);
    await downloadImages(cleanedProjects, "Projects");
    write("Projects", cleanedProjects);
    resolve(tags);
  });
};

export interface ProjectObject {
  id: string;
  name: string;
  description: string;
  tags: string;
  start: string;
  end?: string;
  icons?: string;
  link?: string;
  sourcecode?: string;
}
