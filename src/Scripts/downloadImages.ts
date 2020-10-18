import { promises, createWriteStream, existsSync } from "fs";
import { join } from "path";
import { deleteFolderRecursive } from "./index";
import axios from "axios";
import { ImageFolder } from "../Utils/types";

interface Object {
  name: string;
  icons: string[];
  [key: string]: any;
}

export default async function (objects: Object[], type: ImageFolder) {
  const { mkdir } = promises;

  const basePath = join(__dirname, "..", "Images", type);

  await deleteFolderRecursive(basePath);

  if (!existsSync(basePath)) {
    await mkdir(basePath);
  }

  objects.forEach(async ({ icons, name }) => {
    const folder = join(basePath, name);

    if (!existsSync(folder)) {
      await mkdir(folder);
    }

    icons.forEach(async (icon, i) => {
      const { data } = await axios.get(icon, {
        responseType: "stream",
      });

      data.pipe(createWriteStream(join(folder, `${i ? "dark" : "light"}.png`)));
    });
  });
}
