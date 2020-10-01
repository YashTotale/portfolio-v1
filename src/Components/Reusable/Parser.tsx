// React Imports
import React, { ReactElement, useMemo } from "react";
import Tags from "../../Data/Tags.json";
import StyledLink from "./StyledLink";

// Material UI Imports
interface ParserProps {
  original: string;
}

const Parser: React.FC<ParserProps> = ({ original }) => {
  return useMemo(() => {
    type Regex = [RegExp, (match: string) => ReactElement<any, any>];

    const regexes: Regex[] = [
      [/\*\*(.*?)\*\*/gi, (match: string) => <strong>{match}</strong>],
      ...Tags.map(
        (tag): Regex => [
          new RegExp(`(?<![a-zA-Z])(${tag.name})(?![a-zA-Z])`, "gi"),
          (match: string) => (
            <StyledLink color="primary" to={`/tags/${tag.url}`}>
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
  }, [original]);
};

export default Parser;
