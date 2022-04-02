import { Box, Container } from "@mui/material";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import RoutesRoot from "./routes/RoutesRoot";
import "./css/main.css";
import Signup from "./modules/Login/Signup";

class App extends Component {
  render() {
    //Add Browser Route
    return (
      <Container maxWidth="false" disableGutters>
        <BrowserRouter>
          <RoutesRoot />
        </BrowserRouter>
        {/* <Signup /> */}
      </Container>
    );
  }
}

export default App;
