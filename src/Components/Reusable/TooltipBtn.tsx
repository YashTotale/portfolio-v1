// React Imports
import React from "react";
import { Link } from "react-router-dom";

// Material UI Imports
import { Tooltip, IconButton } from "@material-ui/core";

export interface TooltipBtnProps {
  title: string;
  icon: JSX.Element;
  component: "a" | "btn" | "link";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  href?: string;
  to?: string;
  className?: string;
}

const TooltipBtn: React.FC<TooltipBtnProps> = (props) => {
  const tooltipComponent = TooltipComponent(props);
  const { title, className } = props;
  return (
    <Tooltip className={className} key={title} title={title}>
      {tooltipComponent}
    </Tooltip>
  );
};

const TooltipComponent = ({
  component,
  href,
  icon,
  onClick,
  to,
}: TooltipBtnProps) => {
  switch (component) {
    case "a": {
      return (
        <IconButton
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          {icon}
        </IconButton>
      );
    }
    case "btn": {
      return <IconButton onClick={onClick}>{icon}</IconButton>;
    }
    case "link": {
      return (
        <IconButton component={Link} to={`/${to}`}>
          {icon}
        </IconButton>
      );
    }
  }
};

export default TooltipBtn;
