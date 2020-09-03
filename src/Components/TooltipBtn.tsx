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

const TooltipBtn: React.FC<TooltipBtnProps> = ({
  title,
  icon,
  onClick,
  href,
  component,
}) => {
  return (
    <Tooltip key={title} title={title}>
      {component === "a" ? (
        <IconButton
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          {icon}
        </IconButton>
      ) : (
        <IconButton onClick={onClick}>{icon}</IconButton>
      )}
    </Tooltip>
  );
};

export default TooltipBtn;
