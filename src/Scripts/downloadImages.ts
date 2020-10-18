import { promises, createWriteStream, existsSync } from "fs";
import { join } from "path";
import axios from "axios";
import rimraf from "rimraf";
import { gitAdd } from "./index";
import { ImageFolder } from "../Utils/types";
import { resolve } from "dns";

interface Object {
  name: string;
  icons: string[];
  [key: string]: any;
}

const writeImage = (data: any, location: string) => {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(location);
    data.pipe(file);
    file.on("finish", resolve);
    file.on("error", reject);
  });
};

export default async function (objects: Object[], type: ImageFolder) {
  return new Promise((resolve, reject) => {
    const { mkdir } = promises;

    const basePath = join(__dirname, "..", "Images", type);

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
              await gitAdd(basePath);
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
}
