import { useState } from "react";

import { NoteForm } from "./NoteForm";
import { EditNote } from "./EditNote";

const Note = ({ childNotes, Id, notes, setNotes }) => {
  const [edit, setEdit] = useState(false);

  const deleteNote = () => {
    const deleteNote = notes.filter((note) => note.id !== Id);
    setNotes(deleteNote);
  };

  return (
    <div>
      {!edit ? (
        <NoteForm
          setEdit={setEdit}
          childNotes={childNotes}
          deleteNote={deleteNote}
        />
      ) : (
        <EditNote setEdit={setEdit} />
      )}
    </div>
  );
};

export default Note;
