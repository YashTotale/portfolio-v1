// React Imports
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Tags from "../Data/Tags.json";
import StaticImage from "../Components/Reusable/StaticImage";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

// Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  tagPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  jumbotron: {
    margin: 15,
    padding: 15,
    //Flex
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  tagInfo: {
    marginTop: 10,
    //Flex
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

interface Params {
  id: string;
}

interface TagProps {}

const Tag: FC<TagProps> = ({}) => {
  const classes = useStyles();

  const isSizeSmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  const { id } = useParams<Params>();

  const tag = Tags.find((tag) => tag.url === id);

  if (tag) {
    const { name, icons } = tag;
    return (
      <>
        <Helmet>
          <title>{name} - Yash Totale</title>
        </Helmet>
        <div className={classes.tagPage}>
          <Paper className={classes.jumbotron}>
            <Typography variant={isSizeSmall ? "h4" : "h3"}>{name}</Typography>
            <div className={classes.tagInfo}>
              <StaticImage
                width={250}
                xl={300}
                xs={175}
                icons={icons}
                name={name}
                type="Tags"
              />
            </div>
          </Paper>
        </div>
      </>
    );
  }

  return null;
};

export default Tag;
