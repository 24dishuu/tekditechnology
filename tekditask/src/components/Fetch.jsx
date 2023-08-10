import React, { useState, useEffect } from 'react';
import './style1.css'

function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div class="fetch">
      <h1>API Data</h1>
      <ul>
        {data.map((v,i) => (
     <div class = "map">

       <h2>id: { v.id }</h2><br />
        <h2>name: { v.name } </h2><br />
        <h2>username: { v.username } </h2>
        <h2> email : { v.email } </h2><br />
      
     </div> 
        ))}
      </ul>
    </div>
  );
};

export default Fetch