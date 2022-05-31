import { useRef, useEffect } from "react";

// default focus on inputNote with ref
export const RefInputNote = (inputNote) => {
  const refInputNote = useRef();
  useEffect(() => {
    if (!inputNote) refInputNote.current.focus();
  }, [inputNote]);

  return refInputNote;
};
