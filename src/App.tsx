//React Imports
import React, { lazy, Suspense } from "react";
import { hot } from "react-hot-loader";
import { NavBar } from "./Components/NavBar";

const Home = lazy(() => import("./Pages/Home"));
const Projects = lazy(() => import("./Pages/Projects"));
const Experience = lazy(() => import("./Pages/Experience"));
const Colors = lazy(() => import("./Pages/Colors"));

//Material UI Imports
import Theme from "./Theme";
import CssBaseline from "@material-ui/core/CssBaseline";

//Router Imports
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = (props) => {
  return (
    <Theme>
      <CssBaseline />
      <Routes />
    </Theme>
  );
};

const Routes: React.FC = (props) => {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
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
      </Switch>
    </Router>
  );
};

//Hot Loader reloads the app when you save changes
export default hot(module)(App);
