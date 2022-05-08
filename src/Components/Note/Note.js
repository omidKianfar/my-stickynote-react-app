import { useState } from "react";

import NoteContext from "../../Hooks/NoteContext";

import { NoteForm } from "./NoteForm";
import { EditNote } from "./EditForm";

const Note = ({ childNotes, Id }) => {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState("");

  return (
    <NoteContext.Provider value={{ edit, setEdit, editValue, setEditValue }}>
      <div>
        {!edit ? (
          <NoteForm Id={Id} childNotes={childNotes} />
        ) : (
          <EditNote Id={Id} />
        )}
      </div>
    </NoteContext.Provider>
  );
};

export default Note;
