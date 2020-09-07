// React Imports
import React from "react";
import TooltipBtn, { TooltipBtnProps } from "./TooltipBtn";
import { LINKEDIN_URL, GITHUB_URL, EMAIL_URL } from "../Utils/constants";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { LinkedIn, GitHub, Email } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "auto",
  },
  footerBtns: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
}));

const Footer: React.FC = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const footerBtns: TooltipBtnProps[] = [
    {
      title: "LinkedIn",
      icon: <LinkedIn />,
      component: "a",
      href: LINKEDIN_URL,
    },
    {
      title: "GitHub",
      icon: <GitHub />,
      component: "a",
      href: GITHUB_URL,
    },
    {
      title: "Email",
      icon: <Email />,
      component: "a",
      href: EMAIL_URL,
    },
  ];

  return (
    <AppBar
      elevation={2}
      position="relative"
      color="transparent"
      className={classes.footer}
    >
      <Toolbar>
        <div className={classes.footerBtns}>
          {footerBtns.map((props) => (
            <TooltipBtn {...props} />
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
