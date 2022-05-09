import axios from "axios";

const baseUrl = "http://localhost:3050/notes";

const createNoteDbJson = async (note) => {
  const newNote = await axios.post(baseUrl, note);
  return newNote;
};

const deleteNoteDbJson = async (id) => {
  const deleteNote = await axios.delete(`${baseUrl}/${id}`);
  return deleteNote;
};

const updateNoteDbJson = async (id, payLoad) => {
  const newNote = await axios.patch(`${baseUrl}/${id}`, payLoad);
  return newNote;
};

const getAllNotesDbJson = async (setNotes) => {
  const notes = await axios
    .get(baseUrl)
    .then((response) => setNotes(response.data))
    .catch((error) => console.log(error));
  return notes;
};

export {
  createNoteDbJson,
  deleteNoteDbJson,
  updateNoteDbJson,
  getAllNotesDbJson,
};
