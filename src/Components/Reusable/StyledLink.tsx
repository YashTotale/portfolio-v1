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
  noScrollToTop?: boolean;
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
  const { to, hash, children, color, noScrollToTop } = props;

  return color ? (
    <MuiLink {...props} ref={ref} component={RouterLink}>
      {children}
    </MuiLink>
  ) : (
    <RouterLink
      {...props}
      to={{
        pathname: to,
        state: { scrollToTop: !noScrollToTop },
        hash: hash,
      }}
      ref={ref}
    >
      {children}
    </RouterLink>
  );
});

export default StyledLink;
