import React from 'react';
import './Modal.css';

export default function Modal({ closeModal,obj }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Form Submitted</h2>
        <p>Input 1: {obj?.input1}</p>
        <p>Input 2: {obj?.input2}</p>
        <p>Input 3: {obj?.input3}</p>
        <p>Input 4: {obj?.input4}</p>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  );
}
