
import React from 'react';
import './History.css';
const History = ({ history }) => {
  return (
    <div className="history">
      <h1>Who have we seen so far?</h1>
      {history.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} />
          <p>{item.species}</p>
        </div>
      ))}
    </div>
  );
};

export default History;
