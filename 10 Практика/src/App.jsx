import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestListContainer from './components/TestListContainer'; // Контейнер для списка тестов
import AddTestForm from './components/AddTestForm'; // Форма для добавления теста
import TakeTest from './components/TakeTest'; // Прохождение теста
import TestHistory from './components/TestHistory'; // История тестов
import Navigation from './components/Navigation'; // Компонент навигации

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Test Platform</h1>
        <Navigation />
        <Routes>
          <Route path="/" element={<TestListContainer />} /> 
          <Route path="/add-test" element={<AddTestForm />} /> 
          <Route path="/take-test/:testId" element={<TakeTest />} /> 
          <Route path="/history" element={<TestHistory />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
