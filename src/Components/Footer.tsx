// React Imports
import React from "react";
import TooltipBtn, { TooltipBtnProps } from "./TooltipBtn";
import {
  LINKEDIN_URL,
  GITHUB_URL,
  EMAIL_URL,
  FOOTER_HEIGHT,
} from "../Utils/constants";

// Redux Imports

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { LinkedIn, GitHub, Email } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: 0,
    top: "auto",
    width: "100%",
    height: FOOTER_HEIGHT,
  },
  footerDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  footerBtns: {
    display: "flex",
    justifyContent: "center",
  },
  copyright: {
    marginBottom: "10px",
  },
}));

const Footer: React.FC = (props) => {
  const classes = useStyles();

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
      position="absolute"
      color="transparent"
      className={classes.footer}
    >
      <Toolbar>
        <div className={classes.footerDiv}>
          <div className={classes.footerBtns}>
            {footerBtns.map((props, i) => (
              <TooltipBtn key={i} {...props} />
            ))}
          </div>
          <Typography className={classes.copyright} variant="body2">
            © {new Date().getFullYear()} Yash Totale
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
