import React from "react";
import { Box } from "@mui/system";
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
import { useState } from "react";

 

function Home() {
   
  

   

  return (
    <div className="hm-pg">
      {/* <img src={backgroundImage} alt="background" /> */}
      {/* <img src="/assets/image/background.webp" alt="bg" className="hm-img" /> */}
      <div className="home">
        <Box className="homebox">
           <Typography sx={{fontSize: 64, alignItems: 'flex-start', width: 'fullWidth'}}>Explore your dream home</Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              height: "56px",
            }}
          >
             
              
             
            <TextField
              variant="filled"
              label={<SearchRounded />}
              sx={{
                alignContent: "start",
                height: "56px",
                backgroundColor: "#ffff",
              }}
              fullWidth
            />
            
          </Box>
          
        </Box>
        <div className="hmimg">

        <img src="/assets/image/background.webp" alt="bg" className="hm-img"  style={{marginRight: "5rem"}}/>
        </div>
      </div>

      <Container maxWidth="xl">
        <Container maxWidth="xl">
          <Typography variant="h5" component="h1" align="center" marginY={1} style={{color: "black"}}>
            Looking for rental apartments
          </Typography>
          <Client />
        </Container>
      </Container>
    </div>
  );
}

export default Home;
