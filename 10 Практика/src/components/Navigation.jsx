import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Test List</Link>
        </li>
        <li>
          <Link to="/add-test">Add Test</Link>
        </li>
        <li>
          <Link to="/history">Test History</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
