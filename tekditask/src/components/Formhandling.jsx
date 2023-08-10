import React, { useState } from 'react';

function FormHandling () {
  const [Data, setData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    setMessage(`Thank you, ${Data.name}, for submitting the form!`);
  
  };

  return (
    <div className='form'>
      <h1>Form Handling</h1>
      <form onSubmit={Submit}>
        <input type="text" placeholder="Name" value={Data.name}
          onChange={(e) => setData({ ...Data, name: e.target.value })}
        />
        <input type="email" placeholder="Email" value={Data.email}
          onChange={(e) => setData({ ...Data, email: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default FormHandling;
