//React Imports
import React from "react";
import Tags from "../Data/Tags.json";
import TagMini from "../Components/Reusable/Overlay";

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

const TagsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.tags}>
      {Object.keys(Tags).map((tag) => {
        // @ts-ignore
        return <TagMini {...Tags[tag]}></TagMini>;
      })}
    </div>
  );
};

export default TagsPage;
