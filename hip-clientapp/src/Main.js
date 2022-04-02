import { Grid } from "@mui/material";
import React from "react";
import hospitalImage from "./assets/images/hospital.webp";
import Signup from "./modules/Login/Signup";

function Main() {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={12} md={6}>
        <img src={hospitalImage} className="bannerImage" />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Signup />
      </Grid>
    </Grid>
  );
}

export default Main;
