import { useState } from "react";

import { NoteForm } from "./NoteForm";
import { EditNote } from "./EditForm";

const Note = ({ childNotes, Id, notes, setNotes }) => {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState("");

  return (
    <div>
      {!edit ? (
        <NoteForm
          Id={Id}
          setEdit={setEdit}
          notes={notes}
          setNotes={setNotes}
          setEditValue={setEditValue}
          childNotes={childNotes}
        />
      ) : (
        <EditNote
          editValue={editValue}
          setEditValue={setEditValue}
          notes={notes}
          Id={Id}
          setNotes={setNotes}
          setEdit={setEdit}
        />
      )}
    </div>
  );
};

export default Note;
