// React Imports
import React, { useEffect, useState } from "react";
import useStateCallback from "../../Hooks/useStateCallback";
import { useHistory } from "react-router-dom";
import StyledLink from "../Reusable/StyledLink";
import StaticImage from "../Reusable/StaticImage";
import Projects from "../../Data/Projects.json";
import Experience from "../../Data/Experience.json";
import Tags from "../../Data/Tags.json";
import { ImageFolder, imageFolders } from "../../Utils/types";
import { SIDEBAR_WIDTH } from "../../Utils/constants";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../Redux/actions";
import { getIsSidebarOpen } from "../../Redux/selectors";

// Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Collapse,
  Toolbar,
  Divider,
  useMediaQuery,
} from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: SIDEBAR_WIDTH,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: SIDEBAR_WIDTH,
  },
  list: {
    width: SIDEBAR_WIDTH,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
}));

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector(getIsSidebarOpen);

  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return (
    <nav className={classes.drawer}>
      {isSmall ? (
        <Drawer
          variant="temporary"
          anchor="left"
          open={isSidebarOpen}
          onClose={() => dispatch(toggleSidebar(false))}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Contents />
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Contents />
        </Drawer>
      )}
    </nav>
  );
};

const Contents: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar />
      <Divider />
      <List component="nav" className={classes.list}>
        {imageFolders.map((folder, i) => (
          <Category key={i} type={folder} />
        ))}
      </List>
    </>
  );
};

interface CategoryProps {
  type: ImageFolder;
}

const Category: React.FC<CategoryProps> = ({ type }) => {
  const history = useHistory();

  const [open, setOpen] = useStateCallback<boolean>(false);

  const url = `/${type.toLowerCase()}`;

  const data = type === "Projects" ? Projects : Tags;

  return (
    <>
      <ListItem
        button
        onClick={() =>
          setOpen(!open, () => {
            history.push(url);
          })
        }
      >
        <ListItemText primary={type} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data.map((item, i) => (
            <Item key={i} baseURL={url} type={type} {...item} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

interface ItemProps {
  icons: string[];
  baseURL: string;
  url: string;
  type: ImageFolder;
  name: string;
}

const Item: React.FC<ItemProps> = (props) => {
  const classes = useStyles();

  return (
    <StyledLink className={classes.link} to={`${props.baseURL}/${props.url}`}>
      <ListItem button className={classes.nested}>
        <ListItemAvatar>
          <StaticImage avatar {...props} />
        </ListItemAvatar>
        <ListItemText primary={props.name} />
      </ListItem>
    </StyledLink>
  );
};

export default SideBar;
