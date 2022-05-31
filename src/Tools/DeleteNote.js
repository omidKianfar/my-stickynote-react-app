import { deleteNoteDbJson } from "../JsonCrud/JsonCrud";

// Delete note from notes state
export const DeleteNote = (NoteId, { notes, setNotes }) => {
  const deleteNote = notes.filter((note) => note.id !== NoteId);
  setNotes(deleteNote);

  deleteNoteDbJson(NoteId);
};
