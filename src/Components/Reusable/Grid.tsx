// React Imports
import React, { FC } from "react";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import {} from "@material-ui/icons";
import { BreakpointValues } from "@material-ui/core/styles/createBreakpoints";

interface StyleProps extends BreakpointValues {}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: ({ xl, lg, md, sm, xs }) => ({
    display: "grid",
    [theme.breakpoints.down("xl")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(${xl}px, 1fr))`,
    },
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(${lg}px, 1fr))`,
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(${md}px, 1fr))`,
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(${sm}px, 1fr))`,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(${xs}px, 1fr))`,
    },
  }),
}));

interface GridProps extends BreakpointValues {
  className?: string;
}

const Grid: FC<
  GridProps &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
> = (props) => {
  const { xs, sm, md, lg, xl, className, children } = props;
  const classes = useStyles({ xs, sm, md, lg, xl });
  return (
    <div {...props} className={`${classes.root} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
