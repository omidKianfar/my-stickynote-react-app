export const EditNote = ({ editValue, setEditValue, updateNote, setEdit }) => {
  return (
    <div>
      <textarea
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        cols="25"
        rows="5"
      />
      <div>
        <button onClick={() => updateNote()}>Save</button>
        <button onClick={() => setEdit(false)}>Close</button>
      </div>
    </div>
  );
};
