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

const cleanProjectData = (project: ProjectObject) => {
  const { description, tags, icon } = project;
  const newProject = { ...project };
  newProject.description =
    typeof description === "string" ? description.split("; ") : [];
  newProject.tags = typeof tags === "string" ? tags.split(", ") : [];
  newProject.icon = icon ? icon : DEFAULT_ICON;
  return newProject;
};

export const getProjects = () => {
  projectsRequest().then((projects: any) => {
    write("Projects", projects.map(cleanProjectData));
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
