import { useState } from "react";

import { NoteForm } from "./NoteForm";
import { EditNote } from "./EditNote";

const Note = ({ childNotes, Id, notes, setNotes }) => {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState("");

  const deleteNote = () => {
    const deleteNote = notes.filter((note) => note.id !== Id);
    setNotes(deleteNote);
  };

  const editNote = () => {
    setEdit(true);

    const editNote = notes.find((note) => note.id === Id);
    setEditValue(editNote.note);
  };

  const updateNote = () => {
    const updateNote = notes.map((note) =>
      note.id === Id ? { id: Id, note: editValue } : note
    );
    setNotes(updateNote);

    setEdit(false);
  };

  return (
    <div>
      {!edit ? (
        <NoteForm
          childNotes={childNotes}
          editNote={editNote}
          deleteNote={deleteNote}
        />
      ) : (
        <EditNote
          setEdit={setEdit}
          editValue={editValue}
          updateNote={updateNote}
          setEditValue={setEditValue}
        />
      )}
    </div>
  );
};

export default Note;
