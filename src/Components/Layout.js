import { useState } from "react";

import StickyContext from "../Hooks/StickyContext";
import NavbarMenu from "./Navbar/Navbar";

const Layout = () => {
  const [notes, setNotes] = useState([]);
  const [inputNote, setInputNote] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <StickyContext.Provider
      value={{ notes, setNotes, inputNote, setInputNote, loading, setLoading }}
    >
      <NavbarMenu />
    </StickyContext.Provider>
  );
};
export default Layout;
