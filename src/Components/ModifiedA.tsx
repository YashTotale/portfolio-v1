import React from "react";

const ModifiedA: React.FC<React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>> = (props) => {
  return <a {...props} target="_blank" rel="noopener noreferrer"></a>;
};

export default ModifiedA;
