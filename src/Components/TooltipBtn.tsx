// React Imports
import React from "react";

// Material UI Imports
// import { makeStyles } from "@material-ui/core/styles";
import { Tooltip, IconButton, IconButtonProps } from "@material-ui/core";
import {} from "@material-ui/icons";

// const useStyles = makeStyles((theme) => ({}));

interface NavButtonProps {
  title: string;
  icon: IconButtonProps;
  component: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  href?: string;
}

const TooltipBtn: React.FC<NavButtonProps> = ({
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
