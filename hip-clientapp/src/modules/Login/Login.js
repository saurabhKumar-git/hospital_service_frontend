import React, { useEffect, useState } from "react";
import {
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
  Avatar,
  Divider,
  Link,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { deepOrange, deepPurple } from "@mui/material/colors";

function UpdatePassword(props) {
  const [passwordValues, setPassword] = useState({
    showPassword: false,
    password: "",
    email: "",
  });

  const [loader, setLoader] = useState(false);

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
        "& .MuiFormControl-root": { mb: 2 },
        "& .MuiButton-root": { p: 1 },
        "& .MuiIconButton-root": { m: 2 },
        height: "100vh",
      }}
      className="bannerImage"
    >
      <Grid item>
        <Card>
          {loader && <LinearProgress sx={{ height: "6px" }} />}
          <Grid container justifyContent="center">
            <Grid item>
              <h1>Login</h1>
            </Grid>
          </Grid>
          <CardContent>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <IconButton aria-label="google" color="secondary" size="large">
                  <GoogleIcon />
                </IconButton>
                <IconButton
                  aria-label="facebook"
                  color="secondary"
                  size="large"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="github" color="secondary" size="large">
                  <GitHubIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Divider>
              <Avatar sx={{ bgcolor: deepOrange[500], m: 1 }}>OR</Avatar>
            </Divider>
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
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <Link href="/signup" underline="none">
                  <h4>Register</h4>
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default UpdatePassword;
