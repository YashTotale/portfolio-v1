const reader = require("g-sheets-api");
const fs = require("fs");

const baseOptions = {
  sheetId: "1fxrZIYJUXx-Vz5TljfoSmv8Vpsmh5viybW3hm4GXT04",
  returnAllResults: false,
};

const write = (fileName, data) => {
  fs.writeFile(
    `${__dirname}/Data/${fileName}.json`,
    JSON.stringify(data),
    "utf8",
    (err) => {
      if (err) return console.log(err);
    }
  );
};

const getProjects = () => {
  return new Promise((resolve, reject) => {
    const options = { ...baseOptions, sheetNumber: 1 };
    reader(options, resolve);
  });
};

const modifyProject = (project) => {
  const { description, tags, icon } = project;
  const newProject = { ...project };
  newProject.description = description ? description.split("; ") : [];
  newProject.tags = tags ? tags.split(", ") : [];
  newProject.icon = icon
    ? icon
    : "https://www.creativefabrica.com/wp-content/uploads/2019/01/Blueprint-icon-by-rudezstudio-580x386.jpg";
  console.log(newProject);
  return newProject;
};

const getExperience = () => {
  return new Promise((resolve, reject) => {
    const options = { ...baseOptions, sheetNumber: 2 };
    reader(options, resolve);
  });
};

getProjects().then((projects) => {
  write("Projects", projects.map(modifyProject));
});

getExperience().then((experience) => {
  write("Experience", experience);
});
