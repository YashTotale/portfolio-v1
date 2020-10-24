// React Imports
import React from "react";
import Projects from "../../Data/Projects.json";
import Experience from "../../Data/Experience.json";
import Tags from "../../Data/Tags.json";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../Redux/actions";
import { getIsSidebarOpen } from "../../Redux/selectors";

// Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Drawer, IconButton, useMediaQuery } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({}));

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector(getIsSidebarOpen);

  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(false);

  return isSmall ? (
    <Drawer
      variant="temporary"
      anchor="left"
      open={isSidebarOpen}
      onClose={() => dispatch(toggleSidebar(false))}
    ></Drawer>
  ) : (
    <Drawer variant="permanent" open></Drawer>
  );
};

export default SideBar;
