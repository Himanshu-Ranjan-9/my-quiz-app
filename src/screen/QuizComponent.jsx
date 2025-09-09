// QuizComponent.js
import React, { useState } from "react";
import { data, data2, data3 } from "../asset/Questions19";

import "../asset/QuizStyles.css"; // import custom css

export default function QuizComponent() {
  const [selectedSet, setSelectedSet] = useState("data");
  const [questions, setQuestions] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSetChange = (e) => {
    const value = e.target.value;
    setSelectedSet(value);
    if (value === "data") setQuestions(data);
    if (value === "data2") setQuestions(data2);
    if (value === "data3") setQuestions(data3);
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };

  if (questions.length === 0) return <p className="quiz-center-text">No questions available</p>;

  const currentQ = questions[currentIndex];

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <h1 className="quiz-title">Quiz App</h1>

        {/* Dropdown */}
        <div className="quiz-dropdown-wrapper">
          <select className="quiz-dropdown" value={selectedSet} onChange={handleSetChange}>
            <option value="data">Question Set 1</option>
            <option value="data2">Question Set 2</option>
            <option value="data3">Question Set 3</option>
          </select>
        </div>

        {/* Question */}
        <div className="quiz-question-wrapper">
          <p className="quiz-question">
            Q{currentIndex + 1}: {currentQ.question}
          </p>
          {showAnswer && (
            <p className="quiz-answer">
              <strong>Answer:</strong> {currentQ.answer}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="quiz-buttons-wrapper">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="quiz-btn quiz-btn-prev"
          >
            Prev
          </button>
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="quiz-btn quiz-btn-show"
          >
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1}
            className="quiz-btn quiz-btn-next"
          >
            Next
          </button>
        </div>

        {/* Progress Bar */}
        <div className="quiz-progress-wrapper">
          <div
            className="quiz-progress-bar"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <p className="quiz-progress-text">
          Question {currentIndex + 1} of {questions.length}
        </p>
      </div>
    </div>
  );
}
