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
  //@ts-ignore
  const urls = React.useMemo(() => Tags.map(({ url }) => url), [Tags]);

  return urls.includes(params.id) ? (
    <TagPage />
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
