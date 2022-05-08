export const UpdateNote = (Id, { editValue, setEdit }, { notes, setNotes }) => {
  const updateNote = notes.map((note) =>
    note.id === Id ? { id: Id, note: editValue } : note
  );
  setNotes(updateNote);

  setEdit(false);
};
