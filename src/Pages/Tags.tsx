//React Imports
import React from "react";
import { Helmet } from "react-helmet";
import Tags from "../Data/Tags.json";
import withScroll from "../Components/HigherOrder/withScroll";
import TagOverlay, {
  DefaultOverlaySizes,
} from "../Components/Reusable/Overlay";
import TagPage from "../Components/Reusable/Tag/Page";

import { useParams } from "react-router-dom";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core";
import { TagProps } from "../Utils/interfaces";
import { BreakpointValues } from "@material-ui/core/styles/createBreakpoints";

interface StyleProps extends BreakpointValues {}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  tags: ({ xl, lg, md, sm, xs }) => ({
    width: "100%",
    display: "grid",
    gap: "25px",
    margin: "15px 10px 0px",
    [theme.breakpoints.down("xl")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(${xl}px, 1fr))`,
    },
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(${lg}px, 1fr))`,
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(${md}px, 1fr))`,
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(${sm}px, 1fr))`,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(${xs}px, 1fr))`,
    },
  }),
}));

interface Params {
  id: string;
}

const TagsPage: React.FC = () => {
  const sizes = { ...DefaultOverlaySizes };

  const classes = useStyles({ ...sizes });
  const { id } = useParams<Params>();
  const tagURLs = React.useMemo(() => Tags.map(({ url }) => url), []);

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
                type="Tags"
                url={`/tags/${url}`}
                icons={icons}
                {...sizes}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default withScroll(TagsPage);
