export interface ProjectProps {
  id: string;
  name: string;
  description: string[];
  icons: string[];
  sourcecode?: string;
  link?: string;
  tags: string[];
  start: string;
  end?: string;
  url: string;
}

export interface ExperienceProps {
  id: string;
  name: string;
  tags: string[];
  icons: string[];
  url: string;
}

interface BaseTagProps {
  id: string;
  name: string;
  icons: string[];
  url: string;
}

interface TagPropsWithDescription extends BaseTagProps {
  description: string[];
  sourceName: string[];
  sourceLink: string[];
}
interface TagPropsWithoutDescription extends BaseTagProps {
  description: undefined;
  sourceName: undefined;
  sourceLink: undefined;
}

export type TagProps = TagPropsWithDescription | TagPropsWithoutDescription;
