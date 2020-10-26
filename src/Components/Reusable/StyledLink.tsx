// React Imports
import React, { forwardRef, PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";

// Material UI Imports
// import { makeStyles } from "@material-ui/core/styles";
import { Link as MuiLink } from "@material-ui/core";
import {} from "@material-ui/icons";

// const useStyles = makeStyles((theme) => ({}));

interface StyledLinkProps {
  to: string;
  hash?: string;
  className?: string;
  onClick?: () => any;
  withoutScrollToTop?: boolean;
  color?:
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error";
}

const StyledLink = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<StyledLinkProps>
>((props, ref) => {
  const {
    to,
    hash,
    children,
    color,
    onClick,
    className,
    withoutScrollToTop,
  } = props;

  const attrs = {
    onClick: onClick,
    className: className,
    color: color,
    to: {
      pathname: to,
      state: { scrollToTop: !withoutScrollToTop },
      hash: hash,
    },
    ref: ref,
  };

  return color ? (
    <MuiLink {...props} {...attrs} component={RouterLink}>
      {children}
    </MuiLink>
  ) : (
    <RouterLink {...props} {...attrs}>
      {children}
    </RouterLink>
  );
});

export default StyledLink;
