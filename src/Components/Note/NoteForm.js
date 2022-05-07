export const NoteForm = ({ setEdit, childNotes, deleteNote }) => {
  return (
    <div>
      <p>{childNotes}</p>
      <div>
        <button onClick={() => setEdit(true)}>Edit</button>
        <button onClick={() => deleteNote()}>Delete</button>
      </div>
    </div>
  );
};
