import React, { useState, useRef, useEffect } from "react";

const useStateCallback = <T>(
  initialState: T
): [T, (state: T, cb: (state: T) => any) => any] => {
  const [state, setState] = useState(initialState);
  const cbRef = useRef<null | ((state: T) => any)>(null); // mutable ref to store current callback

  const setStateCallback = (state: T, cb: (state: T) => any) => {
    cbRef.current = cb; // store passed callback to ref
    setState(state);
  };

  useEffect(() => {
    // cb.current is `null` on initial render, so we only execute cb on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
};

export default useStateCallback;
