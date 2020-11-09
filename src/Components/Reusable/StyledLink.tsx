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

const StyledLink: React.FC<StyledLinkProps> = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<StyledLinkProps>
>(({ to, hash, children, color, onClick, className, noScrollToTop }, ref) => {
  const attrs = {
    onClick: onClick,
    className: className,
    color: color,
    to: {
      pathname: to,
      state: { scrollToTop: !noScrollToTop },
      hash: hash,
    },
    ref: ref,
  };

  return color ? (
    <MuiLink {...attrs} component={RouterLink}>
      {children}
    </MuiLink>
  ) : (
    <RouterLink {...attrs}>{children}</RouterLink>
  );
});

export default StyledLink;
