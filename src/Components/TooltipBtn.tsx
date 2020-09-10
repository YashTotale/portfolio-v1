// React Imports
import React from "react";
import { Link } from "react-router-dom";
import ModifiedA from "./ModifiedA";

// Material UI Imports
import { Tooltip, IconButton } from "@material-ui/core";

export interface TooltipBtnProps {
  title: string;
  icon: JSX.Element;
  component: "a" | "btn" | "link";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  href?: string;
  to?: string;
}

const TooltipBtn: React.FC<TooltipBtnProps> = (props) => {
  const { title } = props;
  const tooltipComponent = TooltipComponent(props);
  return (
    <Tooltip key={title} title={title}>
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
        <IconButton component={ModifiedA} href={href}>
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
