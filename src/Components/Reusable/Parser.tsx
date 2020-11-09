// React Imports
import { Link } from "@material-ui/core";
import React, { ReactElement, useMemo } from "react";
import Tags from "../../Data/Tags.json";
import StyledLink from "./StyledLink";

interface ParserProps {
  original: string;
}

const Parser: React.FC<ParserProps> = ({ original }) => {
  return useMemo(() => {
    const regexes = [
      [/\*\*(.*?)\*\*/gi, (match: string) => <strong>{match}</strong>],
      [
        /\[([\w\s\d]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+)\)/gi,
        (text: string, url: string) => (
          <Link
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
            href={url}
          >
            {text}
          </Link>
        ),
      ],
      ...Tags.map((tag) => [
        new RegExp(`(?<![a-zA-Z])(${tag.name})(?![a-zA-Z])`, "gi"),
        (match: string) => (
          <StyledLink color="primary" to={`/tags/${tag.url}`}>
            {match}
          </StyledLink>
        ),
      ]),
    ];
    const parsed: ReactElement<any, any>[] = [];
    const matchArrays: any[] = [];
    regexes.forEach((regex) => {
      let matchArray;
      while ((matchArray = (regex[0] as RegExp).exec(original)) !== null) {
        matchArrays.push([
          matchArray,
          (regex[1] as (
            match: string,
            match2?: string
          ) => ReactElement<any, any>)(matchArray[1], matchArray[2]),
        ]);
      }
    });
    matchArrays.sort((a, b) => {
      return a[0].index - b[0].index;
    });
    let lastIndex = 0;
    matchArrays.forEach(([matchArray, element]) => {
      parsed.push(<>{original.substring(lastIndex, matchArray.index)}</>);
      parsed.push(element);
      lastIndex = matchArray.index + matchArray[0].length;
    });
    parsed.push(<>{original.substring(lastIndex)}</>);
    return <>{parsed.map((p, i) => React.cloneElement(p, { key: i }))}</>;
  }, [original]);
};

export default Parser;
