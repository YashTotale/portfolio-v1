//React Imports
import React from "react";
import { Helmet } from "react-helmet";
import Tags from "../Data/Tags.json";
import TagOverlay, {
  DefaultOverlaySizes,
} from "../Components/Reusable/Overlay";
import TagPage from "../Components/Reusable/Tag/Page";

import { useParams } from "react-router-dom";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core";
import { TagProps } from "../Utils/interfaces";

const useStyles = makeStyles<Theme, typeof DefaultOverlaySizes>((theme) => ({
  tags: {
    width: "100%",
    display: "grid",
    gap: "25px",
    marginTop: 15,
    [theme.breakpoints.down("xl")]: {
      gridTemplateColumns: ({ xl }) => `repeat(auto-fit, minmax(${xl}px, 1fr))`,
    },
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: ({ lg }) => `repeat(auto-fit, minmax(${lg}px, 1fr))`,
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: ({ md }) => `repeat(auto-fit, minmax(${md}px, 1fr))`,
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: ({ sm }) => `repeat(auto-fit, minmax(${sm}px, 1fr))`,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: ({ xs }) => `repeat(auto-fit, minmax(${xs}px, 1fr))`,
    },
  },
}));

interface Params {
  id: string;
}

const TagsPage: React.FC = () => {
  const classes = useStyles({ ...DefaultOverlaySizes });
  const { id } = useParams<Params>();
  const tagURLs = React.useMemo(() => Tags.map(({ url }) => url), [Tags]);

  return (
    <>
      <Helmet>
        <title>Tags - Yash Totale</title>
      </Helmet>
      {tagURLs.includes(id) ? (
        <TagPage {...(Tags.find((tag) => tag.url === id) as TagProps)} />
      ) : (
        <div className={classes.tags}>
          {Tags.map(({ url, name, icons }, i) => {
            return (
              <TagOverlay
                key={i}
                name={name}
                icons={icons}
                url={`/tags/${url}`}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default TagsPage;
