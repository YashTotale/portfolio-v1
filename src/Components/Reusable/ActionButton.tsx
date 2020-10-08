// React Imports
import React from "react";
import { Link } from "react-router-dom";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  // Styles
}));

interface ActionButtonProps {
  icon: JSX.Element;
  component: "a" | "btn" | "link";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  href?: string;
  to?: string;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  component,
  href,
  icon,
  onClick,
  to,
  className,
}) => {
  const classes = useStyles();
  switch (component) {
    case "a": {
      return (
        <IconButton
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          className={className}
        >
          {icon}
        </IconButton>
      );
    }
    case "btn": {
      return (
        <IconButton onClick={onClick} className={className}>
          {icon}
        </IconButton>
      );
    }
    case "link": {
      return (
        <IconButton component={Link} to={`/${to}`} className={className}>
          {icon}
        </IconButton>
      );
    }
  }
};

export default ActionButton;
