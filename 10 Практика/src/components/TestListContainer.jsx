import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setCurrentTest,
  loadTestsFromStorage,
} from "../features/tests/testsSlice";
import TestList from "./TestList";

const TestListContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tests = useSelector((state) => state.tests.allTests);

  useEffect(() => {
    dispatch(loadTestsFromStorage());
  }, [dispatch]);

  const handleSelectTest = (testId) => {
    dispatch(setCurrentTest(testId));

    navigate(`/take-test/:${testId}`);
  };

  return (
    <div>
      <TestList tests={tests} onSelectTest={handleSelectTest} />
    </div>
  );
};

export default TestListContainer;
