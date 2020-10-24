// React Imports
import React, { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";

// Material UI Imports
// import { makeStyles } from "@material-ui/core/styles";
import { Link as MuiLink } from "@material-ui/core";
import {} from "@material-ui/icons";

// const useStyles = makeStyles((theme) => ({}));

interface StyledLinkProps {
  to: string;
  className?: string;
  onClick?: () => any;
  color?:
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error";
}

const StyledLink: React.FC<StyledLinkProps> = forwardRef<
  HTMLAnchorElement,
  StyledLinkProps
>((props, ref) => {
  const { to, children, color, onClick, className } = props;

  return color ? (
    <MuiLink
      {...props}
      onClick={onClick}
      className={className}
      color={color}
      to={{ pathname: to, state: { scrollToTop: true } }}
      component={RouterLink}
      ref={ref}
    >
      {children}
    </MuiLink>
  ) : (
    <RouterLink
      {...props}
      onClick={onClick}
      to={{
        pathname: to,
        state: {
          scrollToTop: true,
        },
      }}
      className={className}
      ref={ref}
    >
      {children}
    </RouterLink>
  );
});

export default StyledLink;
