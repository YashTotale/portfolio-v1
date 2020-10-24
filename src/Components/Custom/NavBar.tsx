//React Imports
import React from "react";
import { useLocation } from "react-router-dom";
import TooltipBtn, { TooltipBtnProps } from "../Reusable/TooltipBtn";
import ListAction, { ListActionProps } from "../Reusable/ListAction";
import StyledLink from "../Reusable/StyledLink";
import { SOURCE_CODE } from "../../Utils/links";

//Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { getIsNavBtnsMenuOpen } from "../../Redux/selectors";
import { toggleDarkModeWMessage } from "../../Redux/thunks";
import { toggleNavBtnsMenu, toggleSidebar } from "../../Redux/actions";

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
  Label,
} from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  tabs: {
    "& div": {
      justifyContent: "center",
    },
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  navBtns: {
    position: "absolute",
    right: theme.spacing() * 3,
    [theme.breakpoints.down("sm")]: {
      right: theme.spacing() * 2,
    },
  },
}));

const NavBar: React.FC = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isSizeSmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("md")
  );

  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const tabs = ["home", "projects", "experience"];
  const tabIcons = [<Home />, <DeviceHub />, <BusinessCenter />];
  const excludedTabs = ["colors", "tags"];
  const currentTab = tabs.includes(path)
    ? path
    : excludedTabs.includes(path)
    ? false
    : "home";

  return (
    <AppBar elevation={2} color="transparent" position="static">
      <Toolbar>
        {isSizeSmall && (
          <TooltipBtn
            component="btn"
            icon={<MenuButton />}
            title="Open Sidebar"
            onClick={() => dispatch(toggleSidebar(true))}
            className={classes.menuButton}
          />
        )}
        <Tabs className={classes.tabs} value={currentTab}>
          {tabs.map((tab, i) => {
            const upperCase = tab.toUpperCase();
            return (
              <Tab
                key={tab}
                icon={isSizeSmall ? tabIcons[i] : undefined}
                value={tab}
                component={StyledLink}
                to={`/${tab}`}
                label={isSizeSmall ? null : upperCase}
              ></Tab>
            );
          })}
        </Tabs>
        <NavButtons isSizeSmall={isSizeSmall} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

interface NavButtonsProps {
  isSizeSmall: boolean;
}

const NavButtons: React.FC<NavButtonsProps> = ({ isSizeSmall }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();

  const isMenuOpen = useSelector(getIsNavBtnsMenuOpen);

  const isDarkMode = theme.palette.type === "dark";

  const btns = [
    {
      title: `Toggle ${isDarkMode ? "Light" : "Dark"} Theme`,
      onClick: () => {
        dispatch(toggleDarkModeWMessage());
      },
      component: "btn",
      icon: isDarkMode ? <Brightness7 /> : <Brightness4 />,
    },
    {
      title: "Browse Tags",
      component: "link",
      to: "tags",
      icon: <Label />,
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

  return (
    <div className={classes.navBtns}>
      {!isSizeSmall ? (
        <div>
          {(btns as TooltipBtnProps[]).map((props, i) => (
            <TooltipBtn key={i} {...props} />
          ))}
        </div>
      ) : (
        <>
          <TooltipBtn
            icon={<MenuButton />}
            title="Open Menu"
            component="btn"
            onClick={() => dispatch(toggleNavBtnsMenu(true))}
          />
          <Drawer
            anchor="right"
            open={isMenuOpen}
            onClose={() => dispatch(toggleNavBtnsMenu(false))}
          >
            <List>
              {(btns as ListActionProps[]).map((props, i) => (
                <ListAction {...props} key={i} />
              ))}
            </List>
          </Drawer>
        </>
      )}
    </div>
  );
};
