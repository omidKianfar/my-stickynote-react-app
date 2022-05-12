import { useContext } from "react";

import Styles from "../Sass/Main.module.scss";

import { RefInputNote } from "../../Hooks/RefInputNote";
import StikyContetxt from "../../Hooks/StickyContext";
import { AddNote } from "../../Tools/AddNote";
import { GetData } from "../../Tools/GetData";
import Note from "../Note/Note";

const Main = () => {
  const stikyContextProps = useContext(StikyContetxt);
  const { notes, setNotes, inputNote, setInputNote, loading } =
    stikyContextProps;

  // default focus on inputNote with ref
  const refInputNote = RefInputNote(inputNote);

  // fetch data on db.json
  GetData(loading, setNotes);

  return (
    <main className={Styles.main}>
      <form action="" onSubmit={(e) => AddNote(e, stikyContextProps)}>
        <input
          type="text"
          value={inputNote}
          onChange={(e) => setInputNote(e.target.value)}
          ref={refInputNote}
        />
        <button type="submit">Add Note</button>
      </form>

      {notes.map((note) => (
        <Note key={note.id} childNotes={note.note} NoteId={note.id} />
      ))}
    </main>
  );
};

export default Main;
