import { useEffect } from "react";
import { getAllNotesDbJson } from "../JsonCrud/JsonCrud";

// Fetch default db.json notes data
export const GetData = (loading, setNotes) => {
  useEffect(() => {
    if (loading) {
      getAllNotesDbJson(setNotes);
    }
  }, [loading]);
};
