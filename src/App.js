import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
      .catch((error) => console.log(error));
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App py-28">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold capitalize text-center pb-5">
          {' '}
          Monster Rolodex
        </h1>
        <input
          className="py-4 px-10"
          type="search"
          placeholder="Search Monsters"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div className='block' key={monster.id}>
            <div className=''>
            <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2&size180x180`} />
              <h2 className='text-center'>{monster.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
