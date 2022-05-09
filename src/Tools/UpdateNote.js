import { updateNoteDbJson } from "../JsonCrud/JsonCrud";

export const UpdateNote = (
  NoteId,
  { editValue, setEdit },
  { notes, setNotes }
) => {
  const newNote = { id: NoteId, note: editValue };
  const updateNote = notes.map((note) => (note.id === NoteId ? newNote : note));
  setNotes(updateNote);

  setEdit(false);

  updateNoteDbJson(NoteId, newNote);
};
