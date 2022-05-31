import axios from "axios";

const baseUrl = "http://localhost:3050/notes";

// Create note data in db.json
const createNoteDbJson = async (note) => {
  const newNote = await axios.post(baseUrl, note);
  return newNote;
};

// Delete note data in db.json
const deleteNoteDbJson = async (id) => {
  const deleteNote = await axios.delete(`${baseUrl}/${id}`);
  return deleteNote;
};

// Update note data in db.json
const updateNoteDbJson = async (id, payLoad) => {
  const newNote = await axios.patch(`${baseUrl}/${id}`, payLoad);
  return newNote;
};

// Get db.json notes data
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
