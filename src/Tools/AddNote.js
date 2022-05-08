import { v4 as uuidv4 } from "uuid";

export const AddNote = ({ notes, setNotes, inputNote, setInputNote }) => {
  setNotes([...notes, { id: uuidv4(), note: inputNote }]);
  setInputNote("");
};
