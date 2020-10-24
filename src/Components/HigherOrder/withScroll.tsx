// React Imports
import React from "react";
import { useLocation } from "react-router-dom";

export interface LocationState {
  scrollToTop: boolean;
}

const withScroll = (Component: React.FC): React.FC => ({ ...props }) => {
  const { state } = useLocation<LocationState>();

  if (state?.scrollToTop) {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }

  return <Component {...props} />;
};

export default withScroll;
