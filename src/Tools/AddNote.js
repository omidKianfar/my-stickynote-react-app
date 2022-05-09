import { v4 as uuidv4 } from "uuid";
import { createNoteDbJson } from "../JsonCrud/JsonCrud";

export const AddNote = ({ notes, setNotes, inputNote, setInputNote }) => {
  const note = { id: uuidv4(), note: inputNote };
  setNotes([...notes, note]);

  setInputNote("");

  createNoteDbJson(note);
};
