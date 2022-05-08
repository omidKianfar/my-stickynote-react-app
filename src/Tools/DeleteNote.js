export const DeleteNote = (Id, notes, setNotes) => {
  const deleteNote = notes.filter((note) => note.id !== Id);
  setNotes(deleteNote);
};
