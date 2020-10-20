import React, {
  forwardRef,
  FC,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
} from "react";

//@ts-ignore
const ModifiedA: FC<DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>> = forwardRef<
  HTMLAnchorElement,
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>((props, ref) => {
  return (
    <a {...props} ref={ref} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
});

export default ModifiedA;
