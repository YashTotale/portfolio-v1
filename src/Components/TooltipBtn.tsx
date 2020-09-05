// React Imports
import React from "react";

// Material UI Imports
// import { makeStyles } from "@material-ui/core/styles";
import { Tooltip, IconButton } from "@material-ui/core";
import {} from "@material-ui/icons";

// const useStyles = makeStyles((theme) => ({}));

export interface TooltipBtnProps {
  title: string;
  icon: JSX.Element;
  component: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  href?: string;
}

const TooltipBtn: React.FC<TooltipBtnProps> = (props) => {
  const { title } = props;
  const tooltipComponent = <TooltipComponent {...props} />;
  return (
    <Tooltip key={title} title={title}>
      {tooltipComponent}
    </Tooltip>
  );
};

const TooltipComponent: React.FC<TooltipBtnProps> = ({
  component,
  href,
  icon,
  onClick,
}) => {
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
    default: {
      return null;
    }
  }
};

export default TooltipBtn;
