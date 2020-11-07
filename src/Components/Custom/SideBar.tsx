// React Imports
import React from "react";
import { useHistory } from "react-router-dom";
import useStateCallback from "../../Hooks/useStateCallback";
import { homeHashes, readableHomeHashes } from "../../Pages/Home";
import { LocationState } from "../HigherOrder/withScroll";
import StyledLink from "../Reusable/StyledLink";
import StaticImage from "../Reusable/StaticImage";

//Data
import Projects from "../../Data/Projects.json";
import Experience from "../../Data/Experience.json";
import Tags from "../../Data/Tags.json";

//Utils
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
  ListItemText,
  ListItemAvatar,
  Collapse,
  Toolbar,
  Divider,
  useMediaQuery,
} from "@material-ui/core";
import { ExpandLess } from "@material-ui/icons";

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
  listItem: {
    fontWeight: theme.typography.fontWeightBold,
  },
  nested: {
    paddingLeft: theme.spacing(3),
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
          anchor="left"
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

interface ContentsProps {}

const Contents: React.FC<ContentsProps> = ({}) => {
  const classes = useStyles();

  return (
    <>
      <Toolbar />
      <Divider />
      <List component="nav" className={classes.list}>
        <Category type="Home" />
        {imageFolders.map((folder, i) => (
          <Category key={i} type={folder} />
        ))}
        <ListLink to="/colors" name="Colors" />
        <ListLink to="/contact" name="Contact" />
      </List>
    </>
  );
};

interface ListLinkProps {
  to: string;
  name: string;
}

const ListLink: React.FC<ListLinkProps> = ({ to, name }) => {
  const classes = useStyles();

  return (
    <StyledLink className={classes.link} to={to}>
      <ListItem button>
        <ListItemText className={classes.listItem}>{name}</ListItemText>
      </ListItem>
    </StyledLink>
  );
};

interface CategoryStyleProps {
  open: boolean;
}

const useCategoryStyles = makeStyles<Theme, CategoryStyleProps>((theme) => ({
  arrow: ({ open }) => ({
    transform: open ? "rotate(0deg)" : "rotate(180deg)",
    transition: "0.5s",
  }),
  link: {
    color: "inherit",
    textDecoration: "none",
  },
}));

interface CategoryProps {
  type: ImageFolder | "Home";
}

const Category: React.FC<CategoryProps> = ({ type }) => {
  const [open, setOpen] = useStateCallback<boolean>(false);

  const classes = useCategoryStyles({
    open,
  });

  const history = useHistory<LocationState>();

  const url = `/${type.toLowerCase()}`;

  const data =
    type === "Projects" ? Projects : type === "Experience" ? Experience : Tags;

  return (
    <>
      <ListItem
        button
        onClick={() => {
          setOpen(!open, () => {
            history.push({
              pathname: url,
              state: {
                scrollToTop: true,
              },
            });
          });
        }}
      >
        <ListItemText primary={type} />
        <ExpandLess className={classes.arrow} />
      </ListItem>
      <Collapse in={open} timeout="auto">
        <List component="div" disablePadding>
          {type === "Home"
            ? homeHashes.map((hash, i) => (
                <StyledLink
                  key={i}
                  className={classes.link}
                  to="/home"
                  hash={hash}
                  withoutScrollToTop
                >
                  <ListItem button className={classes.nested}>
                    <ListItemText inset primary={readableHomeHashes[i]} />
                  </ListItem>
                </StyledLink>
              ))
            : data.map((item, i) => (
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
