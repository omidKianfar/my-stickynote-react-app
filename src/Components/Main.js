import { useContext } from "react";
import { RefInputNote } from "../Hooks/RefInputNote";

import StikyContetxt from "../Hooks/StickyContext";
import { AddNote } from "../Tools/AddNote";
import { GetData } from "../Tools/GetData";
import Note from "./Note/Note";

const Main = () => {
  const stikyContextProps = useContext(StikyContetxt);
  const { notes, setNotes, inputNote, setInputNote, loading } =
    stikyContextProps;

  const refInputNote = RefInputNote(inputNote);

  GetData(loading, setNotes);

  return (
    <main>
      <input
        type="text"
        value={inputNote}
        onChange={(e) => setInputNote(e.target.value)}
        ref={refInputNote}
      />
      <button onClick={() => AddNote(stikyContextProps)}>+</button>

      {notes.map((note) => (
        <Note key={note.id} childNotes={note.note} NoteId={note.id} />
      ))}
    </main>
  );
};

export default Main;
