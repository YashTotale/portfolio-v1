// React Imports
import React from "react";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  // Styles
}));

export interface ListActionProps {
  component: "a" | "btn" | "link";
  icon: JSX.Element;
  title: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  to?: string;
  className?: string;
}

const ListAction: React.FC<ListActionProps> = (props) => {
  const classes = useStyles();

  return (
    <ListItemComponent
      {...props}
      children={
        <>
          <ListItemIcon>{props.icon}</ListItemIcon>
          <ListItemText primary={props.title} />
        </>
      }
    />
  );
};

const ListItemComponent: React.FC<ListActionProps> = ({
  component,
  children,
  to,
  onClick,
  href,
  className,
}) => {
  switch (component) {
    case "a": {
      return (
        <ListItem
          children={children}
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          className={className}
          button
        />
      );
    }
    case "btn": {
      return (
        <ListItem
          children={children}
          onClick={onClick}
          className={className}
          button
        />
      );
    }
    case "link": {
      return (
        <ListItem
          children={children}
          component={Link}
          to={`/${to}`}
          className={className}
          button
        />
      );
    }
  }
};

export default ListAction;
