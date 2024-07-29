import React from 'react';
import './Alert.css';

const Alert = ({ message, showAlert }) => {
  return (
    <div className={`alert ${showAlert ? 'show' : ''}`}>
      {message}
    </div>
  );
};

export default Alert;
