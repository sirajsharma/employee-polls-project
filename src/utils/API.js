import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export const authUser = async (userId, userPassword) => {
  const users = await _getUsers();
  const user = users[userId];
  if (user && user.password === userPassword) {
    return user;
  }
  return null;
};

export const getData = async () => {
  const users = await _getUsers();
  const questions = await _getQuestions();
  return { users, questions };
};

export const getQuestions = async () => {
  const questions = await _getQuestions();
  return questions;
};

export const getUsers = async () => {
  const users = await _getUsers();
  return users;
};

export const addQuestion = async (question) => {
  const savedQuestion = await _saveQuestion(question);
  return savedQuestion;
};

export const saveQuestionAnswer = async (questionAnswer) => {
  try {
    void (await _saveQuestionAnswer(questionAnswer));
  } catch (error) {
    console.log(error);
  }
};
