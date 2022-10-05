import React from "react";
import { Container, Box, Typography } from "@mui/material";

const Header = ({ heading }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          align="center"
          color="text.primary"
          component="h1"
          gutterBottom
          variant="h2"
        >
          {heading}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
