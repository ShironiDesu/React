import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTest } from "../features/tests/testsSlice";
import { useNavigate } from "react-router-dom";
import "../index.css";

const AddTestForm = () => {
  const { allTests } = useSelector((state) => state.tests);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const answersAndQuestionsLength = 2;

  const [questions, setQuestions] = useState(
    Array.from({ length: answersAndQuestionsLength }, () => ({
      question: "",
      correctOption: -1,
      options: ["", "", "", ""],
    }))
  );

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectOptionChange = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].correctOption = optionIndex;
    setQuestions(updatedQuestions);
  };

  const addTestHandle = (e) => {
    e.preventDefault();

    if (
      !title.trim() ||
      questions.some(
        (q) =>
          !q.question.trim() ||
          q.options.some((opt) => !opt.trim()) ||
          q.correctOption === -1
      )
    ) {
      alert(
        "Please fill in all fields correctly and select a correct answer for each question."
      );
      return;
    }

    const newTest = {
      id: Date.now(),
      title: title,
      questions: questions.map((q, index) => ({
        questionId: index,
        question: q.question,
        options: q.options,
        correctOption: q.correctOption,
      })),
    };
    dispatch(addTest(newTest));

    navigate("/");

    setQuestions(
      Array.from({ length: answersAndQuestionsLength }, () => ({
        question: "",
        correctOption: -1,
        options: ["", "", "", ""],
      }))
    );
    setTitle("");
  };

  return (
    <div className="add-test-form">
      <h2>Add New Test</h2>
      <form onSubmit={addTestHandle}>
        <input
          type="text"
          placeholder="Test Title"
          value={title}
          className="input-field"
          onChange={(e) => setTitle(e.target.value)}
        />
        {questions.map((q, index) => (
          <div className="question-field" key={index}>
            <label>Question: {index + 1}</label>
            <input
              type="text"
              placeholder="Question"
              className="input-field"
              value={q.question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
            />

            {q.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="text"
                  placeholder={`Option ${optionIndex + 1}`}
                  className="input-field"
                  value={option}
                  onChange={(e) =>
                    handleOptionChange(index, optionIndex, e.target.value)
                  }
                />
                <label>
                  <input
                    type="radio"
                    name={`correctOption-${index}`}
                    checked={q.correctOption === optionIndex}
                    onChange={() =>
                      handleCorrectOptionChange(index, optionIndex)
                    }
                  />
                  Correct Answer
                </label>
              </div>
            ))}
          </div>
        ))}

        <button type="submit" className="submit-button">
          Add Test
        </button>
      </form>
    </div>
  );
};

export default AddTestForm;
