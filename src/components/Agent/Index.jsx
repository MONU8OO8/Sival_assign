import React from "react";
import { useEffect, useState } from "react";
import Body from "../Body";
import Header from "../Header";
import { getInitialData } from "../../utils";

const Agent = () => {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const notesAll = (searchNotes || notes).filter((note) => !note.archived);
  const notesArchive = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  return (
    <div className="agent-page" style={{ margin: "40px 0px", backgroundColor: "black" }}>
       <Header search={query} setQuery={setQuery} />
      <Body
        notesAll={notesAll}
        notesArchive={notesArchive}
        setNotes={setNotes}
      />
    </div>
  );
};

export default Agent;
