import { useContext } from "react";

import NoteContext from "../../Hooks/NoteContext";
import StickyContext from "../../Hooks/StickyContext";
import { UpdateNote } from "../../Tools/UpdateNote";

export const EditNote = ({ Id }) => {
  const stikyContextProps = useContext(StickyContext);
  const noteContetxProps = useContext(NoteContext);
  const { editValue, setEditValue, setEdit } = noteContetxProps;

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
          onClick={() => UpdateNote(Id, noteContetxProps, stikyContextProps)}
        >
          Save
        </button>
        <button onClick={() => setEdit(false)}>Close</button>
      </div>
    </div>
  );
};
