import { getData } from "../utils/API";
import { setQuestions } from "./questions";
import { setUsers } from "./users";
import { setLoading } from "./loading";

import { saveQuestionAnswer } from "../utils/API";

export const handleSetAnswer = (authdUser, questionId, selectedOption) => {
  const formattedAnswer = {
    authedUser: authdUser,
    qid: questionId,
    answer: selectedOption,
  };

  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await saveQuestionAnswer(formattedAnswer);
      const data = await getData();
      dispatch(setQuestions(data.questions));
      dispatch(setUsers(data.users));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const handleInitialData = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const data = await getData();
      dispatch(setQuestions(data.questions));
      dispatch(setUsers(data.users));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
