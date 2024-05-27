import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Success.css';  // Import the CSS file

const Success = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <h1>Form Submitted Successfully!</h1>
      <h2>Details</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  );
};

export default Success;

