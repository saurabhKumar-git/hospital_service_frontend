import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useSearchParams } from "react-router-dom";

function UpdatePassword(props) {
  const [passwordValues, setPassword] = useState({
    showPassword: false,
    password: "",
    email: "",
  });

  const onPasswordChange = (event) => {
    setPassword({ ...passwordValues, [event.target.name]: event.target.value });
  };

  const onShowPassword = () => {
    setPassword({
      ...passwordValues,
      showPassword: !passwordValues.showPassword,
    });
  };

  const onUpdatePassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        "& .MuiTextField-root": { mb: 2 },
        "& .MuiButton-root": { p: 1 },
        "& 	.MuiFormControl-root": { mb: 2 },
        height: "100vh",
      }}
      noValidate
      autoComplete="off"
      className="bannerImage"
    >
      <Card>
        <Grid container justifyContent="center">
          <Grid item>
            <h1>Update Password</h1>
          </Grid>
        </Grid>
        <CardContent>
          <form onSubmit={onUpdatePassword}>
            <Grid conatiner>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  value={passwordValues.email}
                  onChange={onPasswordChange}
                  name="email"
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <FormControl sx={{}} variant="outlined" fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={passwordValues.showPassword ? "text" : "password"}
                    value={passwordValues.password}
                    onChange={onPasswordChange}
                    name="password"
                    required
                    fullWidth
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={onShowPassword}
                          edge="end"
                        >
                          {passwordValues.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={onUpdatePassword}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default UpdatePassword;
