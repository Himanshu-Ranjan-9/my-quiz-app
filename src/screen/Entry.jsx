import React, { useState } from "react";
import Home from "./Home";
import QuizComponent from "./QuizComponent";

export default function Entry() {
  const [selectedQuiz, setSelectedQuiz] = useState("quiz20"); // default

  const handleChange = (e) => {
    setSelectedQuiz(e.target.value);
  };

  return (
    <div className="entry-container">
      <div className="dropdown-wrapper" style={{ textAlign: "center", margin: "20px 0" }}>
        <select
          value={selectedQuiz}
          onChange={handleChange}
          style={{
            padding: "10px 15px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "2px solid #4f46e5",
            outline: "none",
          }}
        >
          <option value="quiz20">Quiz 20 (Home)</option>
          <option value="quiz19">Quiz 19</option>
        </select>
      </div>

      {/* Conditional rendering */}
      <div>
        {selectedQuiz === "quiz20" && <Home />}
        {selectedQuiz === "quiz19" && <QuizComponent />}
      </div>
    </div>
  );
}
