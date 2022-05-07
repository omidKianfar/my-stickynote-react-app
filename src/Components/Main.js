import React, { useState } from "react";

import Note from "./Note/Note";

const Main = () => {
  const [notes, setNotes] = useState([
    { id: 1, note: "first" },
    { id: 2, note: "second" },
    { id: 3, note: "third" },
  ]);

  return (
    <main>
      {notes.map((note) => (
        <Note key={note.id} childNotes={note.note} />
      ))}
    </main>
  );
};

export default Main;
