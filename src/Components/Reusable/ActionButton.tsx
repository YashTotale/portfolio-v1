// React Imports
import React from "react";
import StyledLink from "./StyledLink";

// Material UI Imports
import { IconButton } from "@material-ui/core";
import {} from "@material-ui/icons";

interface ActionButtonProps {
  icon: JSX.Element;
  size?: "medium" | "small";
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
  size,
  className,
}) => {
  switch (component) {
    case "a": {
      return (
        <IconButton
          size={size}
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
        <IconButton size={size} onClick={onClick} className={className}>
          {icon}
        </IconButton>
      );
    }
    case "link": {
      return (
        <IconButton
          size={size}
          component={StyledLink}
          to={`/${to}`}
          className={className}
        >
          {icon}
        </IconButton>
      );
    }
  }
};

export default ActionButton;
