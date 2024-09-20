import React from "react";
import { useSelector } from "react-redux";
import "../index.css";

const TestHistory = () => {
  const history = useSelector((state) => state.tests.history);
  console.log(history);
  return (
    <div className="test-history">
      <h2>Test History</h2>
      <ul>
        {history.length > 0 ? (
          history.map((record, index) => (
            <li key={index}>
              {`${record.title}: ${record.score.toFixed(2)}%`}
            </li>
          ))
        ) : (
          <li>No test history available.</li>
        )}
      </ul>
    </div>
  );
};

export default TestHistory;
