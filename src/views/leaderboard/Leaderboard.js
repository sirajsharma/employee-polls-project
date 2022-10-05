import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  Avatar,
  Container,
  CssBaseline,
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

import { AppBar, Loader } from "../../components";

const Leaderboard = () => {
  const { users, loading } = useSelector((state) => state);

  const leaderboard = useMemo(() => {
    if (!users) return [];

    const requiredData = Object.keys(users).map((userId) => ({
      user: users[userId],
      answeredQuestions: Object.keys(users[userId].answers).length,
      createdQuestions: users[userId].questions.length,
    }));

    const leaderboardData = requiredData.sort((a, b) =>
      a.answeredQuestions + a.createdQuestions <
      b.answeredQuestions + b.createdQuestions
        ? 1
        : -1
    );

    return leaderboardData;
  }, [users]);

  return (
    <>
      <CssBaseline />
      <AppBar />
      <Container maxWidth="lg">
        {loading ? (
          <Loader />
        ) : (
          <TableContainer component={Paper} sx={{ marginTop: 15 }}>
            <Table
              size="medium"
              sx={{ minWidth: 500 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Users</TableCell>
                  <TableCell align="right">Answered</TableCell>
                  <TableCell align="right">Created</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaderboard.map((row) => (
                  <TableRow
                    key={row.user.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Grid container alignItems="center" gap={1}>
                        <Avatar src={row.user.avatarURL} />
                        <Grid item xs={10}>
                          <Typography variant="subtitle1">
                            {row.user.name}
                          </Typography>
                          <Typography variant="subtitle2">
                            {row.user.id}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell align="right">{row.answeredQuestions}</TableCell>
                    <TableCell align="right">{row.createdQuestions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </>
  );
};

export default Leaderboard;
