// React Imports
import React from "react";
import { Link } from "react-router-dom";

// Material UI Imports
// import { makeStyles } from "@material-ui/core/styles";
import { Tooltip, IconButton } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({}));

export interface TooltipBtnProps {
  title: string;
  icon: JSX.Element;
  component: string;
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
    default: {
      return <div></div>;
    }
  }
};

export default TooltipBtn;
