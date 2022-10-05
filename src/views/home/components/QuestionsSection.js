import React from "react";
import { Box, CircularProgress, Container, Grid } from "@mui/material";

import { Header, QuestionCard } from "./index";

const QuestionsSection = ({ loading, heading, questions }) => {
  return (
    <Container maxWidth="lg">
      <Header heading={heading} />
      <Container sx={{ py: 4 }} maxWidth="lg">
        <Grid container spacing={4}>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            questions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))
          )}
        </Grid>
      </Container>
    </Container>
  );
};

export default QuestionsSection;
