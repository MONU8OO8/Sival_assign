import React from "react";
import { Box } from "@mui/system";
import Input from "../Input";
import {

  TextField,
  Button,
  Container,
  Typography,
  ButtonGroup,
  useMediaQuery,
} from "@mui/material";
import { ForkLeft, SearchRounded } from "@mui/icons-material";

import Client from "./Clients/Index";
import "./Index.scss";
import { useState, useEffect } from "react";
import Body from "../Body";
import Header from "../Header";
import { getInitialData } from "../../utils";
import List from "../List";




function Home( ) {

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
    <div className="hm-pg">
      {/* <img src={backgroundImage} alt="background" /> */}
      {/* <img src="/assets/image/background.webp" alt="bg" className="hm-img" /> */}
      <div className="home">
        <Box className="homebox">
          <Typography sx={{ fontSize: 60, alignItems: 'flex-start', width: 'fullWidth' }}>Explore your dream home</Typography>
          <Typography sx={{fontSize: 20}}>Embark on captivating tours to discover the
            perfect residence for you and your family.
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              height: "56px",
            }}
          >



            {/* <Input
              variant="filled"
              value={query}
          onChange={setQuery}
              label={<SearchRounded />}
              style={{
                alignContent: "start",
                height: "56px",
                backgroundColor: "#ffff",
              }}
              fullWidth
            /> */}
            <Input
          value={query}
          onChange={setQuery}
          type="search"
          id="search_note"
          name="search_note"
          placeholder="Find Notes..."
        />

          </Box>

        </Box>
        <div className="hmimg">

          <img src="/assets/image/background.webp" alt="bg" className="hm-img" style={{ marginRight: "5rem" }} />
        </div>
      </div>

      <Container maxWidth="xl">
        <Container maxWidth="xl">
          
          {/* <div style={{backgroundColor:"black"}}> */}
          <div>

          <List label="All Notes" setNotes={setNotes} notes={notesAll} />
          </div>
          <Typography variant="h5" component="h1" align="center" marginY={1} style={{ color: "black" }}>
            Looking for rental apartments
          </Typography>
          <Client />
        </Container>
      </Container>
    </div>
  );
}

export default Home;
