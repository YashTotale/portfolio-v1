export interface ProjectProps {
  id: string;
  name: string;
  description: string[];
  icons: string[];
  sourcecode?: string;
  link?: string;
  tags: string[];
  start: string[];
}

export interface ExperienceProps {
  id: string;
  name: string;
  tags: string[];
}

export interface TagProps {
  id: string;
  name: string;
  icons?: string[];
  url: string;
}
