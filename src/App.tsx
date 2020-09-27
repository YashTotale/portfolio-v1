//React Imports
import { hot } from "react-hot-loader";
import React, { lazy, Suspense } from "react";
import Loading from "./Components/Reusable/Loading";
const SnackBar = lazy(() => import("./Components/Custom/SnackBar"));
const NavBar = lazy(() => import("./Components/Custom/NavBar"));
const Footer = lazy(() => import("./Components/Custom/Footer"));

//Utils
import { DARK_LOGO, LIGHT_LOGO } from "./Utils/links";
import { FOOTER_HEIGHT } from "./Utils/constants";

//Pages
const Home = lazy(() => import("./Pages/Home"));
const Projects = lazy(() => import("./Pages/Projects"));
const Tags = lazy(() => import("./Pages/Tags"));
const Experience = lazy(() => import("./Pages/Experience"));
const Colors = lazy(() => import("./Pages/Colors"));

//Material UI Imports
import Theme from "./Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, Theme as ThemeProps, useTheme } from "@material-ui/core";

//Router Imports
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme: ThemeProps) => ({
  pageContainer: {
    paddingBottom: FOOTER_HEIGHT,
  },
}));

const App: React.FC = (props) => {
  const classes = useStyles();
  return (
    <Router>
      <Theme>
        <CssBaseline />
        <Suspense fallback={<Loading />}>
          <div className={classes.pageContainer}>
            <NavBar />
            <Routes />
            <SnackBar />
          </div>
          <Footer />
        </Suspense>
      </Theme>
    </Router>
  );
};

const Routes: React.FC = (props) => {
  const theme = useTheme();
  const icon = document.getElementById("icon") as HTMLLinkElement;
  icon.href = React.useMemo(
    () => (theme.palette.type === "dark" ? DARK_LOGO : LIGHT_LOGO),
    [theme.palette.type, icon]
  );
  return (
    <Switch>
      <Route path="/projects/:id?">
        <Projects />
      </Route>
      <Route path="/experience">
        <Experience />
      </Route>
      <Route path="/tags/:id?">
        <Tags />
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

//Hot Loader reloads the app when you save changes
export default hot(module)(App);
