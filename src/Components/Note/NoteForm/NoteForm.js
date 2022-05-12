import { useContext } from "react";

import Styles from "../../Sass/NoteForm.module.scss";

import NoteContext from "../../../Hooks/NoteContext";
import StickyContext from "../../../Hooks/StickyContext";
import { DeleteNote } from "../../../Tools/DeleteNote";
import { EditNote } from "../../../Tools/EditNote";

export const NoteForm = ({ NoteId, childNotes }) => {
  const stikyContextProps = useContext(StickyContext);
  const noteContetxProps = useContext(NoteContext);

  return (
    <div className={Styles.noteForm}>
      <p>{childNotes}</p>

      <section>
        <button
          className={Styles.editBtn}
          onClick={() => EditNote(NoteId, noteContetxProps, stikyContextProps)}
        >
          Edit
        </button>
        <button
          className={Styles.deleteBtn}
          onClick={() => DeleteNote(NoteId, stikyContextProps)}
        >
          Delete
        </button>
      </section>
    </div>
  );
};
