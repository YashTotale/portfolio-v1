//React Imports
import { hot } from "react-hot-loader";
import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

//Component Imports
import NavBar from "./Components/Custom/NavBar";
import SideBar from "./Components/Custom/SideBar";
import SnackBar from "./Components/Custom/SnackBar";
import Loading from "./Components/Reusable/Loading/Page";
import Footer from "./Components/Custom/Footer";

//Images
import DarkLogo from "./Images/Logos/dark.png";
import LightLogo from "./Images/Logos/light.png";

//Utils
import { FOOTER_HEIGHT, SIDEBAR_WIDTH } from "./Utils/constants";
import { RECAPTCHA_KEY } from "./Utils/CONFIDENTIAL";

//Material UI Imports
import Theme from "./Theme";
import { makeStyles, Theme as ThemeProps, useTheme } from "@material-ui/core";

//Router Imports
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Page Imports
const Home = lazy(() => import("./Pages/Home"));
const Projects = lazy(() => import("./Pages/Projects"));
const Tags = lazy(() => import("./Pages/Tags"));
const Experience = lazy(() => import("./Pages/Experience"));
const Colors = lazy(() => import("./Pages/Colors"));
const Contact = lazy(() => import("./Pages/Contact"));

const useStyles = makeStyles((theme: ThemeProps) => ({
  pages: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: FOOTER_HEIGHT,
    [theme.breakpoints.up("lg")]: {
      marginLeft: SIDEBAR_WIDTH,
    },
  },
}));

const App: React.FC = (props) => {
  return (
    <Router>
      <Theme>
        <Head />
        <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_KEY}>
          <NavBar />
          <SideBar />
          <Suspense fallback={<Loading />}>
            <Routes />
          </Suspense>
          <SnackBar />
          <Footer />
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
  const classes = useStyles();

  return (
    <div className={classes.pages}>
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
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

//Hot Loader reloads the app when you save changes
export default hot(module)(App);
