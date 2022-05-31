import { v4 as uuidv4 } from "uuid";
import { createNoteDbJson } from "../JsonCrud/JsonCrud";

// Add note in notes state
export const AddNote = (e, { notes, setNotes, inputNote, setInputNote }) => {
  e.preventDefault();
  const note = { id: uuidv4(), note: inputNote };
  setNotes([...notes, note]);

  setInputNote("");

  createNoteDbJson(note);
};
