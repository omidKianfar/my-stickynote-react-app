export const EditNote = (Id, { setEdit, setEditValue }, { notes }) => {
  setEdit(true);

  const editNote = notes.find((note) => note.id === Id);
  setEditValue(editNote.note);
};
