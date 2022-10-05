import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";

describe("_getQuestions", () => {
  it("will not return a null value", async () => {
    const questions = await _getQuestions();
    expect(questions).not.toBeNull();
  });

  it("will return Object of questions with 6 size", async () => {
    const questions = await _getQuestions();
    expect(Object.keys(questions).length).toEqual(6);
  });
});

describe("_getUsers", () => {
  it("will not return a null value", async () => {
    const users = await _getUsers();
    expect(users).not.toBeNull();
  });

  it("will return Object of users with 4 size", async () => {
    const users = await _getUsers();
    expect(Object.keys(users).length).toEqual(4);
  });
});

describe("_saveQuestion", () => {
  it("will return the saved question with all the fields", async () => {
    const formattedQuestion = {
      optionOneText: "Option one Text",
      optionTwoText: "Option two Text",
      author: "sarahedo",
    };
    const question = await _saveQuestion(formattedQuestion);
    expect(question).not.toBeNull();
    expect(question.id).not.toBeNull();
    expect(question.author).toEqual("sarahedo");
    expect(question.optionOne.text).toEqual("Option one Text");
    expect(question.optionTwo.text).toEqual("Option two Text");
    expect(question.timestamp).not.toBeNull();
    expect(question.optionOne.votes).toEqual([]);
    expect(question.optionTwo.votes).toEqual([]);
  });

  it("will return an error message if the question is not valid", async () => {
    const formattedQuestion = {
      optionOneText: "Option one Text",
      optionTwoText: "Option two Text",
    };

    await expect(_saveQuestion(formattedQuestion)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will return the true when question answer is successfuly saved", async () => {
    const formattedQuestion = {
      authedUser: "sarahedo",
      qid: "vthrdm985a262al8qx3do",
      answer: "optionOne",
    };
    const isAnswerSave = await _saveQuestionAnswer(formattedQuestion);
    expect(isAnswerSave).toBeTruthy();
  });

  it("will return an error message when question answer is not saved", async () => {
    const formattedQuestion = {
      authedUser: "sarahedo",
      qid: "vthrdm985a262al8qx3do",
    };
    await expect(_saveQuestionAnswer(formattedQuestion)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
