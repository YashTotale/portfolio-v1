//React Imports
import React from "react";
import Tags from "../Data/Tags.json";
import TagMini from "../Components/Reusable/Overlay";
import TagPage from "../Components/Reusable/Tag/Page";

import { useParams } from "react-router-dom";

//Material UI Imports
import { makeStyles } from "@material-ui/core";

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
  const params = useParams<Params>();
  const tags = React.useMemo(() => Object.keys(Tags), [Tags]);
  //@ts-ignore
  const urls = React.useMemo(() => tags.map((tag) => Tags[tag].url), [tags]);

  return urls.includes(params.id) ? (
    <TagPage />
  ) : (
    <div className={classes.tags}>
      {tags.map((tag, i) => {
        // @ts-ignore
        const { url, name, icons } = Tags[tag];
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
