//React Imports
import React from "react";
import { alternativeFont } from "../../Theme";
import TooltipBtn, { TooltipBtnProps } from "../Reusable/TooltipBtn";
import { SOURCE_CODE } from "../../Utils/links";

//Redux Imports
import { useSelector, useDispatch } from "react-redux";
import {} from "../../Redux/selectors";
import { toggleDarkModeWMessage } from "../../Redux/thunks";
import { toggleSidebar } from "../../Redux/actions";

//Material UI Imports
import { makeStyles, Theme, fade } from "@material-ui/core/styles";
import {
  Brightness7,
  Brightness4,
  GitHub,
  Menu as MenuButton,
  Search as SearchIcon,
} from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  Input,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {},
  menuButton: {
    marginRight: 10,
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  root: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
    //Margin
    marginRight: theme.spacing(1),
    marginLeft: "auto",
    //Background
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  search: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: 170,
      "&:focus": {
        width: 220,
      },
    },
    [theme.breakpoints.up("md")]: {
      width: 220,
      "&:focus": {
        width: 250,
      },
    },
    [theme.breakpoints.up("lg")]: {
      width: 250,
      "&:focus": {
        width: 280,
      },
    },
    padding: theme.spacing(1, 1, 1, 7),
    fontFamily: alternativeFont,
    transition: theme.transitions.create("width"),
  },
}));

const NavBar: React.FC = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const theme = useTheme();

  const isSizeSmall = useMediaQuery(theme.breakpoints.down("md"));

  const isDarkMode = theme.palette.type === "dark";

  const btns: TooltipBtnProps[] = [
    {
      title: `Toggle ${isDarkMode ? "Light" : "Dark"} Theme`,
      onClick: () => {
        dispatch(toggleDarkModeWMessage());
      },
      component: "btn",
      icon: isDarkMode ? <Brightness7 /> : <Brightness4 />,
    },
    {
      title: "GitHub Repository",
      icon: <GitHub />,
      component: "a",
      href: SOURCE_CODE,
    },
  ];

  return (
    <AppBar elevation={2} color="transparent" position="static">
      <Toolbar className={classes.toolbar}>
        {isSizeSmall && (
          <TooltipBtn
            size={isSizeSmall ? "small" : "medium"}
            component="btn"
            icon={<MenuButton />}
            title="Open Sidebar"
            onClick={() => dispatch(toggleSidebar(true))}
            className={classes.menuButton}
          />
        )}
        <div className={classes.root}>
          <div className={classes.search}>
            <SearchIcon />
          </div>
          <Input
            disableUnderline
            placeholder="Search..."
            inputProps={{
              "aria-label": "Search...",
            }}
            type="search"
            // inputRef={inputRef}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
        {btns.map((btn, i) => (
          <TooltipBtn key={i} {...btn} />
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
