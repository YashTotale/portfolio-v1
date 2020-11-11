// React Imports
import React, { ElementType, FC, ReactElement, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import StyledLink from "./StyledLink";
import Tags from "../../Data/Tags.json";

// Material UI Imports
import {
  Typography,
  TypographyProps,
  Link,
  LinkProps,
} from "@material-ui/core";
import {} from "@material-ui/icons";

interface Parsers {
  paragraph: (props: { children: ReactElement[] }) => ReactElement;
  link: (props: { children: ReactElement[]; href: string }) => ReactElement;
  [nodeType: string]: ElementType<any>;
}

interface ParserProps {
  children: string;
  excludedTags?: string[];
  tagColor?:
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error";
  paragraphProps?: TypographyProps;
  linkProps?: LinkProps;
}

const Parser: FC<ParserProps> = ({
  children,
  excludedTags,
  paragraphProps,
  linkProps,
  tagColor,
}) => {
  const parsers: Parsers = {
    paragraph: ({ children }) => (
      <Typography {...paragraphProps}>
        {children.map((child, i) => (
          <TagParser
            key={i}
            excludedTags={excludedTags}
            color={tagColor}
            text={child}
          />
        ))}
      </Typography>
    ),
    link: ({ href, children }) => (
      <Link
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...linkProps}
      >
        {children}
      </Link>
    ),
  };

  return <ReactMarkdown renderers={parsers}>{children}</ReactMarkdown>;
};

type Regex = [RegExp, (match: string) => JSX.Element, string];

interface TagParserProps {
  text: ReactElement;
  excludedTags?: string[];
  color?:
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error";
}

const TagParser: React.FC<TagParserProps> = ({
  color = "primary",
  text,
  excludedTags,
}) => {
  let tagRegexes = useMemo(
    () =>
      Tags.map(
        (tag): Regex => [
          new RegExp(`(?<![a-zA-Z])(${tag.name})(?![a-zA-Z])`, "gi"),
          (match: string) => (
            <StyledLink color={color} to={`/tags/${tag.url}`}>
              {match}
            </StyledLink>
          ),
          tag.name,
        ]
      ).filter((val) => !excludedTags || !excludedTags.includes(val[2])),
    [color, excludedTags]
  );

  return useMemo(() => {
    if (text.props.node?.type === "text") {
      const matchArrays: [RegExpExecArray, JSX.Element][] = [];
      const parsed: ReactElement[] = [];

      const value: string = text.props?.children;

      tagRegexes.forEach((regex) => {
        let matchArray;
        while ((matchArray = regex[0].exec(value)) !== null) {
          matchArrays.push([matchArray, regex[1](matchArray[1])]);
        }
      });
      matchArrays.sort((a, b) => {
        return a[0].index - b[0].index;
      });
      let lastIndex = 0;
      matchArrays.forEach(([matchArray, element]) => {
        parsed.push(<>{value.substring(lastIndex, matchArray.index)}</>);
        parsed.push(element);
        lastIndex = matchArray.index + matchArray[0].length;
      });
      parsed.push(<>{value.substring(lastIndex)}</>);
      return <>{parsed.map((p, i) => React.cloneElement(p, { key: i }))}</>;
    }

    return text;
  }, [text, tagRegexes]);
};

export default Parser;
