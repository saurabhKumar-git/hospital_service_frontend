import {
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Link,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { deepOrange } from "@mui/material/colors";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinearProgress from "@mui/material/LinearProgress";
import {
  validateEmail,
  validateText,
  validateUserName,
} from "../../Helper/Validations";
import { useNavigate } from "react-router-dom";
import CustomAlert from "../../components/CustomAlert";
import { signup } from "../../ApiHelper/UsersAPI";

function Signup() {
  const navigate = useNavigate();
  const [roles, setroles] = useState([
    { roleId: 1, roleName: "hadmin" },
    { roleId: 2, roleName: "doctor" },
    { roleId: 3, roleName: "huser" },
  ]);

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    role: "",
    userName: "",
  });

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loader, setLoader] = useState(false);

  //onchange function
  const onInputChange = (event) => {
    // console.log(event.target);
    setSignUpData({ ...signUpData, [event.target.name]: event.target.value });
  };

  const onSignUpSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    console.log(signUpData);
    if (validateFields()) {
      var data = JSON.stringify({
        email: signUpData.email,
        fullname: signUpData.name,
        role: "hadmin",
        username: signUpData.email,
      });

      signup(data)
        .then((result) => {
          if (result.status === "400") {
            setError(true);
            setErrorMsg(result.message);
            setLoader(false);
          } else {
            setLoader(false);
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      setLoader(false);
    }
  };

  const validateFields = () => {
    debugger;
    let { name, email, role, userName } = signUpData;
    setError(false);
    if (name === "" || email === "" || !Boolean(role) || userName === "") {
      setError(true);
      setErrorMsg("Please provide values for required fields!");
      return false;
    } else {
      //validate
      if (!validateEmail(email)) {
        setError(true);
        setErrorMsg("Please provide valid email");
        return false;
      }
      if (!validateText(name)) {
        setError(true);
        setErrorMsg("Please provide valid name");
        return false;
      }
      if (!Boolean(role)) {
        setError(true);
        setErrorMsg("Select role");
        return false;
      }

      if (!validateUserName(userName)) {
        setError(true);
        setErrorMsg("User Name already exist");
        return false;
      }

      setError(false);
      setErrorMsg("");
      return true;
    }
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        "& .MuiTextField-root": { mb: 2 },
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
              <h1>Sign Up</h1>
            </Grid>
          </Grid>

          <CardContent>
            <Grid container justifyContent={"center"}>
              <Grid item>
                {error && <CustomAlert severity={"error"} msg={errorMsg} />}
              </Grid>
            </Grid>
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
            <form onSubmit={onSignUpSubmit}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        required
                        value={signUpData.name}
                        onChange={onInputChange}
                        name="name"
                        error={error && !Boolean(signUpData.name)}
                        helperText={
                          error &&
                          !validateText(signUpData.name) &&
                          "Name field should contain only alphabets."
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        value={signUpData.email}
                        onChange={onInputChange}
                        name="email"
                        error={error && !Boolean(signUpData.email)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField
                        id="outlined-basic"
                        label="User Name"
                        variant="outlined"
                        fullWidth
                        required
                        value={signUpData.userName}
                        onChange={onInputChange}
                        name="userName"
                        error={error && !Boolean(signUpData.userName)}
                        helperText={
                          (error && !Boolean(signUpData.userName)) || (
                            <>
                              <span>
                                Username should contain:
                                <ul>
                                  <li>Digits 0-9</li>
                                  <li>Alphabets [a-z,A-Z]</li>
                                  <li>Special Character [&,!,$,@]</li>
                                </ul>
                              </span>
                            </>
                          )
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Roles"
                        fullWidth
                        value={signUpData.role}
                        onChange={onInputChange}
                        name="role"
                        required
                        error={error && !Boolean(signUpData.role)}
                      >
                        {roles.map((option) => (
                          <MenuItem
                            key={option.roleName}
                            value={option.roleName}
                          >
                            {option.roleName}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                      <Button
                        fullWidth
                        variant="outlined"
                        onClick={onSignUpSubmit}
                      >
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>

            <Grid container justifyContent={"center"}>
              <Grid item>
                <Link href="/login" underline="none">
                  <h4>Already a member?</h4>
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Signup;
