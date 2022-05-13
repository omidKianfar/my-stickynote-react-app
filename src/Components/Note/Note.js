import { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";

import Styles from "../Sass/Note.module.scss";

import NoteContext from "../../Hooks/NoteContext";
import { NoteForm } from "./NoteForm/NoteForm";
import { EditNote } from "./EditForm/EditForm";
import { RandomNote } from "../../Tools/RandomNote";

const Note = ({ childNotes, NoteId }) => {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [noteStyle, setNoteStyle] = useState(null);

  // Random note position
  RandomNote({ setNoteStyle });

  return (
    <NoteContext.Provider value={{ edit, setEdit, editValue, setEditValue }}>
      {/* show note or edit note */}
      <Draggable>
        <div className={Styles.note} style={noteStyle}>
          {!edit ? (
            <NoteForm NoteId={NoteId} childNotes={childNotes} />
          ) : (
            <EditNote NoteId={NoteId} />
          )}
        </div>
      </Draggable>
    </NoteContext.Provider>
  );
};

export default Note;
