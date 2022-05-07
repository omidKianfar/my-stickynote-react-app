import { useState } from "react";

import { NoteForm } from "./NoteForm";
import { EditNote } from "./EditNote";

const Note = () => {
  const [edit, setEdit] = useState(false);

  return <div>{!edit ? <NoteForm setEdit={setEdit} /> : <EditNote />}</div>;
};

export default Note;
