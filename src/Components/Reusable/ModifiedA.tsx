import React from "react";

const ModifiedA = React.forwardRef(
  (
    props: React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    ref
  ) => <a {...props} target="_blank" rel="noopener noreferrer" />
);

export default ModifiedA;
