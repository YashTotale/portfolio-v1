export interface ProjectProps {
  id: number;
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
  id: number;
  name: string;
  tags: string[];
  icons: string[];
  url: string;
}

export interface TermProps {
  name: string;
  link: string;
  summary?: string;
  summarySource?: string;
}

interface BaseTagProps {
  id: number;
  name: string;
  icons: string[];
  url: string;
  website?: string;
  sourcecode?: string;
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
