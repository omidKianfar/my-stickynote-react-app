export const EditNote = (Id, setEdit, notes, setEditValue) => {
  setEdit(true);

  const editNote = notes.find((note) => note.id === Id);
  setEditValue(editNote.note);
};
