// React Imports
import React from "react";
import ActionButton from "./ActionButton";

// Material UI Imports
import { Tooltip } from "@material-ui/core";

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
  const tooltipComponent = ActionButton(props) as React.ReactElement<any, any>;
  const { title, className } = props;
  return (
    <Tooltip className={className} key={title} title={title}>
      {tooltipComponent}
    </Tooltip>
  );
};

export default TooltipBtn;
