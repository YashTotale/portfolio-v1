//React Imports
import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import TooltipBtn, { TooltipBtnProps } from "../Reusable/TooltipBtn";
import { SOURCE_CODE } from "../../Utils/constants";

//Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { getIsDarkMode, getIsNavBtnsMenuOpen } from "../../Redux/selectors";
import {
  toggleDarkMode,
  toggleNavBtnsMenu,
  setSnackbarMessage,
} from "../../Redux/actions";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Brightness7,
  Brightness4,
  GitHub,
  Menu as MenuButton,
  Palette,
  Home,
  DeviceHub,
  BusinessCenter,
} from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Menu,
  useTheme,
  useMediaQuery,
  MenuItem,
  RootRef,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  tabs: {
    "& div": {
      justifyContent: "center",
    },
    flexGrow: 1,
  },
  navBtns: {
    position: "absolute",
    right: `${theme.spacing() * 3}px`,
  },
}));

const NavBar: React.FC = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const theme = useTheme();
  const isSizeSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const isDarkMode = useSelector(getIsDarkMode);

  const oppositeTheme = `${isDarkMode ? "Light" : "Dark"} Theme`;

  const btns: TooltipBtnProps[] = [
    {
      title: oppositeTheme,
      onClick: () => {
        dispatch(toggleDarkMode());
        dispatch(setSnackbarMessage(`${oppositeTheme} set`, "success"));
      },
      component: "btn",
      icon: isDarkMode ? <Brightness7 /> : <Brightness4 />,
    },
    {
      title: "Edit Website Colors",
      to: "colors",
      component: "link",
      icon: <Palette />,
    },
    {
      title: "GitHub Repository",
      icon: <GitHub />,
      component: "a",
      href: SOURCE_CODE,
    },
  ];

  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const tabs = ["home", "projects", "experience"];
  const tabIcons = [<Home />, <DeviceHub />, <BusinessCenter />];
  const excludedTabs = ["colors"];
  const currentTab = tabs.includes(path)
    ? path
    : excludedTabs.includes(path)
    ? false
    : "home";

  return (
    <div>
      <AppBar elevation={2} color="transparent" position="static">
        <Toolbar>
          <Tabs className={classes.tabs} value={currentTab}>
            {tabs.map((tab, i) => {
              const upperCase = tab.toUpperCase();
              return (
                <Tab
                  key={tab}
                  icon={isSizeSmall ? tabIcons[i] : undefined}
                  value={tab}
                  component={Link}
                  to={`/${tab}`}
                  label={isSizeSmall ? null : upperCase}
                ></Tab>
              );
            })}
          </Tabs>
          <NavButtons isSizeSmall={isSizeSmall} btns={btns} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

interface NavButtonsProps {
  btns: TooltipBtnProps[];
  isSizeSmall: boolean;
}

const NavButtons: React.FC<NavButtonsProps> = ({ btns, isSizeSmall }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const menuBtnEl = useRef(null);
  const isMenuOpen = useSelector(getIsNavBtnsMenuOpen);

  const tooltipBtns = btns.map((props, i) => <TooltipBtn key={i} {...props} />);
  return (
    <div className={classes.navBtns}>
      {!isSizeSmall ? (
        <div>{tooltipBtns}</div>
      ) : (
        <>
          <RootRef rootRef={menuBtnEl}>
            <TooltipBtn
              title="Menu"
              icon={<MenuButton />}
              component="btn"
              onClick={() => dispatch(toggleNavBtnsMenu())}
            />
          </RootRef>
          <Menu
            onClose={() => dispatch(toggleNavBtnsMenu(false))}
            anchorEl={menuBtnEl.current}
            open={isMenuOpen}
          >
            {tooltipBtns.map((btn, i) => (
              <MenuItem key={i}>{btn}</MenuItem>
            ))}
          </Menu>
        </>
      )}
    </div>
  );
};
