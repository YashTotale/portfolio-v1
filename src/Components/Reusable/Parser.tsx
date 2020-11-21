// React Imports
import React, { ElementType, FC, ReactElement, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import Tag from "./Tag/Preview";
import Term from "./Term";
import { regexEscape } from "../../Utils/funcs";

//Data Imports
import Tags from "../../Data/Tags.json";
import Terms from "../../Data/Terms.json";

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
  excludedTerms?: string[];
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
  suffix?: React.ReactElement | string;
  noAddedLinks?: boolean;
}

const Parser: FC<ParserProps> = ({
  children,
  excludedTags,
  excludedTerms,
  tagColor,
  paragraphProps,
  linkProps,
  suffix,
  noAddedLinks,
}) => {
  const parsers: Parsers = {
    paragraph: ({ children }) => (
      <Typography {...paragraphProps}>
        {noAddedLinks
          ? children
          : children.map((child, i) => (
              <LinkAdder
                key={i}
                excludedTags={excludedTags}
                excludedTerms={excludedTerms}
                color={tagColor}
                text={child}
              />
            ))}
        {suffix}
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

interface LinkAdderProps {
  text: ReactElement;
  excludedTags?: string[];
  excludedTerms?: string[];
  color?:
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error";
}

const LinkAdder: React.FC<LinkAdderProps> = ({
  color = "primary",
  text,
  excludedTags,
  excludedTerms,
}) => {
  const regexes = useMemo(
    () => [
      ...Tags.map(
        (tag): Regex => [
          new RegExp(
            `(?<![a-zA-Z])(${regexEscape(tag.name)})(?![a-zA-Z])`,
            "gi"
          ),
          (match: string) => <Tag color={color} {...tag} />,
          tag.name,
        ]
      ).filter((val) => !excludedTags || !excludedTags.includes(val[2])),
      ...Terms.map(
        (term): Regex => [
          new RegExp(
            `(?<![a-zA-Z])(${regexEscape(term.name)})(?![a-zA-Z])`,
            "gi"
          ),
          (name: string) => <Term color={color} {...term} />,
          term.name,
        ]
      ).filter((val) => !excludedTerms || !excludedTerms.includes(val[2])),
    ],
    [color, excludedTags, excludedTerms]
  );

  return useMemo(() => {
    if (text.props.node?.type === "text") {
      const matchArrays: [RegExpExecArray, JSX.Element][] = [];
      const parsed: ReactElement[] = [];

      const value: string = text.props?.children;

      regexes.forEach((regex) => {
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
  }, [text, regexes]);
};

export default Parser;
