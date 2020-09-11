//React Imports
import React, { lazy, Suspense } from "react";
import { hot } from "react-hot-loader";
import { FOOTER_HEIGHT } from "./Utils/constants";
const SnackBar = lazy(() => import("./Components/Custom/SnackBar"));
const NavBar = lazy(() => import("./Components/Custom/NavBar"));
const Footer = lazy(() => import("./Components/Custom/Footer"));

//Pages
const Home = lazy(() => import("./Pages/Home"));
const Projects = lazy(() => import("./Pages/Projects"));
const Experience = lazy(() => import("./Pages/Experience"));
const Colors = lazy(() => import("./Pages/Colors"));

//Material UI Imports
import Theme from "./Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Skeleton } from "@material-ui/lab";
import { makeStyles, Theme as ThemeProps } from "@material-ui/core";

//Router Imports
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme: ThemeProps) => ({
  pageContainer: {
    paddingBottom: FOOTER_HEIGHT,
  },
  loadingSkeleton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "50px 0px",
  },
  rectSkeleton: {
    width: "60%",
    height: 0,
    paddingBottom: "20%",
  },
  textSkeleton: {
    width: "60%",
    margin: "10px 0px",
  },
}));

const App: React.FC = (props) => {
  const classes = useStyles();
  return (
    <Theme>
      <CssBaseline />
      <Suspense fallback={<Loading />}>
        <Router>
          <div className={classes.pageContainer}>
            <NavBar />
            <Routes />
            <SnackBar />
          </div>
          <Footer />
        </Router>
      </Suspense>
    </Theme>
  );
};

const Routes: React.FC = (props) => {
  return (
    <Switch>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/experience">
        <Experience />
      </Route>
      <Route path="/colors">
        <Colors />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

const Loading: React.FC = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.loadingSkeleton}>
      <Skeleton className={classes.rectSkeleton} variant="rect"></Skeleton>
      {[...Array(5)].map((x, i) => (
        <Skeleton
          key={i}
          className={classes.textSkeleton}
          variant="text"
        ></Skeleton>
      ))}
    </div>
  );
};

//Hot Loader reloads the app when you save changes
export default hot(module)(App);
