import { useContext } from "react";

import StikyContetxt from "../Hooks/StickyContext";
import { AddNote } from "../Tools/AddNote";
import Note from "./Note/Note";

const Main = () => {
  const stikyContextProps = useContext(StikyContetxt);
  const { notes, inputNote, setInputNote } = stikyContextProps;

  return (
    <main>
      <input
        type="text"
        value={inputNote}
        onChange={(e) => setInputNote(e.target.value)}
      />
      <button onClick={() => AddNote(stikyContextProps)}>Add Note</button>

      {notes.map((note) => (
        <Note key={note.id} childNotes={note.note} Id={note.id} />
      ))}
    </main>
  );
};

export default Main;
