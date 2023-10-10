
import React from 'react';
import './BanList.css';

const BanList = ({ banList }) => {
  return (
    <div className="ban-list">
      <h1>Ban List</h1>
      <h2>Select an attribute in your listing to ban it</h2>
      {banList.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} />
          <p>{item.species}</p>
        </div>
      ))}
    </div>
  );
};

export default BanList;
