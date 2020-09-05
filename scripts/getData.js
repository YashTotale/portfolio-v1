const reader = require("g-sheets-api");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const baseOptions = {
  sheetId: "1fxrZIYJUXx-Vz5TljfoSmv8Vpsmh5viybW3hm4GXT04",
  returnAllResults: false,
};

const write = (fileName, data) => {
  const location = path.join(
    __dirname,
    "..",
    "src",
    "Data",
    `${fileName}.json`
  );
  fs.writeFile(location, JSON.stringify(data), "utf8", (err) => {
    if (err) return console.log(err);
    console.log(`${fileName}: `);
    console.log(data);
    gitAdd(location);
  });
};

const getProjects = () => {
  return new Promise((resolve, reject) => {
    const options = { ...baseOptions, sheetNumber: 1 };
    reader(options, resolve);
  });
};

const cleanProjectData = (project) => {
  const { description, tags, icon } = project;
  const newProject = { ...project };
  newProject.description = description ? description.split("; ") : [];
  newProject.tags = tags ? tags.split(", ") : [];
  newProject.icon = icon
    ? icon
    : "https://www.creativefabrica.com/wp-content/uploads/2019/01/Blueprint-icon-by-rudezstudio-580x386.jpg";
  return newProject;
};

const getExperience = () => {
  return new Promise((resolve, reject) => {
    const options = { ...baseOptions, sheetNumber: 2 };
    reader(options, resolve);
  });
};

const gitAdd = (location) => {
  exec(`git add ${location} --verbose`, (err, stdout) => {
    if (err) return console.log(err);
    console.log(stdout);
  });
};

getProjects().then((projects) => {
  write("Projects", projects.map(cleanProjectData));
});

getExperience().then((experience) => {
  write("Experience", experience);
});
