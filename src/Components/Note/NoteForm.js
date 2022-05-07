export const NoteForm = ({ setEdit }) => {
  return (
    <div>
      <p>Note</p>
      <button onClick={() => setEdit(true)}>Edit</button>
      <button>Delete</button>
    </div>
  );
};
