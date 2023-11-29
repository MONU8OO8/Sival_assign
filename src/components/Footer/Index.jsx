import {
  Container,
  FormControl,
  Input,
  createTheme,
  ThemeProvider,
  Button,
  FormLabel,
  Typography,
  Box,
 
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import "./Index.scss";
import { pink } from "@mui/material/colors";

export default function Footer() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5a48a7",
      },
      // secondary: pink,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        width={"100vw"}
        padding={"0px"}
        sx={{
          position: "relative",
          bottom: "0px",
          left: "0px",
          background: "rgb(21, 67, 96)",
          color: "white",
          margin: "0px 0px 0px 0px",
        }}
      >
        <Container>
          <form
            action=""
            method="post"
            className="form"
            maxWidth="100%"
          >
            <FormLabel>
              <Typography
                variant="h6"
                component="h1"
                color="primary"
                sx={{
                  fontSize: "25px",
                }}
              >
                Any Review
              </Typography>
            </FormLabel>
            <FormControl
              color="primary"
              variant="standard"
              sx={{
                margin: "6px 0px",
                padding: "2px 4px",
              }}
              focused
            >
              <Input
                sx={{
                  margin: "10px 0px",
                  width: "50%",
                  color: "white",
                  padding: "2px 5px",
                }}
                type="email"
                startAdornment={
                  <EmailIcon
                    sx={{
                      color: "white",
                      paddingRight: "8px",
                    }}
                  />
                }
                placeholder="Email"
                required
              />
            </FormControl>
            <FormControl
              color="primary"
              variant="standard"
              sx={{
                width: "50%",
                margin: "10px 0px",
                padding: "2px 4px",
              }}
              focused
            >
              <Input
                sx={{
                  padding: "2px 5px",
                  color: "white",
                }}
                type="text"
                startAdornment={
                  <MessageIcon
                    sx={{
                      color: "white",
                      paddingRight: "8px",
                    }}
                  />
                }
                placeholder="Enter your message"
                required
              />
            </FormControl>
            <FormControl>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                sx={{
                  width: "110px",
                }}
              >
                Send {<SendIcon />}
              </Button>
            </FormControl>
          </form>
        </Container>
        <Container
          sx={{
            height: "60px",
            backgroundColor: "rgb(21, 67, 96)",
            margin: "0px",
            padding: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          maxWidth="100%"
        >
          <Typography align="center">
            Made by monu;
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
