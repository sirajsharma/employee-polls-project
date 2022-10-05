import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography, CssBaseline, Button } from "@mui/material";

const NotFound = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100vh",
        }}
      >
        <Container maxWidth="sm" align="center">
          <Typography
            align="center"
            color="text.primary"
            component="h1"
            variant="h1"
          >
            404
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
            component="h2"
            gutterBottom
            variant="h5"
          >
            Page not found
          </Typography>
          <Button component={Link} to="/" variant="contained">
            Home
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
