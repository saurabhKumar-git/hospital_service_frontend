import React from "react";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";

const CustomAlert = ({ severity, msg }) => {
  return <Alert severity={severity}>{msg}</Alert>;
};

export default CustomAlert;
