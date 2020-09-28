//React Imports
import React from "react";
import Tags from "../Data/Tags.json";
import TagMini from "../Components/Reusable/Overlay";
import TagPage from "../Components/Reusable/Tag/Page";

import { useParams } from "react-router-dom";

//Material UI Imports
import { makeStyles } from "@material-ui/core";
import { TagProps } from "../Utils/interfaces";

const useStyles = makeStyles((theme) => ({
  tags: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
}));

interface Params {
  id: string;
}

const TagsPage: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<Params>();
  const tagURLs = React.useMemo(() => Tags.map(({ url }) => url), [Tags]);

  return tagURLs.includes(id) ? (
    <TagPage {...(Tags.find((tag) => tag.url === id) as TagProps)} />
  ) : (
    <div className={classes.tags}>
      {Tags.map(({ url, name, icons }, i) => {
        return (
          <TagMini
            key={i}
            name={name}
            icons={icons}
            url={`/tags/${url}`}
          ></TagMini>
        );
      })}
    </div>
  );
};

export default TagsPage;
