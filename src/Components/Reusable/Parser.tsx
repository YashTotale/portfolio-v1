// React Imports
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Tags from "../../Data/Tags.json";

// Material UI Imports
import { Link as StyledLink } from "@material-ui/core";

interface ParserProps {
  original: string;
}

const Parser: React.FC<ParserProps> = ({ original }) => {
  type Regex = [RegExp, (match: string) => ReactElement<any, any>];

  const regexes: Regex[] = [
    [/\*\*(.*?)\*\*/gi, (match: string) => <strong>{match}</strong>],
    ...Tags.map(
      (tag): Regex => [
        new RegExp(`(?<![a-zA-Z])(${tag.name})(?![a-zA-Z])`, "gi"),
        (match: string) => (
          <StyledLink
            color="secondary"
            to={`/tags/${tag.url}`}
            component={Link}
          >
            {match}
          </StyledLink>
        ),
      ]
    ),
  ];

  const parsed: ReactElement<any, any>[] = [];

  const matchArrays: [RegExpExecArray, ReactElement<any, any>][] = [];

  regexes.forEach((regex) => {
    let matchArray;
    while ((matchArray = regex[0].exec(original)) !== null) {
      matchArrays.push([matchArray, regex[1](matchArray[1])]);
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
};

export default Parser;
