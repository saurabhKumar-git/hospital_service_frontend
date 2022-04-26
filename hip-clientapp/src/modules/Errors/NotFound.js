import { Grid } from "@mui/material";
import React from "react";
import NotFoundImage from "../../assets/images/NotFound.svg";

const NotFound = () => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item>
        {/* <p>There's nothing here!</p> */}
        <img src={NotFoundImage} />
        {/* className="notFoundImg" /> */}
      </Grid>
    </Grid>
  );
};
export default NotFound;
