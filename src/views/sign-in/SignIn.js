import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";

import { ErrorToast } from "../../components";

import { handleAuthdUser } from "../../actions/authdUser";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const authdUser = useSelector((state) => state.authdUser);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (authdUser) {
      navigate(location?.state?.path || "/");
    }
  }, [authdUser, navigate, location]);

  const handleChage = (event) => {
    const { name, value } = event.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "" || password === "") {
      setErrorText("Please enter a username and password.");
      return;
    }

    dispatch(handleAuthdUser(username, password));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            autoComplete="username"
            autoFocus
            fullWidth
            id="username"
            inputProps={{ "data-testid": "username" }}
            label="Username"
            margin="normal"
            name="username"
            onChange={handleChage}
            required
            value={username}
          />
          <TextField
            autoComplete="current-password"
            inputProps={{ "data-testid": "password" }}
            fullWidth
            id="password"
            label="Password"
            margin="normal"
            name="password"
            onChange={handleChage}
            required
            type="password"
            value={password}
          />
          <Button
            data-testid="login-button"
            fullWidth
            id="login-button"
            sx={{ mt: 3, mb: 2 }}
            type="submit"
            variant="contained"
          >
            Sign In
          </Button>
        </Box>
        {errorText && <ErrorToast open={!!errorText} error={errorText} />}
      </Box>
    </Container>
  );
};

export default SignIn;
