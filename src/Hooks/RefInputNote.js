import { useRef, useEffect } from "react";

export const RefInputNote = (inputNote) => {
  const refInputNote = useRef();
  useEffect(() => {
    if (!inputNote) refInputNote.current.focus();
  }, [inputNote]);

  return refInputNote;
};
