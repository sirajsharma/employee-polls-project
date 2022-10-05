import React from "react";
import { Avatar, Box, Container, Typography } from "@mui/material";

const PollHeader = ({ author, avatarURL }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
      }}
    >
      <Container maxWidth="sm" align="center">
        <Typography
          align="center"
          color="text.primary"
          component="h1"
          variant="h2"
        >
          Poll by {author}
        </Typography>
        <Avatar alt={author} src={avatarURL} sx={{ width: 150, height: 150 }} />
        <Typography
          align="center"
          color="text.secondary"
          component="h2"
          marginTop={2}
          variant="h4"
        >
          Would You Rather
        </Typography>
      </Container>
    </Box>
  );
};

export default PollHeader;
