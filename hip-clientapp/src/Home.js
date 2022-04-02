import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Signup from "./modules/Login/Signup";

function Home() {
  return (
    <main>
      {/* <MainLayout /> */}
      {/* <Signup /> */}
      <Outlet></Outlet>
    </main>
  );
}

export default Home;
