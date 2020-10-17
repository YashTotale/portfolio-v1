import React from "react";

const ModifiedA: React.FC<React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>> = (props) => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

export default ModifiedA;
