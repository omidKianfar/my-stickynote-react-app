import axios from "axios";

// fetch note data from db.json into inputNote
export const EditNote = (NoteId, { setEdit, setEditValue }, { notes }) => {
  setEdit(true);

  const editNote = notes.find((note) => note.id === NoteId);
  setEditValue(editNote.note);
};
