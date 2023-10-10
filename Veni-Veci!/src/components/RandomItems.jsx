
import React from 'react';
import './RandomItems.css';

const RandomItems = ({ items, addToHistory, addToBanList }) => {
  return (
    <div className="random-items">
      <h1>Which Rick and Morty Character are you?</h1>
      <h2>Discover all the characters</h2>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} />
          <p>{item.species}</p>
          <button onClick={() => addToHistory(item)}>Add to History</button>
          <button onClick={() => addToBanList(item)}>Add to Ban List</button>
        </div>
      ))}
    </div>
  );
};

export default RandomItems;
