import { useState } from "react";

import { AddNote } from "../Tools/AddNote";

import Note from "./Note/Note";

const Main = () => {
  const [notes, setNotes] = useState([]);
  const [inputNote, setInputNote] = useState("");

  return (
    <main>
      <input
        type="text"
        value={inputNote}
        onChange={(e) => setInputNote(e.target.value)}
      />
      <button onClick={() => AddNote(notes, setNotes, inputNote, setInputNote)}>
        Add Note
      </button>

      {notes.map((note) => (
        <Note
          key={note.id}
          childNotes={note.note}
          Id={note.id}
          notes={notes}
          setNotes={setNotes}
        />
      ))}
    </main>
  );
};

export default Main;
