import { DeleteNote } from "../../Tools/DeleteNote";
import { EditNote } from "../../Tools/EditNote";

export const NoteForm = ({
  Id,
  setEdit,
  notes,
  setNotes,
  setEditValue,
  childNotes,
}) => {
  return (
    <div>
      <p>{childNotes}</p>
      <div>
        <button onClick={() => EditNote(Id, setEdit, notes, setEditValue)}>
          Edit
        </button>
        <button onClick={() => DeleteNote(Id, notes, setNotes)}>Delete</button>
      </div>
    </div>
  );
};
