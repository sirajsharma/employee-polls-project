import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
  CssBaseline,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { AddTask, FiberNew, Home as HomeIcon } from "@mui/icons-material";

import { QuestionsSection } from "./components";
import { AppBar } from "../../components";

const Home = () => {
  const { authdUser, loading, questions } = useSelector((state) => state);
  const [value, setValue] = useState(0);

  const [newQuestions, completedQuestions] = useMemo(() => {
    const newQuestions = [];
    const completedQuestions = [];

    for (const questionId in questions) {
      if (
        questions[questionId].optionOne.votes.includes(authdUser) ||
        questions[questionId].optionTwo.votes.includes(authdUser)
      ) {
        completedQuestions.push(questions[questionId]);
      } else {
        newQuestions.push(questions[questionId]);
      }
    }

    newQuestions.sort((a, b) => b.timestamp - a.timestamp);
    completedQuestions.sort((a, b) => b.timestamp - a.timestamp);

    return [newQuestions, completedQuestions];
  }, [questions, authdUser]);

  if (value === 0) {
  }

  return (
    <>
      <CssBaseline />
      <AppBar />

      <main style={{ marginBlock: "4%" }}>
        {(value === 0 || value === 1) && (
          <QuestionsSection
            heading="New Questions"
            loading={loading}
            questions={newQuestions}
          />
        )}
        {(value === 0 || value === 2) && (
          <QuestionsSection
            heading="Done"
            loading={loading}
            questions={completedQuestions}
          />
        )}
      </main>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{ position: "fixed", bottom: 0, width: "100%" }}
      >
        <BottomNavigationAction label="All" icon={<HomeIcon />} />
        <BottomNavigationAction label="New Questions" icon={<FiberNew />} />
        <BottomNavigationAction label="Done" icon={<AddTask />} />
      </BottomNavigation>
    </>
  );
};

export default Home;
