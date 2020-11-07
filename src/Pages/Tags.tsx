//React Imports
import React from "react";
import { Helmet } from "react-helmet";
import Tags from "../Data/Tags.json";
import withScroll from "../Components/HigherOrder/withScroll";
import TagOverlay, {
  DefaultOverlaySizes,
} from "../Components/Reusable/Overlay";
import Grid from "../Components/Reusable/Grid";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme>((theme) => ({
  tags: {
    width: "100%",
    gap: "25px",
    margin: "15px 10px 0px",
  },
}));

const TagsPage: React.FC = () => {
  const classes = useStyles();

  const sizes = { ...DefaultOverlaySizes };

  return (
    <>
      <Helmet>
        <title>Tags - Yash Totale</title>
      </Helmet>
      <Grid className={classes.tags} {...sizes}>
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
      </Grid>
    </>
  );
};

export default withScroll(TagsPage);
