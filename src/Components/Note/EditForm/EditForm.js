import { useContext } from "react";

import Styles from "../../Sass/EditForm.module.scss";

import StickyContext from "../../../Hooks/StickyContext";
import NoteContext from "../../../Hooks/NoteContext";
import { UpdateNote } from "../../../Tools/UpdateNote";

export const EditNote = ({ NoteId }) => {
  const stikyContextProps = useContext(StickyContext);

  const noteContetxProps = useContext(NoteContext);
  const { editValue, setEditValue, setEdit } = noteContetxProps;

  return (
    <div className={Styles.editForm}>
      <textarea
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
      />

      <section>
        <button
          className={Styles.saveBtn}
          onClick={() =>
            UpdateNote(NoteId, noteContetxProps, stikyContextProps)
          }
        >
          Save
        </button>
        <button className={Styles.closeBtn} onClick={() => setEdit(false)}>
          Close
        </button>
      </section>
    </div>
  );
};
