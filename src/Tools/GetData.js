import { useEffect } from "react";
import { getAllNotesDbJson } from "../JsonCrud/JsonCrud";

export const GetData = (loading, setNotes) => {
  useEffect(() => {
    if (loading) {
      getAllNotesDbJson(setNotes);
    }
  }, [loading]);
};
