import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";

import { AppBar, ErrorToast } from "../../components";

import { handleAddNewQuestion } from "../../actions/questions";

const New = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authdUser } = useSelector((state) => state);
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleChage = (event) => {
    const { name, value } = event.target;

    if (name === "optionOneText") {
      setOptionOneText(value);
    } else if (name === "optionTwoText") {
      setOptionTwoText(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const question = {
      author: authdUser,
      optionOneText,
      optionTwoText,
    };

    if (question.optionOneText === "" || question.optionTwoText === "") {
      setErrorText("Please fill in all fields!");
      return;
    }

    dispatch(handleAddNewQuestion(question));
    navigate("/");
  };

  return (
    <>
      <CssBaseline />
      <AppBar />
      <main style={{ marginTop: "4%" }}>
        <Container maxWidth="md">
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Would You Rather
              </Typography>
              <Typography
                component="h2"
                variant="h5"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Create Your Own Poll
              </Typography>
            </Container>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              autoComplete="optionOneText"
              autoFocus
              fullWidth
              id="optionOneText"
              inputProps={{ "data-testid": "option-one-text" }}
              label="First Option"
              margin="normal"
              name="optionOneText"
              onChange={handleChage}
              required
              value={optionOneText}
            />
            <TextField
              autoComplete="optionTwoText"
              fullWidth
              id="optionTwoText"
              inputProps={{ "data-testid": "option-two-text" }}
              label="Second Option"
              margin="normal"
              name="optionTwoText"
              onChange={handleChage}
              required
              value={optionTwoText}
            />
            <Button
              type="submit"
              fullWidth
              data-testid="submit-button"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Poll
            </Button>
          </Box>
        </Container>
        {errorText && <ErrorToast open={!!errorText} error={errorText} />}
      </main>
    </>
  );
};

export default New;
