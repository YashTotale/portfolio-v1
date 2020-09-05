//React Imports
import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import TooltipBtn, { TooltipBtnProps } from "./TooltipBtn";
import { SOURCE_CODE } from "../Utils/constants";

//Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { getIsDarkMode, getIsNavBtnsMenuOpen } from "../Redux/selectors";
import { toggleDarkMode, toggleNavBtnsMenu } from "../Redux/actions";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Brightness7,
  Brightness4,
  GitHub,
  Menu as MenuButton,
  Palette,
} from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  TabProps,
  Menu,
  useTheme,
  useMediaQuery,
  MenuItem,
  RootRef,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    "& div": {
      justifyContent: "center",
    },
    flexGrow: 1,
  },
}));

export const NavBar: React.FC = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const theme = useTheme();
  const isSizeSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const isDarkMode = useSelector(getIsDarkMode);

  const btns = [
    {
      title: `${isDarkMode ? "Light" : "Dark"} Theme`,
      onClick: () => dispatch(toggleDarkMode()),
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
  const excludedTabs = ["colors"];
  const currentTab = tabs.includes(path)
    ? path
    : excludedTabs.includes(path)
    ? false
    : "home";

  return (
    <div className={classes.root}>
      <AppBar elevation={2} color="transparent" position="static">
        <Toolbar>
          <Tabs className={classes.tabs} value={currentTab}>
            {tabs.map(LinkedTab)}
          </Tabs>
          <NavButtons isSizeSmall={isSizeSmall} btns={btns} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

interface NavButtonsProps {
  btns: TooltipBtnProps[];
  isSizeSmall: boolean;
}

const NavButtons: React.FC<NavButtonsProps> = ({ btns, isSizeSmall }) => {
  const dispatch = useDispatch();
  const menuBtnEl = useRef(null);
  const isMenuOpen = useSelector(getIsNavBtnsMenuOpen);

  const tooltipBtns = btns.map((props, i) => <TooltipBtn key={i} {...props} />);
  return !isSizeSmall ? (
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
        onClose={() => dispatch(toggleNavBtnsMenu())}
        anchorEl={menuBtnEl.current}
        open={isMenuOpen}
      >
        {tooltipBtns.map((btn, i) => (
          <MenuItem key={i}>{btn}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

const LinkedTab = (tab: string): TabProps => {
  const upperCase = tab.toUpperCase();
  return (
    <Tab
      key={tab}
      value={tab}
      component={Link}
      to={`/${tab}`}
      label={upperCase}
    ></Tab>
  );
};
