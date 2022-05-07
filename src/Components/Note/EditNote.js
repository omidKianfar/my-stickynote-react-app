export const EditNote = ({ setEdit, editValue }) => {
  return (
    <div>
      <textarea value={editValue.note} cols="25" rows="5" />
      <div>
        <button>Save</button>
        <button onClick={() => setEdit(false)}>Close</button>
      </div>
    </div>
  );
};
