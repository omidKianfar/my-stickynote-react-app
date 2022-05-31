import { useContext, useEffect, useState } from "react";

import Styles from "../Sass/Main.module.scss";

import { RefInputNote } from "../../Hooks/RefInputNote";
import StikyContetxt from "../../Hooks/StickyContext";
import { AddNote } from "../../Tools/AddNote";
import { GetData } from "../../Tools/GetData";
import NoteList from "../Note/NoteList/NoteList";

const Main = () => {
  const stikyContextProps = useContext(StikyContetxt);
  const { setNotes, inputNote, setInputNote, loading } = stikyContextProps;

  // default focus on inputNote with ref
  const refInputNote = RefInputNote(inputNote);

  // fetch data on db.json
  GetData(loading, setNotes);

  return (
    <main className={Styles.main}>
      <form
        className={Styles.form}
        action=""
        onSubmit={(e) => AddNote(e, stikyContextProps)}
      >
        <input
          type="text"
          value={inputNote}
          onChange={(e) => setInputNote(e.target.value)}
          ref={refInputNote}
        />
        <button type="submit">Add Note</button>
      </form>

      <section>
        <NoteList />
      </section>
    </main>
  );
};

export default Main;
