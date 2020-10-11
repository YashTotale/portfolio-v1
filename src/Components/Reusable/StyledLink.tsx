// React Imports
import React from "react";
import { Link as RouterLink } from "react-router-dom";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Link as MuiLink } from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  // Styles
}));

interface StyledLinkProps {
  to: string;
  className?: string;
  color?:
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error";
}

const StyledLink: React.FC<StyledLinkProps> = ({
  to,
  children,
  color,
  className,
}) => {
  const classes = useStyles();
  return (
    <MuiLink className={className} color={color} to={to} component={RouterLink}>
      {children}
    </MuiLink>
  );
};

export default StyledLink;
