import { useContext } from "react";

import StikyContetxt from "../../../Hooks/StickyContext";
import Note from "../Note";

const NoteList = () => {
  const { notes } = useContext(StikyContetxt);

  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} childNotes={note.note} NoteId={note.id} />
      ))}
    </div>
  );
};

export default NoteList;
