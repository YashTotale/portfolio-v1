//React Imports
import React from "react";
import { hot } from "react-hot-loader";
import { NavBar } from "./Components/NavBar";

//Router Imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Projects } from "./Pages/Projects";
import { Experience } from "./Pages/Experience";

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
      </Switch>
    </Router>
  );
};

//Hot Loader reloads the app when you save changes
export default hot(module)(App);
