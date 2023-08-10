import React from 'react';

const Conditional = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome! You are logged in.</h1>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
};

export default Conditional;
