import { UpdateNote } from "../../Tools/UpdateNote";

export const EditNote = ({
  editValue,
  setEditValue,
  notes,
  Id,
  setNotes,
  setEdit,
}) => {
  return (
    <div>
      <textarea
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        cols="25"
        rows="5"
      />
      <div>
        <button
          onClick={() => UpdateNote(notes, Id, editValue, setNotes, setEdit)}
        >
          Save
        </button>
        <button onClick={() => setEdit(false)}>Close</button>
      </div>
    </div>
  );
};
