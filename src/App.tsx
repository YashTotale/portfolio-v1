//React Imports
import React from "react";
import { hot } from "react-hot-loader";
import { NavBar } from "./Components/NavBar";

//Router Imports
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";

const App: React.FC = (props) => {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

//Hot Loader reloads the app when you save changes
export default hot(module)(App);
