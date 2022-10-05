import { addQuestion } from "../utils/API";
import { setLoading } from "./loading";
import { addCreatedQuestion } from "./users";

export const SET_QUESTIONS = "SET_QUESTIONS";
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION";

export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  questions,
});

export const addNewQuestion = (question) => ({
  type: ADD_NEW_QUESTION,
  question,
});

export const handleAddNewQuestion = (question) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const newQuestion = await addQuestion(question);
    dispatch(addNewQuestion(newQuestion));
    dispatch(addCreatedQuestion(newQuestion.id, question.author));
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(setLoading(false));
  }
};
