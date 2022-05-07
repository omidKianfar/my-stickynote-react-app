export const NoteForm = ({ editNote, childNotes, deleteNote }) => {
  return (
    <div>
      <p>{childNotes}</p>
      <div>
        <button onClick={() => editNote()}>Edit</button>
        <button onClick={() => deleteNote()}>Delete</button>
      </div>
    </div>
  );
};
