// App.jsx
import React, { useState } from 'react';
import RandomItems from './components/RandomItems';
import History from './components/History';
import BanList from './components/BanList';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [history, setHistory] = useState([]);
  const [banList, setBanList] = useState([]);
  const [isDiscoverClicked, setIsDiscoverClicked] = useState(false);

  const addToHistory = (item) => {
    setHistory([...history, item]);
  };

  const addToBanList = (item) => {
    setBanList([...banList, item]);
  };

  const shuffleItems = async () => {
    setIsDiscoverClicked(true);
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    setItems(data.results.sort(() => Math.random() - 0.5));
  };

  return (
    <div className="app">
      <button onClick={shuffleItems}>Discover!</button>
      {isDiscoverClicked && <RandomItems items={items} addToHistory={addToHistory} addToBanList={addToBanList} />}
      <History history={history} />
      <BanList banList={banList} />
    </div>
  );
};

export default App;
