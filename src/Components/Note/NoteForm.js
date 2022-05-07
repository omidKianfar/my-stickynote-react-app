export const NoteForm = ({ setEdit, childNotes }) => {
  return (
    <div>
      <p>{childNotes}</p>
      <div>
        <button onClick={() => setEdit(true)}>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
