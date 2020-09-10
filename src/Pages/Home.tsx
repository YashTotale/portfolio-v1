//React Imports
import React from "react";
import ProfilePics from "../Data/ProfilePictures.json";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, useTheme, useMediaQuery } from "@material-ui/core";
import ModifiedA from "../Components/ModifiedA";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
  },
  img: () => {
    const sizes = {};
    for (const size in ProfilePics) {
      //@ts-ignore
      const pic = ProfilePics[size];
      //@ts-ignore
      sizes[theme.breakpoints.only(size)] = {
        width: `${pic.width}px`,
        height: `${pic.height}px`,
      };
    }
    return {
      width: "300px",
      height: "300px",
      margin: "30px",
      overflow: "hidden",
      justifySelf: "flex-start",
      ...sizes,
    };
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.img}>
        <ModifiedA href="https://i.ibb.co/cC8QdmJ/IMG-0737.jpg">
          <img src="https://i.ibb.co/QYmT3K6/Medium-Size-Profile.jpg"></img>
        </ModifiedA>
      </div>
      <h1>Hello</h1>
    </Paper>
  );
};

export default HomePage;
