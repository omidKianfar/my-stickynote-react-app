export const UpdateNote = (notes, Id, editValue, setNotes, setEdit) => {
  const updateNote = notes.map((note) =>
    note.id === Id ? { id: Id, note: editValue } : note
  );
  setNotes(updateNote);

  setEdit(false);
};
