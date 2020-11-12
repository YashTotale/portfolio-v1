import { promises, createWriteStream, existsSync } from "fs";
import { join } from "path";
import axios from "axios";
import rimraf from "rimraf";
import { imagesFolder } from "./index";
import { ImageFolder } from "../Utils/types";

interface Object {
  name: string;
  icons: string[];
  [key: string]: any;
}

const writeImage = (data: any, location: string) => {
  return new Promise((resolve, reject) => {
    const stream = createWriteStream(location, {});
    data.pipe(stream);
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
};

export const downloadIcons = async (objects: Object[], type: ImageFolder) => {
  return new Promise((resolve, reject) => {
    const { mkdir } = promises;

    const basePath = join(imagesFolder, type);

    try {
      rimraf(basePath, async (err) => {
        if (err) throw err;

        if (!existsSync(basePath)) {
          await mkdir(basePath);
        }

        objects.forEach(async ({ icons, name }, objectIndex) => {
          const folder = join(basePath, name);

          if (!existsSync(folder)) {
            await mkdir(folder);
          }

          icons.forEach(async (icon, iconIndex) => {
            const names = ["light", "dark"];

            const location = join(folder, `${names[iconIndex]}.png`);

            const { data } = await axios.get(icon, {
              responseType: "stream",
            });

            await writeImage(data, location);

            if (
              iconIndex === names.length - 1 &&
              objectIndex === objects.length - 1
            ) {
              console.log(`\n${type} images added`);
              resolve();
            }
          });
        });
      });
    } catch (e) {
      console.log(e);
      reject();
      process.exit(1);
    }
  });
};
