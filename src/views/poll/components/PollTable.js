import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const PollTable = ({ authdUser, pollData, users }) => {
  return (
    <TableContainer component={Paper}>
      <Table size="medium" sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell align="right">Selected Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pollData.map((item) => (
            <TableRow
              key={users[item.voter].id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                <Grid container alignItems="center" gap={1}>
                  <Avatar src={users[item.voter].avatarURL} />
                  <Grid item xs={10}>
                    <Typography variant="subtitle1">
                      {users[item.voter].name}{" "}
                      {users[item.voter].id === authdUser && "(You)"}
                    </Typography>
                    <Typography variant="subtitle2">
                      {users[item.voter].id}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell align="right">{item.option}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PollTable;
