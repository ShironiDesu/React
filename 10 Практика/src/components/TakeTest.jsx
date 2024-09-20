import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitTestResult } from "../features/tests/testsSlice";
import "../index.css";

const TakeTest = () => {
  const currentTest = useSelector((state) => state.tests.currentTest);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    setSelectedAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = optionIndex;
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    const correctAnswers = currentTest.questions.reduce(
      (count, question, index) => {
        return (
          count + (selectedAnswers[index] === question.correctOption ? 1 : 0)
        );
      },
      0
    );

    dispatch(
      submitTestResult({
        testId: currentTest.id,
        score: (correctAnswers / currentTest.questions.length) * 100,
        title: currentTest.title,
      })
    );
    navigate("/history");
  };

  if (!currentTest) return <p>Please select a test to take.</p>;

  return (
    <div className="take-test">
      <h2>{currentTest.title}</h2>
      {currentTest.questions.map((question, questionIndex) => (
        <div key={questionIndex} className="question-block">
          <p>{question.question}</p>
          {question.options.map((option, optionIndex) => (
            <label key={optionIndex}>
              {option}
              <input
                type="radio"
                name={`question-${questionIndex}`}
                checked={selectedAnswers[questionIndex] === optionIndex}
                onChange={() => handleAnswerChange(questionIndex, optionIndex)}
              />
            </label>
          ))}
        </div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>
        Submit Test
      </button>
    </div>
  );
};

export default TakeTest;
