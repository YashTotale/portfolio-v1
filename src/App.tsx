//React Imports
import { hot } from "react-hot-loader";
import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Loading from "./Components/Reusable/Loading/Page";

//Images
import DarkLogo from "./Images/Logos/dark.png";
import LightLogo from "./Images/Logos/light.png";

//Utils
import { FOOTER_HEIGHT } from "./Utils/constants";
import { RECAPTCHA_KEY } from "./Utils/CONFIDENTIAL";

//Material UI Imports
import Theme from "./Theme";
import { makeStyles, Theme as ThemeProps, useTheme } from "@material-ui/core";

//Router Imports
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Lazy Imports
const SnackBar = lazy(() => import("./Components/Custom/SnackBar"));
const NavBar = lazy(() => import("./Components/Custom/NavBar"));
const SideBar = lazy(() => import("./Components/Custom/SideBar"));
const Footer = lazy(() => import("./Components/Custom/Footer"));

const Home = lazy(() => import("./Pages/Home"));
const Projects = lazy(() => import("./Pages/Projects"));
const Tags = lazy(() => import("./Pages/Tags"));
const Experience = lazy(() => import("./Pages/Experience"));
const Colors = lazy(() => import("./Pages/Colors"));

const useStyles = makeStyles((theme: ThemeProps) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: FOOTER_HEIGHT,
  },
}));

const App: React.FC = (props) => {
  const classes = useStyles();
  return (
    <Router>
      <Theme>
        <Head />
        <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_KEY}>
          <Suspense fallback={<Loading />}>
            <div className={classes.pageContainer}>
              <NavBar />
              <SideBar />
              <Routes />
              <SnackBar />
            </div>
            <Footer />
          </Suspense>
        </GoogleReCaptchaProvider>
      </Theme>
    </Router>
  );
};

const Head: React.FC = (props) => {
  const theme = useTheme();
  return (
    <Helmet>
      <title>Yash Totale</title>
      <link
        id="icon"
        rel="icon"
        type="image/jpeg"
        href={theme.palette.type === "dark" ? DarkLogo : LightLogo}
      ></link>
    </Helmet>
  );
};

const Routes: React.FC = (props) => {
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
