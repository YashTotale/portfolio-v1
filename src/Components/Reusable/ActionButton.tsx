// React Imports
import React from "react";
import StyledLink from "./StyledLink";
import ModifiedA from "./ModifiedA";

// Material UI Imports
import { IconButton } from "@material-ui/core";
import {} from "@material-ui/icons";

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
  switch (component) {
    case "a": {
      return (
        <IconButton component={ModifiedA} href={href} className={className}>
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
        <IconButton component={StyledLink} to={`/${to}`} className={className}>
          {icon}
        </IconButton>
      );
    }
  }
};

export default ActionButton;
