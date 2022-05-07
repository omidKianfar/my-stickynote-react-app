import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Note from "./Note/Note";

const Main = () => {
  const [notes, setNotes] = useState([]);
  const [inputNote, setInputNote] = useState("");

  const addNote = (e) => {
    setNotes([...notes, { id: uuidv4(), note: inputNote }]);
    setInputNote("");
  };

  return (
    <main>
      <input
        type="text"
        value={inputNote}
        onChange={(e) => setInputNote(e.target.value)}
      />
      <button onClick={(e) => addNote(e)}>Add Note</button>
      {notes.map((note) => (
        <Note key={note.id} childNotes={note.note} />
      ))}
    </main>
  );
};

export default Main;
