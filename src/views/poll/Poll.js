import React, { useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";

import {
  LinearProgressWithLabel,
  PollHeader,
  PollOption,
  PollTable,
} from "./components";

import { AppBar, Loader } from "../../components";

import { handleSetAnswer } from "../../actions/shared";

const Poll = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authdUser, loading, questions, users } = useSelector(
    (state) => state
  );

  const questionId = location.pathname.split("/")[2];
  const question = questions[questionId];

  useEffect(() => {
    if (!questions.hasOwnProperty(questionId)) {
      navigate("/404");
    }
  }, [navigate, questionId, questions]);

  const handleChooseOption = (option) => {
    dispatch(handleSetAnswer(authdUser, question.id, option));
  };

  const options = useMemo(() => {
    const optionsStatus = [false, false];
    let selectedOption = "";
    if (question?.optionOne?.votes?.includes(authdUser)) {
      optionsStatus[0] = true;
      selectedOption = "optionOne";
    } else if (question?.optionTwo?.votes?.includes(authdUser)) {
      optionsStatus[1] = true;
      selectedOption = "optionTwo";
    }

    return {
      optionsStatus,
      selectedOption,
    };
  }, [question, authdUser]);

  const pollData = useMemo(() => {
    const pollData = [];
    const { optionOne, optionTwo } = question || {};
    optionOne?.votes?.length > 0 &&
      optionOne?.votes?.forEach((voter) => {
        pollData.push({
          voter,
          option: "First Option",
        });
      });

    optionTwo?.votes?.length > 0 &&
      optionTwo?.votes?.forEach((voter) => {
        pollData.push({
          voter,
          option: "Second Option",
        });
      });

    return pollData;
  }, [question]);

  const getPercentage = (votes, totalVotes) => {
    return (votes / totalVotes) * 100;
  };

  return (
    <>
      <CssBaseline />
      <AppBar />
      {!loading ? (
        <main style={{ marginTop: "4%", marginBottom: "4%" }}>
          <PollHeader
            author={question?.author}
            avatarURL={users[question?.author]?.avatarURL}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth="lg">
              <Grid container spaceing={2} justifyContent="space-around">
                <PollOption
                  label="First Option"
                  onChoose={handleChooseOption}
                  pollText={question?.optionOne?.text}
                  isSelected={options?.optionsStatus[0]}
                  buttonName={options?.optionsStatus[0] ? "Selected" : "Choose"}
                  selectedOption={options?.selectedOption}
                  name="optionOne"
                />
                <PollOption
                  label="Second Option"
                  onChoose={handleChooseOption}
                  pollText={question?.optionTwo.text}
                  isSelected={options?.optionsStatus[1]}
                  buttonName={options?.optionsStatus[1] ? "Selected" : "Choose"}
                  selectedOption={options?.selectedOption}
                  name="optionTwo"
                />
              </Grid>
            </Container>
            <Container maxWidth="md">
              {options.selectedOption && (
                <>
                  <Box
                    textAlign="center"
                    alignContent="center"
                    marginBottom={5}
                  >
                    <Typography
                      variant="h4"
                      component="h4"
                      marginTop={6}
                      marginBottom={4}
                    >
                      Poll Results
                    </Typography>
                    <Grid container spacing={6}>
                      <Grid item xs={12} md={6}>
                        <Typography variant="h6" component="h6">
                          First Option
                        </Typography>
                        <p>
                          Total first option votes:{" "}
                          {question?.optionOne?.votes?.length}
                        </p>
                        <LinearProgressWithLabel
                          variant="determinate"
                          value={getPercentage(
                            question?.optionOne?.votes?.length,
                            question?.optionOne?.votes?.length +
                              question?.optionTwo?.votes?.length
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography variant="h6" component="h6">
                          Second Option
                        </Typography>
                        <p>
                          Total first option votes:{" "}
                          {question?.optionTwo?.votes?.length}
                        </p>
                        <LinearProgressWithLabel
                          variant="determinate"
                          value={getPercentage(
                            question?.optionTwo?.votes?.length,
                            question?.optionOne?.votes?.length +
                              question?.optionTwo?.votes?.length
                          )}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <PollTable
                    pollData={pollData}
                    users={users}
                    authdUser={authdUser}
                  />
                </>
              )}
            </Container>
          </Box>
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Poll;
