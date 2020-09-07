//React Imports
import React, { lazy, Suspense } from "react";
import { hot } from "react-hot-loader";
import { NavBar } from "./Components/NavBar";
import { SnackBar } from "./Components/SnackBar";

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
  return (
    <Theme>
      <CssBaseline />
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Routes />
        </Switch>
        <SnackBar />
      </Router>
    </Theme>
  );
};

const Routes: React.FC = (props) => {
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
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
