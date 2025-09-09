import React, { useEffect, useState } from "react";
import questions from "../asset/Questions";
import "../asset/Home.css";

function Home() {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [selectedOption, setSelectedOption] = useState(null); // Store selected option
  const [isCorrect, setIsCorrect] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [next, setnext] = useState(false);
  const [deepClonedQuestions, setDeepClonedQuestions] = useState(null);

  const [prevQuestion, setPrevQuestion] = useState({});

  useEffect(() => {
     setDeepClonedQuestions( JSON.parse(JSON.stringify(questions)));
   
    setnext(true)

  }, []);



  useEffect(() => {
      
      setShowOptions(false);

    if (deepClonedQuestions) {
      let questionIndex = Math.floor(
        Math.random() * deepClonedQuestions.length
      );
      setCurrentQuestion(deepClonedQuestions[questionIndex]);
      deepClonedQuestionsFilter(questionIndex);

      console.log("question--", currentQuestion);
      
    } else {
        console.error("No questions available in deepClonedQuestions");
    }
}, [next]);


  const matchOption = (value, ans) => {
    setSelectedOption(value); // Update the selected option
    setIsCorrect(value === ans);
  };

  function deepClonedQuestionsFilter(questionIndex) {
    setDeepClonedQuestions(
      deepClonedQuestions.filter((item, index) => {
        return index != questionIndex;
      })
    );
  }

  return (
   
    <div className="home-container">
      <div className="question-container">
        <h2>
          <span className="question-label">Q.</span> {currentQuestion.Question}
        </h2>
      </div>{showOptions && (
  <div className="options-container">
    {currentQuestion?.Options &&
      Object.entries(currentQuestion.Options).map(([key, value]) => (
        <div
          key={key}
          className={`option ${
            selectedOption === value
              ? isCorrect
                ? "option-correct"
                : "option-incorrect"
              : ""
          }`}
          onClick={() => matchOption(value, currentQuestion?.right_answer)}
        >
          <strong>{key}</strong>: {value}
        </div>
      ))}
  </div>
)}

      <div className="button-container">
        <button className="button show-options" onClick={() => setShowOptions((prev) => !prev)}>
          Show Options
        </button>
        <button className="button next-question" onClick={() => setnext((prev) => !prev)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
