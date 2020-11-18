//@ts-ignore
import reader from "g-sheets-api";
import { writeData, baseOptions } from "./index";
import { downloadIcons } from "./downloadImages";
import { DEFAULT_PROJECT_ICON } from "../Utils/links";
import { ProjectProps } from "../Utils/interfaces";
import { createURL } from "../Utils/funcs";

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
  let allTags: string[] = [];

  projects.forEach((project, i) => {
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
        id: parseInt(id),
        description: [description],
        start,
        end,
        icons: icons ? [icons] : [DEFAULT_PROJECT_ICON],
        tags: [tags],
        url: createURL(name),
      };

      if (i === projects.length - 1) {
        newProject.icons.push(newProject.icons[0]);
      }

      cleanedProjects.push(newProject);

      allTags = allTags.concat(newProject.tags);
    }
  });
  return [cleanedProjects, allTags];
};

export const getProjects = async () => {
  const projects = await projectsRequest();
  const [cleanedProjects, tags] = cleanProjectData(projects);
  await writeData("Projects", cleanedProjects);
  await downloadIcons(cleanedProjects, "Projects");
  return tags;
};
