import { Box, Container } from "@mui/material";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import RoutesRoot from "./routes/RoutesRoot";
import "./css/main.css";
import Signup from "./modules/Login/Signup";
import { AuthProvider } from "./Helper/AuthProvider";

class App extends Component {
  render() {
    //Add Browser Route
    return (
      <AuthProvider>
        <Container maxWidth="false" disableGutters>
          <BrowserRouter>
            <RoutesRoot />
          </BrowserRouter>
          {/* <Signup /> */}
        </Container>
      </AuthProvider>
    );
  }
}

export default App;
