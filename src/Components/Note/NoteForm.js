import { useContext } from "react";

import NoteContext from "../../Hooks/NoteContext";
import StickyContext from "../../Hooks/StickyContext";
import { DeleteNote } from "../../Tools/DeleteNote";
import { EditNote } from "../../Tools/EditNote";

export const NoteForm = ({ Id, childNotes }) => {
  const stikyContextProps = useContext(StickyContext);
  const noteContetxProps = useContext(NoteContext);

  return (
    <div>
      <p>{childNotes}</p>

      <div>
        <button
          onClick={() => EditNote(Id, noteContetxProps, stikyContextProps)}
        >
          Edit
        </button>
        <button onClick={() => DeleteNote(Id, stikyContextProps)}>
          Delete
        </button>
      </div>
    </div>
  );
};
