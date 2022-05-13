import { useEffect } from "react";

export const RandomNote = ({ setNoteStyle }) => {
  // Random note position
  const randomBetweenNote = (x, y) => {
    return x + Math.ceil(Math.random() * (y - x));
  };
  //  Set random position im style evry add note
  useEffect(() => {
    setNoteStyle({
      left: randomBetweenNote(0, window.innerWidth - 200) + "px",
      top: randomBetweenNote(0, window.innerHeight - 200) + "px",
    });
  }, []);
};
