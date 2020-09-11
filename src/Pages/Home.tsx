import { makeStyles } from "@material-ui/core";
//React Imports
import React from "react";
import AboutMe from "../Components/Custom/AboutMe";

const useStyles = makeStyles((theme) => {
  console.log(theme.typography);
  return {};
});

const HomePage: React.FC = () => {
  const classes = useStyles();
  return <AboutMe />;
};

export default HomePage;
