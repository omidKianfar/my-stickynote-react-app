import { useState } from "react";

import StickyContext from "../Hooks/StickyContext";
import NavbarMenu from "./Navbar";

const Layout = () => {
  const [notes, setNotes] = useState([]);
  const [inputNote, setInputNote] = useState("");

  return (
    <StickyContext.Provider
      value={{ notes, setNotes, inputNote, setInputNote }}
    >
      <NavbarMenu />
    </StickyContext.Provider>
  );
};
export default Layout;
