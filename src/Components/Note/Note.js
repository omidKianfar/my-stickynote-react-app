import { useState } from "react";

import { NoteForm } from "./NoteForm";
import { EditNote } from "./EditNote";

const Note = ({ childNotes }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div>
      {!edit ? (
        <NoteForm setEdit={setEdit} childNotes={childNotes} />
      ) : (
        <EditNote setEdit={setEdit} />
      )}
    </div>
  );
};

export default Note;
