export const SOURCE_CODE =
  "http://github.com/YashTotale/YashTotale.github.io.git";

export const DEFAULT_ICON_LIGHT =
  "https://i.ibb.co/wYhy5Zf/Default-Project.jpg";

export const DEFAULT_ICON_DARK =
  "https://i.ibb.co/RyMxJsV/Default-Project-Dark.jpg";

export const LINKEDIN_URL = "https://linkedin.com/in/yash-totale";

export const GITHUB_URL = "https://github.com/YashTotale";

export const EMAIL_URL = "mailto:totaleyash@gmail.com";

export const FOOTER_HEIGHT = "5rem";

export const PROFILE_PIC_RATIO = 1.2776;

export const PROFILE_PIC =
  "https://drive.google.com/uc?export=view&id=13_ogdHkakqTPNH-NVnhu1_IPGwymiaZW";

export const BACKGROUND_PIC =
  "https://i.ibb.co/G3j8ZQD/68cacd73-8dc9-43fb-bb22-be6fd2f3ea18.jpg";

export interface ProjectProps {
  id: string;
  name: string;
  description: string[];
  icons: string[];
  sourcecode?: string;
  link?: string;
  tags: string[];
}
